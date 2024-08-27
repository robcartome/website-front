/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../../buttons/ButtonOutline";
import Image from "next/image";
import Logo from "./Logo";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  return (
    <>
      <div
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all bg-white " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo />
          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500 items-center">
            {["inicio", "Equipos"].map(
              (item, key) => (
                  <LinkScroll
                    key={key}
                    activeClass="active"
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => setActiveLink(item)}
                    className={
                      "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === item
                        ? " text-sky-500 animation-active"
                        : " text-black-500 hover:text-sky-500")
                    }
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </LinkScroll>
              )
            )}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onFocusOut={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-sky-500 px-3 py-2 rounded"
              >
                Soluciones
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                  <LinkScroll href="/service1">
                    <a className="block px-4 py-2 hover:bg-gray-200">
                      Instalación de aire acondicionado
                    </a>
                  </LinkScroll>
                  <LinkScroll href="/service2">
                    <a className="block px-4 py-2 hover:bg-gray-200">
                      Mantenimiento de Aire Acondicionado
                    </a>
                  </LinkScroll>
                  <LinkScroll href="/service3">
                    <a className="block px-4 py-2 hover:bg-gray-200">
                      Ventilación
                    </a>
                  </LinkScroll>
                </div>
              )}
            </div>
          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link
              href="/"
              className="text-gray-500 mx-2 sm:mx-4 capitalize tracking-wide hover:text-sky-500 transition-all"
            >
                Iniciar Sesión
            </Link>
            <ButtonOutline>Contactanos</ButtonOutline>
          </div>
        </nav>
      </div>
      {/* Mobile Navigation */}
    </>
  );
};

export default Navbar;
