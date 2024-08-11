import React from 'react'
import { cn } from "@/lib/utils"

export default function SidebarFilter({className}) {
  return (
    <aside className={cn("", className)}>
    <form>
      <h1 className="text-gray-700 font-bold">Filtrar por:</h1>
      <div className="border-b border-gray-400 py-6">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
            aria-controls="filter-section-0"
            aria-expanded="true"
          >
            <span class="font-medium text-gray-900">Marca</span>
          </button>
        </h3>
        <div className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">York</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">Miidea</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">
                Coldpoint
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-400 py-6">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
            aria-controls="filter-section-0"
            aria-expanded="true"
          >
            <span class="font-medium text-gray-900">Tipo</span>
          </button>
        </h3>
        <div className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">Split Pared</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">Split Piso Techo</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">
                Portátiles
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-400 py-6">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
            aria-controls="filter-section-0"
            aria-expanded="true"
          >
            <span class="font-medium text-gray-900">Función</span>
          </button>
        </h3>
        <div className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">Frío Solo</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">Frío y Calor</label>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-400 py-6">
        <h3 className="-my-3 flow-root">
          <button
            type="button"
            className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
            aria-controls="filter-section-0"
            aria-expanded="true"
          >
            <span class="font-medium text-gray-900">Capacidad (BTU/HR)</span>
          </button>
        </h3>
        <div className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">12000</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">14000</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">18000</label>
            </div>
            <div className="flex items-center">
              <input
                id="filter-color-0"
                value="white"
                type="checkbox"
                class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">24000</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  </aside>
  )
}
