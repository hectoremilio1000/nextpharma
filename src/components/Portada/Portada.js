import React from "react";

const Portada = () => {
  return (
    <div className="max-w-5xl flex flex-wrap md:flex-nowrap items-center gap-4 justify-between w-full px-4 mx-auto flex h-screen">
      <div className="w-full">
        <h1 className="text-gray-500 font-bold text-sm">Bienvenido a </h1>
        <h2 className="text-4xl font-bold mb-4 text-[#0097bd]">Pharmahogar</h2>
        <p className="text-sm leading-6 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni officia
          in debitis quia aspernatur, amet non quisquam odio, doloribus
          consectetur veniam, eius facilis. Dicta ab, exercitationem tempora
          dolor perspiciatis eaque.
        </p>
      </div>
      <div className="w-full">
        <h1>hola normal</h1>
      </div>
    </div>
  );
};

export default Portada;
