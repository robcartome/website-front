"use client";

import React, { useEffect, useState } from "react";
import ListProducts from "./ListProducts/ListProducts";
import SidebarFilter from "./components/SidebarFilter";
import FilterProducts from "./FiltersProducts/FilterProducts";

export default function FiltersAndListProducts() {
  // Ejemplo de lo que puede tener unos productos
  // https://developers.mercadolibre.cl/es_ar/publica-productos
  // https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-products
  // const [products, setProducts] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      descripcion: "Descripción del producto A",
      filtros: [
        {
          filtro: "marca",
          valor: "toshiva",
        },
        {
          filtro: "capacidad",
          valor: "100",
        },
        {
          filtro: "tipo",
          valor: "A",
        },
      ],
      nombre_producto_completo: "Producto A Completo",
      nombre_producto_corto: "Aire acondicionado Portátil LG inverter",
      precio_producto: "1000.50",
      ruta_archivo_pdf: "ruta/a/productoA.pdf",
      ruta_imagen_principal:
        "https://utfs.io/f/e508eae4-ec60-4ce0-a4dd-dd710ed1a751-eyme62.svg",
      ruta_imagen_secundaria: "ruta/a/productoA2.jpg",
      ruta_imagen_terciaria: "ruta/a/productoA3.jpg",
    },
    {
      id: 2,
      descripcion: "Descripción del producto B",
      filtros: [
        {
          filtro: "Color",
          valor: "Violeta",
        },
        {
          filtro: "capacidad",
          valor: "14.000 btu/h",
        },
        {
          filtro: "Marca",
          valor: "Tlg",
        },
        {
          filtro: "marca",
          valor: "toshiva",
        },
        {
          filtro: "capacidad",
          valor: "100",
        },
        {
          filtro: "tipo",
          valor: "A",
        },
      ],
      nombre_producto_completo: "Producto B Completo",
      nombre_producto_corto: "Aire acondicionado Portátil A inverter",
      precio_producto: "200.00",
      ruta_archivo_pdf: "ruta/a/productoB.pdf",
      ruta_imagen_principal:
        "https://plus.unsplash.com/premium_photo-1674567529893-3833fb7f6605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ruta_imagen_secundaria: "ruta/a/productoB2.jpg",
      ruta_imagen_terciaria: "ruta/a/productoB3.jpg",
    },
    {
      id: 3,
      descripcion: "Descripción del producto C",
      filtros: [
        {
          filtro: "Color",
          valor: "Violeta",
        },
        {
          filtro: "capacidad",
          valor: "12.000 btu/h",
        },
        {
          filtro: "Marca",
          valor: "nop",
        },
      ],
      nombre_producto_completo: "Producto C Completo",
      nombre_producto_corto: "Prod C",
      precio_producto: "300.75",
      ruta_archivo_pdf: "ruta/a/productoC.pdf",
      ruta_imagen_principal:
        "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ruta_imagen_secundaria: "ruta/a/productoC2.jpg",
      ruta_imagen_terciaria: "ruta/a/productoC3.jpg",
    },
    {
      id: 4,
      descripcion: "gfhfghgfhgf",
      filtros: [
        {
          filtro: "tipo",
          valor: "asa",
        },
        {
          filtro: "capacidad",
          valor: "asa",
        },
        {
          filtro: "Marca",
          valor: "dfdfd",
        },
      ],
      nombre_producto_completo: "ddd",
      nombre_producto_corto: "dd",
      precio_producto: "100.00",
      ruta_archivo_pdf:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\c6454721ec\\producto_pdf.pdf",
      ruta_imagen_principal:
        "https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ruta_imagen_secundaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\c6454721ec\\imagen_secundaria.jpg",
      ruta_imagen_terciaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\c6454721ec\\imagen_terciaria.jpg",
    },
    {
      id: 5,
      descripcion: "fdgdfgfd",
      filtros: [
        {
          filtro: "Color",
          valor: "edit",
        },
        {
          filtro: "capacidad",
          valor: "edit3",
        },
      ],
      nombre_producto_completo: "sdfds",
      nombre_producto_corto: "asa",
      precio_producto: "3.00",
      ruta_archivo_pdf:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\cbd79ca1d5\\producto_pdf.pdf",
      ruta_imagen_principal:
        "https://images.unsplash.com/photo-1545259742-b4fd8fea67e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ruta_imagen_secundaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\cbd79ca1d5\\imagen_secundaria.jpg",
      ruta_imagen_terciaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\cbd79ca1d5\\imagen_terciaria.jpg",
    },
    {
      id: 6,
      descripcion: "fdgfdgdfg",
      filtros: [
        {
          filtro: "tipo",
          valor: "split pared",
        },
      ],
      nombre_producto_completo: "eee",
      nombre_producto_corto: "ee",
      precio_producto: "100.00",
      ruta_archivo_pdf:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\1ea8fe3a10\\producto_pdf.pdf",
      ruta_imagen_principal:
        "https://plus.unsplash.com/premium_photo-1677172319902-6cc0ef89be25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ruta_imagen_secundaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\1ea8fe3a10\\imagen_secundaria.jpg",
      ruta_imagen_terciaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\1ea8fe3a10\\imagen_terciaria.jpg",
    },
    {
      id: 7,
      descripcion: "fgdfgfdg",
      filtros: [
        {
          filtro: "marca",
          valor: "york",
        },
      ],
      nombre_producto_completo: "ccccccccc",
      nombre_producto_corto: "cc",
      precio_producto: "23100.00",
      ruta_archivo_pdf:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\5ad69a2abb\\producto_pdf.pdf",
      ruta_imagen_principal:
        "https://images.unsplash.com/photo-1523495909838-79c67b15be34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ruta_imagen_secundaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\5ad69a2abb\\imagen_secundaria.jpg",
      ruta_imagen_terciaria:
        "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\5ad69a2abb\\imagen_terciaria.jpg",
    },
  ]);
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
    // fetchProducts(); // PARA FETCH PRODUCTOS
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

  // useEffect(() => {
  //   let filtered = products;
  //   console.log(filtered, filters)
  //   // Filtrado más dinámico y flexible, Esto te permitirá agregar nuevos filtros en el backend sin necesidad de modificar el código del frontend cada vez.
  //   // Object.keys(filters).forEach((filterKey) => {
  //   //   if (filters[filterKey]) {
  //   //     filtered = filtered.filter((product) =>
  //   //       product.filters.some(
  //   //         (filter) =>
  //   //           filter.name === filterKey &&
  //   //           filter.value.toLowerCase().includes(filters[filterKey].toLowerCase())
  //   //       )
  //   //     );
  //   //   }
  //   // });
  //   Object.keys(filters).forEach((filterKey) => {
  //     if (filters[filterKey] && Array.isArray(filters[filterKey]) && filters[filterKey].length > 0) {
  //       filtered = filtered.filter((product) =>
  //         product.filtros.some(
  //           (filtro) =>
  //             filtro.valor_filtro.filtro?.nombre.toLowerCase() === filterKey.toLowerCase() &&
  //             filters[filterKey].some(selectedValue =>
  //               filtro.valor_filtro.valor?.toLowerCase().includes(selectedValue.toLowerCase())
  //             )
  //         )
  //       );
  //     }
  //   });

  //   setFilteredProducts(filtered)
  // },[filters, products])

  // const handleFilterChange = (filterName, filterValue) => {
  //   console.log('entro handleFilterChange', filterName, filterValue)
  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     [filterName]: filterValue,
  //   }))
  // }

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
        <div>Cargando filtros...</div>
      ) : (
        <FilterProducts
          setFilters={handleFilterChange}
          clearFilters={clearFilters}
          filterOptions={filterOptions}
        />
      )}
      {error && <div>Error: {error}</div>}
      {/* Lista de productos filtrados */}
      <ListProducts products={filteredProducts} />
    </div>
  );
}
