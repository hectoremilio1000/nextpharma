"use client";
import Portada from "@/components/Portada/Portada";
import ProductList from "@/components/ProductList/ProductList";
import Beneficios from "@/components/Beneficios/Beneficios";
import RespuestApi from "@/components/RespuestApi/RespuestApi";
import { useEffect, useState } from "react";

export default function Home() {
  const [showResponse, setShowResponse] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  return (
    <div>
      <Portada setShowResponse={setShowResponse} setRespuesta={setRespuesta} />
      <Beneficios />
      <ProductList />
      <RespuestApi showResponse={showResponse} respuesta={respuesta} />
    </div>
  );
}
