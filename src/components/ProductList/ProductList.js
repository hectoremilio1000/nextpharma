"use client";
import React, { useState } from "react";
import pro from "../../constans/productos.json";
const ProductList = () => {
  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calcular el índice de inicio y final para los productos de la página actual
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Obtener los productos de la página actual utilizando slice
  const displayedProducts = pro.products.slice(startIndex, endIndex);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(pro.products.length / productsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  // Calcular los botones de página que se mostrarán
  const visiblePages = [];
  for (
    let i = Math.max(1, currentPage - 1);
    i <= Math.min(totalPages, currentPage + 1);
    i++
  ) {
    visiblePages.push(i);
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-[#009dc6]">
          Medicamentos
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group relative">
              <div className="flex items-center w-full overflow-hidden rounded-md bg-white hover:bg-[#f5f8ff] lg:h-[200px]">
                <img
                  src={product?.images?.[1]?.url}
                  alt={product.name}
                  className="h-[150px] object-contain object-center lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div className="overflow-hidden">
                  <h3 className="text-sm text-gray-700">
                    <a href={product.url}>
                      {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-[12px] overflow-hidden text-gray-400 text-ellipsis w-full whitespace-nowrap">
                    {product.additionalDescription}
                  </p>
                </div>
                <p className="text-sm font-bold text-[#009dc6]">
                  {product.price.formattedValue}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Paginador */}
        <div className="mt-6 flex justify-end">
          <nav className="space-x-2">
            {/* Botón anterior */}
            {currentPage > 1 && (
              <button
                onClick={() => goToPage(currentPage - 1)}
                className="px-3 text-sm py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-indigo-200"
              >
                Anterior
              </button>
            )}

            {/* Botones de página visibles */}
            {visiblePages.map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-3 py-2 rounded-md ${
                  currentPage === page
                    ? "bg-[#9ca500] text-white text-sm"
                    : "bg-gray-200 text-gray-700 hover:bg-indigo-200 text-sm"
                }`}
              >
                {page}
              </button>
            ))}

            {/* Botón siguiente */}
            {currentPage < totalPages && (
              <button
                onClick={() => goToPage(currentPage + 1)}
                className="px-3 text-sm py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-indigo-200"
              >
                Siguiente
              </button>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
