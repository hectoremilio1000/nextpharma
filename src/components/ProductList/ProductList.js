"use client";
import React, { useEffect, useState } from "react";
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
  const [categorias, setCategorias] = useState();
  const encontrarCategorys = () => {
    const subcategoriasUnicas = {};
    pro.products.forEach((producto) => {
      const gtmProperties = producto.gtmProperties;
      const subcategoria = gtmProperties.subcategory;
      const division = gtmProperties.division;

      // Verificamos si la subcategoría ya existe en el objeto
      if (!subcategoriasUnicas[subcategoria]) {
        // Si no existe, la inicializamos con un arreglo vacío para almacenar divisiones únicas
        subcategoriasUnicas[subcategoria] = [];
      }

      // Agregamos la división al arreglo de divisiones de la subcategoría si no está presente
      if (division && !subcategoriasUnicas[subcategoria].includes(division)) {
        subcategoriasUnicas[subcategoria].push(division);
      }
    });
    setCategorias(subcategoriasUnicas);
  };
  useEffect(() => {
    encontrarCategorys();
  }, []);
  return (
    <div className="bg-[#f5f8ff]">
      <div className="mx-auto max-w-5xl py-16 sm:py-24">
        {/* <h2 className="text-2xl font-bold tracking-tight  text-gray-700"> */}
        <h2 className="text-2xl font-bold tracking-tight text-[#009dc6]">
          Medicamentos
        </h2>
        <button
          className="p-3 rounded-lg bg-gray-600 text-white"
          onClick={() => subir_categorias()}
        >
          Subir categorias
        </button>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4 rounded-lg">
          {displayedProducts.map((product, index) => (
            <a key={index} href={product.url}>
              <div
                key={product.id}
                className="group relative bg-white hover:bg-[#f5f8ff] ease-in p-6"
              >
                <div className="flex items-center justify-center w-full overflow-hidden rounded-md bg-white  lg:h-[200px]">
                  <img
                    src={product?.images?.[1]?.url}
                    alt={product.name}
                    className="h-[150px] object-contain object-center lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="overflow-hidden">
                    <h3 className="text-sm text-gray-700 font-bold">
                      {product.name}
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
            </a>
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
