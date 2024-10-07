"use client";

import React, { useState, useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import Logo from "./Logo";
import LovedProducts from "@/app/(routes)/(home)/components/LovedProducts/LovedProducts";
import ContactButton from "@/app/(routes)/(home)/components/Contact/Contact";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const navItems = ["inicio", "equipos", "servicios"];

  return (
    <>
      <div
        className={
          "fixed top-0 w-full z-30 bg-white transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <Logo />
          </div>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <div className="hidden lg:flex items-center">
              <ul className="flex text-black-500 items-center md:pr-10">
                {navItems.map((item, key) => (
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
                ))}
                {/* Dropdown menu for Servicios - Optional */}
                {/* <div className="relative">
                  <LinkScroll
                    activeClass="active"
                    to='servicios'
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => setActiveLink('servicios')}
                    className={
                      "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                      (activeLink === 'servicios'
                        ? " text-sky-500 animation-active"
                        : " text-black-500 hover:text-sky-500")
                    }
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onBlur={() => setIsDropdownOpen(false)}
                  >
                    Servicios
                  </LinkScroll>
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                      <LinkScroll to='servicios'>
                        <a className="block px-4 py-2 hover:bg-gray-200">
                          Instalación de aire acondicionado
                        </a>
                      </LinkScroll>
                      <LinkScroll to='servicios'>
                        <a className="block px-4 py-2 hover:bg-gray-200">
                          Mantenimiento de Aire Acondicionado
                        </a>
                      </LinkScroll>
                      <LinkScroll to='servicios'>
                        <a className="block px-4 py-2 hover:bg-gray-200">
                          Ventilación
                        </a>
                      </LinkScroll>
                    </div>
                  )}
                </div> */}
              </ul>
              {/* <div className="ml-4">
                <LovedProducts />
              </div> */}
              {/* <Link
                href="/"
                className="text-gray-500 mx-2 sm:mx-4 capitalize tracking-wide hover:text-sky-500 transition-all"
              >
                Iniciar Sesión
              </Link> */}
              <ContactButton type='outline' buttonText='Contactanos' />
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
              >
                {isMobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          <div className="pt-2">
              <LovedProducts />
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden shadow-md">
            <ul className="flex flex-col items-center justify-center w-full text-base pt-8 pb-8">
              {navItems.map((item, key) => (
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
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </LinkScroll>
              ))}
              {/* Dropdown menu for Servicios - Optional */}
              {/* <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onBlur={() => setIsDropdownOpen(false)}
                  className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-sky-500 rounded"
                >
                  Servicios
                </button>
                {isDropdownOpen && (
                  <div className="mt-2 w-48 bg-white text-black rounded shadow-lg">
                    <LinkScroll href="/service1">
                      <a className="block px-4 py-2 hover:bg-gray-200">
                        Realización de cargas termicas
                      </a>
                    </LinkScroll>
                    <LinkScroll href="/service2">
                      <a className="block px-4 py-2 hover:bg-gray-200">
                        Certificaciones para tu hogar
                      </a>
                    </LinkScroll>
                    <LinkScroll href="/service3">
                      <a className="block px-4 py-2 hover:bg-gray-200">
                      S ervicio de delineantes
                      </a>
                    </LinkScroll>
                  </div>
                )}
              </div> */}
              {/* <Link
                href="/"
                className="text-gray-500 mx-2 sm:mx-4 capitalize tracking-wide hover:text-sky-500 transition-all py-2"
              >
                Iniciar Sesión
              </Link> */}
              <div className="py-3">
                <ContactButton type='outline' buttonText='Contactanos' />
              </div>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;