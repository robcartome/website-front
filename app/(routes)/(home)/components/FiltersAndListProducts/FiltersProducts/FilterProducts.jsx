import React from "react";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FilterProducts(props) {
  // Esto tiene q venir del Backend, crear una estructura para guardar los filtros seleccionados
  // OJO filtros, solo carga al inicio y no se modifica
  // crear filters { value: []} Para guardar los filtros seleccionados. Eso lo tenemos en FiltersAndListProducts
  const filtros = [
    {
      id: 1,
      filtro: "marca",
      valores: ["York", "miidea", "lg"],
    },
    {
      id: 2,
      filtro: "tipo",
      valores: ["Split Pared"],
    },
    {
      id: 3,
      filtro: "capacidad",
      valores: ["12.000 btu/h", "14.000 btu/h"],
    },
  ];

  const { clearFilters, setFilters, filters } = props;
  const handleFilter = (filter, value) => {
    console.log(filter, value);
    setFilters(filter, value);
  };

  const clearSelectsFilters = () => {
    clearFilters();
    // Desmarca solo los checkboxes dentro de un contenedor con la clase "mi-checklist"
    const checkboxes = document.querySelectorAll(
      '.mi-checklist input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  // console.log(filtros)
  return (
    <div className="mt-5 mb-8 gap-y-4 mi-checklist">
      {filtros.map((filtro) => (
        <Filter
          key={filtro.id}
          filterName={filtro.filtro}
          filterValues={filtro.valores}
          onHandleFilter={handleFilter}
        />
      ))}

      {/*
      <Select
        onValueChange={(value) => handleFilter("capacity", value)}
        value={filters.capacity}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Tipo de Motor" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Capacidad (BTU/HR)</SelectLabel>
            <SelectItem value="12000">12000</SelectItem>
            <SelectItem value="14000">14000</SelectItem>
            <SelectItem value="18000">18000</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select> */}

      <Button onClick={clearSelectsFilters}>
        Remover filtros <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

const Filter = ({ filterName, filterValues, onHandleFilter }) => {
  // console.log('Filter', filterName, filterValues)
  const onChange = (e) => {
    console.log(e.target.checked, e.target.value);
    if (e.target.checked) {
      onHandleFilter(filterName, e.target.value);
    } else {
      onHandleFilter(filterName, e.target.value);
    }
  };
  return (
    <div className="border-b border-gray-400 py-6">
      <h3 className="-my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          aria-controls="filter-section-0"
          aria-expanded="true"
        >
          <span className="font-medium text-gray-900">{filterName}</span>
        </button>
      </h3>
      <div className="pt-6">
        <div className="space-y-4">
          {filterValues.map((value) => (
            <div key={value} className="flex items-center">
              <input
                onChange={onChange}
                value={value}
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-500"
              />
              <label className="ml-3 text-sm text-gray-600">{value}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
