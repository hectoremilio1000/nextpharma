import Head from "next/head";
import React from "react";

const page = () => {
  return (
    <div>
      <Head>
        <title>Carrito de Compras</title>
      </Head>
      <div className="py-[80px] w-full">
        <div className="max-w-5xl py-4 mx-auto grid grid-cols-2 gap-2">
          <div className="w-full p-4 rounded bg-white">
            <div className="w-full h-[3rem]">
              <div className="flex relative  flex-items justify-center gap-4">
                <div className="flex items-center justify-center flex-col">
                  <div className="absolute bottom-0 left-[25%]">
                    <p className="text-[#0097bd] font-bold text-sm">Entrega</p>
                    <div className="w-[10px] h-[10px] bg-[#b0ba00] rounded-full"></div>
                  </div>
                </div>
              </div>
              <progress
                class="h-[0.5rem] w-full appearance-none"
                max="100"
                value="50"
              ></progress>
            </div>
          </div>
          <div className="w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
