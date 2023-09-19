"use client";
import Image from "next/image";
import Header from "../components/Header/Header";
import Portada from "@/components/Portada/Portada";
import ProductList from "@/components/ProductList/ProductList";
import Beneficios from "@/components/Beneficios/Beneficios";

export default function Home() {
  return (
    <div>
      <Portada />
      <Beneficios />
      <ProductList />
    </div>
  );
}
