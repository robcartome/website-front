import { ScanFaceIcon, Facebook, Instagram, Youtube } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-white-300 pt-24 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <p className="mb-4">
            <strong className="font-medium">AireAyuda</strong> Todos los tipos de aires acondicionados para siempre estar a temperatura ambiente
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Facebook className="h-6 w-6" /> */}
              <Facebook />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Twitter className="h-6 w-6" /> */}
              <Instagram />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              {/* <Instagram className="h-6 w-6" /> */}
              <Youtube />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - AireAyuda</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Nosotros</p>
          <ul className="text-black-500 ">
            <li className="my-2 hover:text-sky-500 cursor-pointer transition-all">
              Ubicaciones{" "}
            </li>
            <li className="my-2 hover:text-sky-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Equipos</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-sky-500 cursor-pointer transition-all">
              ¿ Preguntas frecuentes ?{" "}
            </li>
            <li className="my-2 hover:text-sky-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Servicios</p>
          <ul className="text-black-500">
            <li className="my-2 hover:text-sky-500 cursor-pointer transition-all">
              Cargas Termicas{" "}
            </li>
            <li className="my-2 hover:text-sky-500 cursor-pointer transition-all">
              Certificaciones{" "}
            </li>
            <li className="my-2 hover:text-sky-500 cursor-pointer transition-all">
              Delineantes{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
