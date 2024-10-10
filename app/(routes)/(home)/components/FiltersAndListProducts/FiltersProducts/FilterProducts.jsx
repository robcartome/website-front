import React, { useState } from "react";
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronRight, Filter } from "lucide-react";


export default function FilterProducts(props) {
  const { clearFilters, setFilters, filterOptions } = props;
  const [expandedFilters, setExpandedFilters] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilter = (filter, value, isChecked) => {
    setSelectedFilters((prev) => {
      const updatedFilter = isChecked
        ? [...(prev[filter] || []), value]
        : prev[filter].filter((v) => v !== value);

      return {
        ...prev,
        [filter]: updatedFilter,
      };
    });

    setFilters(filter, value);
  };

  const clearSelectsFilters = () => {
    clearFilters();
    setSelectedFilters({});
  };

  const toggleFilterExpand = (filterKey) => {
    setExpandedFilters((prevExpanded) => ({
      ...prevExpanded,
      [filterKey]: !prevExpanded[filterKey],
    }));
  };

  const MAX_VISIBLE_VALUES = 3;

  return (
    <>
      <div className="text-center mb-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="md:hidden w-full">
              <Filter className="mr-2 h-4 w-4" /> Filtros
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="overflow-y-auto max-h-screen">
            <div className="mb-4 space-y-2">
              {filterOptions?.map((filtro) => (
                <FilterOption
                  key={filtro.id}
                  filterName={filtro.filtro}
                  filterValues={filtro.valores}
                  onHandleFilter={handleFilter}
                  isExpanded={expandedFilters[filtro.filtro] || false}
                  toggleExpand={() => toggleFilterExpand(filtro.filtro)}
                  maxVisibleValues={MAX_VISIBLE_VALUES}
                  selectedFilters={selectedFilters} // Pasar los filtros seleccionados
                />
              ))}

              <Button onClick={clearSelectsFilters}>
                Remover filtros <Trash className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="mt-2 space-y-2 hidden md:block">
        <div className="flex items-center"><Filter className="mr-2 h-4 w-4" /> Filtros</div>
        {filterOptions?.map((filtro) => (
          <FilterOption
            key={filtro.id}
            filterName={filtro.filtro}
            filterValues={filtro.valores}
            onHandleFilter={handleFilter}
            isExpanded={expandedFilters[filtro.filtro] || false}
            toggleExpand={() => toggleFilterExpand(filtro.filtro)}
            maxVisibleValues={MAX_VISIBLE_VALUES}
            selectedFilters={selectedFilters} // Pasar los filtros seleccionados
          />
        ))}

        <Button onClick={clearSelectsFilters}>
          Remover filtros <Trash className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </>
  );
}

const FilterOption = ({
  filterName,
  filterValues,
  onHandleFilter,
  isExpanded,
  toggleExpand,
  maxVisibleValues,
  selectedFilters
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredValues = filterValues.filter((value) =>
    value.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleValues = isExpanded
    ? filteredValues
    : filteredValues.slice(0, maxVisibleValues);

  const onChange = (e) => {
    const isChecked = e.target.checked;
    onHandleFilter(filterName, e.target.value, isChecked);
  };

  return (
    <div className="border-b border-gray-400 py-5">
      <h3 className="-my-3 flow-root">
        <button
          type="button"
          className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
          aria-controls="filter-section-0"
          aria-expanded="true"
        >
          <span className="font-medium text-gray-900 capitalize">{filterName}</span>
        </button>
      </h3>
      <div className="pt-6">
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
                checked={selectedFilters[filterName]?.includes(value) || false} // Mostrar seleccionado si está en selectedFilters
              />
              <label className="ml-3 text-sm text-gray-600">{value}</label>
            </div>
          ))}

          {filteredValues.length === 0 && (
            <p className="text-sm text-gray-500">No se encontraron resultados...</p>
          )}

          {filteredValues.length > maxVisibleValues && (
            <button className="text-gray-900 mt-2" onClick={toggleExpand}>
              {isExpanded ? "- Ver menos" : "+ Ver más"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
