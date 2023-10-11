"use client";
import ProductList from "@/components/ProductList/ProductList";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const data = [
  {
    name: "Categoría 1",
    subcategories: [
      {
        name: "Subcategoría 1.1",
        divisions: ["División 1.1.1", "División 1.1.2"],
      },
      {
        name: "Subcategoría 1.2",
        divisions: ["División 1.2.1", "División 1.2.2"],
      },
    ],
  },
  {
    name: "Categoría 2",
    subcategories: [
      {
        name: "Subcategoría 2.1",
        divisions: ["División 2.1.1", "División 2.1.2"],
      },
      {
        name: "Subcategoría 2.2",
        divisions: ["División 2.2.1", "División 2.2.2"],
      },
    ],
  },
];
const page = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);

  const toggleCategory = (categoryIndex) => {
    setActiveCategory((prev) =>
      prev === categoryIndex ? null : categoryIndex
    );
    setActiveSubcategory(null);
  };

  const toggleSubcategory = (subcategoryIndex) => {
    setActiveSubcategory((prev) =>
      prev === subcategoryIndex ? null : subcategoryIndex
    );
  };
  return (
    <div className="w-full py-[80px] mb-2">
      <div className="max-w-5xl mx-auto flex gap-4">
        <div className="w-64">
          <span className="text-sm">Filtrar por Categorias:</span>
          {data.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-2">
              <button
                className="w-full py-2 px-4 text-sm  text-left bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                onClick={() => toggleCategory(categoryIndex)}
              >
                {category.name}
                {activeCategory === categoryIndex ? (
                  <FaAngleUp />
                ) : (
                  <FaAngleDown />
                )}
              </button>

              {activeCategory === categoryIndex && (
                <div className="ml-4">
                  {category.subcategories.map(
                    (subcategory, subcategoryIndex) => (
                      <div key={subcategoryIndex} className="mb-2">
                        <button
                          className="w-full text-sm py-2 px-4 text-left bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                          onClick={() => toggleSubcategory(subcategoryIndex)}
                        >
                          {subcategory.name}
                          {activeSubcategory === subcategoryIndex ? (
                            <FaAngleUp />
                          ) : (
                            <FaAngleDown />
                          )}
                        </button>

                        {activeSubcategory === subcategoryIndex && (
                          <div className="ml-4">
                            {subcategory.divisions.map(
                              (division, divisionIndex) => (
                                <div key={divisionIndex} className="mb-2">
                                  <button className="w-full py-2 px-4 text-left bg-gray-200 hover:bg-gray-300">
                                    {division}
                                  </button>
                                </div>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex w-full">
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default page;
