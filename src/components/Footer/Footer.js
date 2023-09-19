import Image from "next/image";
import Link from "next/link";
import React from "react";

import logo from "../../../public/logopharmahogar.png";
const Footer = () => {
  return (
    <div className="w-full bg-[#0097bd]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 py-[50px]">
        <div className="w-full">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image className="h-12 w-auto" src={logo} alt="logo pharmahogar" />
          </Link>
          <h1 className="text-sm font-bold text-white">Informacion Gral.</h1>
          <p className="text-sm text-white mb-5">
            Pablo González Garza #620, Chepevera, Monterrey N.L. 64030
          </p>
          <p className="text-sm text-white">info@vitau.mx</p>
        </div>
        <div className="w-full">
          <h1 className="text-sm font-bold text-white">
            Acerca de Pharmahogar
          </h1>
          <p className="text-sm text-white mb-5">
            Pablo González Garza #620, Chepevera, Monterrey N.L. 64030
          </p>
          <p className="text-sm text-white">info@vitau.mx</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
