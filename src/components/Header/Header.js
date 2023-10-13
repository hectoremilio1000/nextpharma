"use client";
import { Fragment, React, useContext, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  HiChevronDown,
  HiPhone,
  HiPlay,
  HiArrowNarrowRight,
  HiMenuAlt3,
  HiChartPie,
} from "react-icons/hi";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import logo from "../../../public/logopharmahogar.png";
import Image from "next/image";
import SideBar from "../SideBar";
import CartDrawer from "../CartDrawer";
import GlobalContext from "@/contexts/GlobalContext";
const links = [
  {
    path: "",
    name: "Inicio",
  },
  {
    path: "/contacto",
    name: "Contacto",
  },
];
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: HiChartPie,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: HiArrowNarrowRight,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: HiPlay },
  { name: "Contact sales", href: "#", icon: HiPhone },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Header = () => {
  const { globals, setGlobals } = useContext(GlobalContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      <SideBar />
      <header
        aria-label="Site Header"
        className="fixed z-20 top-0 left-0 right-0 border-b border-gray-100 bg-white shadow-md"
      >
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-end sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="p-2 lg:hidden"
              onClick={() => {
                setGlobals({
                  ...globals,
                  openSideBar: true,
                  openCartDrawer: false,
                });
              }}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <Link href="/" className="p-1.5 flex">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-10 w-auto"
                src={logo}
                alt="logo pharmahogar"
              />
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-between gap-8">
            <nav
              aria-label="Site Nav"
              className="hidden lg:justify-center w-full lg:flex lg:gap-4 lg:text-sm lg:font-medium  lg:tracking-wide lg:text-gray-700"
            >
              <a
                href="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Sobre Nosotros
              </a>

              <a
                href="/news"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Ofertas y Promociones
              </a>
              <Link
                href="/products"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Productos
              </Link>
              <a
                href="/contact"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-[#0097bd]"
              >
                Contacto
              </a>
            </nav>

            <div className="flex items-center">
              <div className="flex items-center border-x border-gray-100">
                <span className="border-e border-e-gray-100">
                  <a
                    onClick={() =>
                      setGlobals({ ...globals, openCartDrawer: true })
                    }
                    href={() => false}
                    className="relative hover:cursor-pointer grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-gray-700"
                  >
                    <div>
                      <svg
                        className="relative h-5 w-5 text-[#0097bd]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <span className="p-1 bg-[#b0ba00] text-white rounded-full h-6 w-6 text-center text-xs leading-4 absolute top-3 right-1">
                        {globals.cartItems.length}
                      </span>
                    </div>
                    <span className="sr-only">Cart</span>
                  </a>
                </span>

                <span className="border-e border-e-gray-100">
                  <a
                    href="/account"
                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-gray-700"
                  >
                    <svg
                      className="h-5 w-5 text-[#0097bd]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>

                    <span className="sr-only"> Account </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <CartDrawer />
      </header>
    </>
  );
};

export default Header;
