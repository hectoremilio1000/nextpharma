"use client";
import { getINVENTARIO } from "@/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";

function page({ params }) {
  console.log(params);
  //   const router = useRouter();
  //   console.log(router);
  const { producto_id } = params;
  console.log(producto_id);

  // Ahora puedes utilizar id_producto para realizar consultas o acciones relacionadas con ese valor.
  const [producto, setProducto] = useState();
  const [cantidad, setCantidad] = useState(1);
  const fetchProducto = async () => {
    try {
      const result = await API.graphql(
        graphqlOperation(getINVENTARIO, { id: producto_id })
      );
      console.log(result);
      const data = result?.data?.getINVENTARIO;
      setProducto(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProducto();
  }, []);
  const handleCantidad = (e) => {
    const valor = e.target.value;
    if (valor < 1) {
      setCantidad(1);
    } else {
      setCantidad(valor);
    }
  };
  const handledism = () => {
    const newValor = cantidad - 1;
    if (newValor < 1) {
      setCantidad(1);
    } else {
      setCantidad(newValor);
    }
  };
  const handleaument = () => {
    const newValor = cantidad + 1;
    if (newValor <= producto?.stock) {
      setCantidad(newValor);
    } else {
      setCantidad(producto?.stock);
    }
  };

  return (
    <div className="w-full py-[80px] bg-[#fff]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full flex items-center justify-center">
          <img
            className="h-[300px] object-contain object-center"
            src={producto?.urlImagen}
            alt=""
          />
        </div>
        <div className="w-full flex flex-col gap-3">
          <span className="text-sm leading-6 font-bold text-[#b0ba00]">
            Categoria/Subcategoria
          </span>
          <h1 className="text-lg font-bold leading-6 text-[#0097bd]">
            {producto?.nombreProducto}
          </h1>
          <p className="text-sm leading-6 text-gray-500">
            Description aditional
          </p>
          <p className="text-sm leading-6 text-gray-500">UPC: 00007747884</p>
          <div className="py-4 px-2 bg-gray-100">
            <h2 className="text-xl text-[#0097bd] font-bold">
              ${Math.round((producto?.precioVenta * 100) / 100).toFixed(2)} MXN
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg text-gray-600 font-bold">Cantidad</span>
            <div className="max-w-content flex items-center gap-3 bg-gray-100 p-2 rounded-lg">
              <div onClick={handledism} className="cursor-pointer h-auto p-1">
                -
              </div>
              <input
                className="bg-gray-100 focus:outline-none text-center"
                type="number"
                value={cantidad}
                onChange={handleCantidad}
              />
              <div onClick={handleaument} className="cursor-pointer h-auto p-1">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
