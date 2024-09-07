import React from "react";
import { UserPen } from 'lucide-react';

export default function FirstBlock() {
  return (
    <div class="flex flex-col md:flex-row gap-4 p-4">
      <div class="flex flex-col items-center justify-between bg-white p-4 shadow-lg rounded-lg flex-1 min-h-[200px]">
        <h3 class="text-xl font-semibold mb-2">Equipos</h3>
        <p class="text-gray-500 text-center">Si necesita ayuda para encontrar un equipo para tu hogar</p>
        <img src="ruta_a_tu_icono1.png" alt="uipos" class="w-16 h-16 mb-4"/>
        <div>
            <a
              className="pl-3 pr-2 py-1 text-sky-100 font-medium bg-sky-500 rounded-full inline-flex items-center text-sm"
              href="#"
            >
              Contactanos
              <UserPen className="ml-2" size={22} />
            </a>
          </div>
      </div>

      <div class="flex flex-col items-center justify-between bg-white p-4 shadow-lg rounded-lg flex-1 min-h-[200px]">
        <h3 class="text-xl font-semibold mb-2">Cargas termicas</h3>
        <p class="text-gray-500 text-center">Realización de cargas termicas para tu vivienda</p>
        <img src="ruta_a_tu_icono2.png" alt="Cargas termicas" class="w-16 h-16 mb-4"/>
        <div>
            <a
              className="pl-3 pr-2 py-1 text-sky-100 font-medium bg-sky-500 rounded-full inline-flex items-center text-sm"
              href="#"
            >
              Contactanos
              <UserPen className="ml-2" size={22} />
            </a>
          </div>
      </div>

      <div class="flex flex-col items-center justify-between bg-white p-4 shadow-lg rounded-lg flex-1 min-h-[200px]">
        <h3 class="text-xl font-semibold mb-2">Certificaciones</h3>
        <p class="text-gray-500 text-center">Certificaciones para tu hogar o vivienda</p>
        <img src="ruta_a_tu_icono3.png" alt="Certificaciones" class="w-16 h-16 mb-4"/>
        <div>
            <a
              className="pl-3 pr-2 py-1 text-sky-100 font-medium bg-sky-500 rounded-full inline-flex items-center text-sm"
              href="#"
            >
              Contactanos
              <UserPen className="ml-2" size={22} />
            </a>
          </div>
      </div>

      <div class="flex flex-col items-center justify-between bg-white p-4 shadow-lg rounded-lg flex-1 min-h-[200px]">
        <h3 class="text-xl font-semibold mb-2">Delineantes</h3>
        <p class="text-gray-500 text-center">Servicio de delineantes</p>
        <img src="ruta_a_tu_icono4.png" alt="Delineantes" class="w-16 h-16 mb-4"/>
        <div>
            <a
              className="pl-3 pr-2 py-1 text-sky-100 font-medium bg-sky-500 rounded-full inline-flex items-center text-sm"
              href="#"
            >
              Contactanos
              <UserPen className="ml-2" size={22} />
            </a>
          </div>
      </div>
    </div>
  )

}

