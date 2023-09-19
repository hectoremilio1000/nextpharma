import React from "react";
import { MdSearch } from "react-icons/md";
const Portada = () => {
  return (
    <div className="py-[80px] bg-[#f5f8ff] flex flex-wrap md:flex-nowrap items-center gap-4 justify-between w-full px-4 ">
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-[#0097bd] text-center max-w-[600px] mx-auto">
          La farmacia digital de México
        </h1>
        <p className="text-sm text-center leading-6 text-gray-500 max-w-[600px] mx-auto">
          Nuestra misión es encontrarte el medicamento que necesitas sabiendo
          que las farmacias tradicionales no lo tienen y llevártelo a tu
          domicilio.
        </p>
        <div
          className="relative w-full max-w-[800px] mx-auto mt-4"
          style={{
            boxShadow:
              "0 1px 6px rgba(0,47,75,.08), 0 4px 6px rgba(0,47,75,.1)",
          }}
        >
          <input
            type="text"
            placeholder="Escribe el nombre del producto o tu malestar"
            className="py-5 px-3 rounded-lg bg-white text-gray-500 font-bold w-full focus:outline-none"
          />
          <div>
            <div className="absolute top-1/2 -translate-y-1/2 right-0 flex items-center justify-center">
              <div>
                <div className="relative right-[12px]">
                  <button className="cursor-pointer p-3 rounded-lg bg-[#0097bd]">
                    <MdSearch className="text-white text-[20px] font-bold" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-3 lg:grid-cols-4 grid-cols-2 mt-6">
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Medicamentos.b568b353.jpg"
                alt="Medicamentos"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Medicamentos
            </h3>
          </a>
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Cardiologia.90bdfe2b.jpg"
                alt="cardiologia"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Cardiología
            </h3>
          </a>
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Diabetes.ffd26115.jpg"
                alt="diabetes"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Diabetes
            </h3>
          </a>
          <a href="#" className="w-full">
            <div className="w-full">
              <img
                className="w-full rounded-lg"
                src="https://vitau.mx/_next/static/media/Hipertension.353c4f88.jpg"
                alt="hipertension"
              />
            </div>

            <h3 className="text-lg sm:text-sm text-center mt-3 text-gray-700 font-bold">
              Hipertensión
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portada;
