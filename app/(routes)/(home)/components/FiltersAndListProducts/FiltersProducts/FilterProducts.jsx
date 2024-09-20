import React, { useState } from "react";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FilterProducts(props) {
  const { clearFilters, setFilters, filterOptions } = props;
  console.log(filterOptions);
  const [expandedFilters, setExpandedFilters] = useState({}); // Estado para almacenar qué filtros están expandidos

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

  // Alternar el estado de "Ver más" o "Ver menos"
  const toggleFilterExpand = (filterKey) => {
    setExpandedFilters((prevExpanded) => ({
      ...prevExpanded,
      [filterKey]: !prevExpanded[filterKey],
    }));
  };

  // Número máximo de valores visibles antes de hacer clic en "Ver más"
  const MAX_VISIBLE_VALUES = 2;

  return (
    <div className="mt-5 mb-8 gap-y-4 mi-checklist">
      {filterOptions.map((filtro) => (
        <Filter
          key={filtro.id}
          filterName={filtro.filtro}
          filterValues={filtro.valores}
          onHandleFilter={handleFilter}
          isExpanded={expandedFilters[filtro.filtro] || false}
          toggleExpand={() => toggleFilterExpand(filtro.filtro)}
          maxVisibleValues={MAX_VISIBLE_VALUES}
        />
      ))}

      <Button onClick={clearSelectsFilters}>
        Remover filtros <Trash className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}

const Filter = ({
  filterName,
  filterValues,
  onHandleFilter,
  isExpanded,
  toggleExpand,
  maxVisibleValues,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar las opciones según el término de búsqueda
  const filteredValues = filterValues.filter((value) =>
    value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Limitar el número de opciones visibles según el estado expandido o colapsado
  const visibleValues = isExpanded
    ? filteredValues
    : filteredValues.slice(0, maxVisibleValues);

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
        {/* Input de búsqueda */}
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-md mb-4"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-4">
          {visibleValues.map((value) => (
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

          {/* Si no hay resultados de búsqueda */}
          {filteredValues.length === 0 && (
            <p className="text-sm text-gray-500">
              No se encontraron resultados...
            </p>
          )}

          {/* Botón "Ver más" o "Ver menos" */}
          {filteredValues.length > maxVisibleValues && (
            <button
              className="text-gray-900 mt-2"
              onClick={toggleExpand}
            >
              {isExpanded ? "- Ver menos" : "+ Ver más"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
