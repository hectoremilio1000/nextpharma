"use client";
import Portada from "@/components/Portada/Portada";
import ProductList from "@/components/ProductList/ProductList";
import Beneficios from "@/components/Beneficios/Beneficios";
import RespuestApi from "@/components/RespuestApi/RespuestApi";
import { useEffect, useState } from "react";
import Head from "next/head";
import BannerPortada from "@/components/Promociones/BannerPortada";

export default function Home() {
  const [showResponse, setShowResponse] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  return (
    <div>
      <BannerPortada />
      {/* <Portada setShowResponse={setShowResponse} setRespuesta={setRespuesta} /> */}
      <ProductList />
      <Beneficios />
      <RespuestApi showResponse={showResponse} respuesta={respuesta} />
    </div>
  );
}
