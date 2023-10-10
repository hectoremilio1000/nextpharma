"use client";
import Portada from "@/components/Portada/Portada";
import ProductList from "@/components/ProductList/ProductList";
import Beneficios from "@/components/Beneficios/Beneficios";
import RespuestApi from "@/components/RespuestApi/RespuestApi";
import { useEffect, useState } from "react";
import Portada2 from "@/components/Portada2";
import Portada3 from "@/components/Portada3/Portada3";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  const [showResponse, setShowResponse] = useState(false);
  const [respuesta, setRespuesta] = useState("");

  return (
    <div>
      {/* <Portada2/>
      <Portada setShowResponse={setShowResponse} setRespuesta={setRespuesta} /> */}
      {/* <Portada3/> */}
      <Portada/>
      <Beneficios />
      <ProductList />
      <Footer/>
      <RespuestApi showResponse={showResponse} respuesta={respuesta} />
      
    </div>
  );
}
