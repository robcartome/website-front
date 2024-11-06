"use client";

import React, { useEffect, useState } from "react";
import ListProducts from "./ListProducts/ListProducts";
import FilterProducts from "./FiltersProducts/FilterProducts";
import { SkeletonFilters, SkeletonProducts } from "@/components/Shared/Skeletons/Skeletons";


export default function FiltersAndListProducts() {
  // Ejemplo de lo que puede tener unos productos
  // https://developers.mercadolibre.cl/es_ar/publica-productos
  // https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-products
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState();
  const [filters, setFilters] = useState({}); // Estado dinámico para los filtros
  const [filterOptions, setFilterOptions] = useState([]); // Opciones de filtros desde la API
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFiltros = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/filtros/store`);

        if (!response.ok) {
          throw new Error(
            `Error al obtener los filtros: ${response.statusText}`
          );
        }

        const dataResponse = await response.json();
        const data = dataResponse.data || []; // Protección si `dataResponse.data` es undefined
        setFilterOptions(data); // Guardamos los filtros dinámicos
        /** Example response data
          data [
            {
              id: 1,
              filtro: "marca",
              valores: ["York", "miidea", "lg", "Toshiva", "Samsung", "mabe"],
            },
            {
              id: 2,
              filtro: "tipo",
              valores: ["Split Pared"],
            },
            {
              id: 3,
              filtro: "capacidad",
              valores: ["12.000 btu/h", "14.000 btu/h",  "15.000 btu/h", "20.000 btu/h"],
            },
          ];
        */

        // Inicializar el estado de filtros basado en los filtros recibidos
        const initialFilters = data.reduce((acc, filtro) => {
          acc[filtro.filtro] = []; // Cada filtro comienza vacío
          return acc;
        }, {});

        setFilters(initialFilters);
      } catch (err) {
        console.error("Error fetching filters:", err);
        setError("Error al cargar los filtros");
      } finally {
        setLoading(false);
      }
    };

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;
        const response = await fetch(`${apiUrl}/productos/store`);

        if (!response.ok) {
          throw new Error(
            `Error al obtener los productos: ${response.statusText}`
          );
        }

        const dataResponse = await response.json();
        const data = dataResponse.data || []; // Protección si `dataResponse.data` es undefined
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Error al cargar los productos");
      } finally {
        setLoading(false);
      }
    };

    fetchFiltros();
    fetchProducts(); // PARA FETCH PRODUCTOS
  }, []); // Se ejecuta solo una vez al montar el componente

  useEffect(() => {
    let filtered = products;
    Object.keys(filters).forEach((filterKey) => {
      if (
        filters[filterKey] &&
        Array.isArray(filters[filterKey]) &&
        filters[filterKey].length > 0
      ) {
        filtered = filtered.filter((product) =>
          product.filtros.some(
            (filtro) =>
              filtro.filtro.toLowerCase() === filterKey.toLowerCase() &&
              filters[filterKey].some((selectedValue) =>
                filtro.valor.toLowerCase().includes(selectedValue.toLowerCase())
              )
          )
        );
      }
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

  const handleFilterChange = (filterKey, value) => {
    setFilters((prevFilters) => {
      const newValues = prevFilters[filterKey].includes(value)
        ? prevFilters[filterKey].filter((v) => v !== value)
        : [...prevFilters[filterKey], value];

      console.log("newValues", filterKey, newValues);
      return {
        ...prevFilters,
        [filterKey]: newValues,
      };
    });
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    const clearedFilters = {};
    Object.keys(filters).forEach((key) => {
      clearedFilters[key] = [];
    });
    setFilters(clearedFilters);
  };

  return (
    <div className="w-full max-w-screen-xl mt-8 mb-6 px-3.5 sm:px-8 mx-auto md:flex">
      {loading ? (
        <div className="mr-2">
          <div>Cargando filtros...</div>
          <SkeletonFilters />
        </div>

      ) : (
        <FilterProducts
          setFilters={handleFilterChange}
          clearFilters={clearFilters}
          filterOptions={filterOptions}
        />
      )}
      {error && <div>Error: {error}</div>}
      {/* Lista de productos filtrados */}
      {loading ? (
        <div className="">
          <div>Cargando productos...</div>
          <SkeletonProducts />
        </div>

      ) : (
        <ListProducts products={filteredProducts} />
      )}
    </div>
  );
}
