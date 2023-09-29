// pages/search/Search.js
"use client";
import { useEffect, useState } from "react";

export default function Search() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    // Obtén los parámetros GET de la URL
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());

    // Ahora puedes utilizar los valores de categorias y productos
    const category = params.categorias.split(",");
    setCategorias(category);

    console.log("Categorías:", category);

    // Aquí puedes realizar cualquier lógica adicional con estos parámetros
  }, []);
  return (
    <div>
      <h1>Resultados de búsqueda</h1>
      <div>
        <p>Categorías: </p>
        <ul>
          {categorias.map((c, index) => {
            return <li key={index}>{c}</li>;
          })}
        </ul>
      </div>
      {/* ... Renderizado de resultados ... */}
    </div>
  );
}
