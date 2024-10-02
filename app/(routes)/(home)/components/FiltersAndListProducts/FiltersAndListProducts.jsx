'use client'

import React, { useEffect, useState } from "react";
import ListProducts from "./ListProducts/ListProducts";
import SidebarFilter from "./components/SidebarFilter";
import FilterProducts from "./FiltersProducts/FilterProducts";


export default function FiltersAndListProducts() {
  // const products = await fetchProducts();
  // Ejemplo de lo que puede tener unos productos
  // https://developers.mercadolibre.cl/es_ar/publica-productos
  // https://woocommerce.github.io/woocommerce-rest-api-docs/#list-all-products
  const [products, setProducts]= useState(
    [
      {
        "id": 1,
        "descripcion": "Descripción del producto A",
        "filtros": [
          {
            "filtro": "marca",
            "valor": "toshiva"
          },
          {
            "filtro": "capacidad",
            "valor": "100"
          },
          {
            "filtro": "tipo",
            "valor": "A"
          }
        ],
        "nombre_producto_completo": "Producto A Completo",
        "nombre_producto_corto": "Prod A",
        "precio_producto": "100.50",
        "ruta_archivo_pdf": "ruta/a/productoA.pdf",
        "ruta_imagen_principal": "https://utfs.io/f/e508eae4-ec60-4ce0-a4dd-dd710ed1a751-eyme62.svg",
        "ruta_imagen_secundaria": "ruta/a/productoA2.jpg",
        "ruta_imagen_terciaria": "ruta/a/productoA3.jpg"
      },
      {
        "id": 2,
        "descripcion": "Descripción del producto B",
        "filtros": [
          {
            "filtro": "Color",
            "valor": "Violeta"
          },
          {
            "filtro": "capacidad",
            "valor": "14.000 btu/h"
          },
          {
            "filtro": "Marca",
            "valor": "Tlg"
          },
          {
            "filtro": "marca",
            "valor": "toshiva"
          },
          {
            "filtro": "capacidad",
            "valor": "100"
          },
          {
            "filtro": "tipo",
            "valor": "A"
          }
        ],
        "nombre_producto_completo": "Producto B Completo",
        "nombre_producto_corto": "Prod B",
        "precio_producto": "200.00",
        "ruta_archivo_pdf": "ruta/a/productoB.pdf",
        "ruta_imagen_principal": "https://plus.unsplash.com/premium_photo-1674567529893-3833fb7f6605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ruta_imagen_secundaria": "ruta/a/productoB2.jpg",
        "ruta_imagen_terciaria": "ruta/a/productoB3.jpg"
      },
      {
        "id": 3,
        "descripcion": "Descripción del producto C",
        "filtros": [
          {
            "filtro": "Color",
            "valor": "Violeta"
          },
          {
            "filtro": "capacidad",
            "valor": "12.000 btu/h"
          },
          {
            "filtro": "Marca",
            "valor": "nop"
          }
        ],
        "nombre_producto_completo": "Producto C Completo",
        "nombre_producto_corto": "Prod C",
        "precio_producto": "300.75",
        "ruta_archivo_pdf": "ruta/a/productoC.pdf",
        "ruta_imagen_principal": "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ruta_imagen_secundaria": "ruta/a/productoC2.jpg",
        "ruta_imagen_terciaria": "ruta/a/productoC3.jpg"
      },
      {
        "id": 4,
        "descripcion": "gfhfghgfhgf",
        "filtros": [
          {
            "filtro": "tipo",
            "valor": "asa"
          },
          {
            "filtro": "capacidad",
            "valor": "asa"
          },
          {
            "filtro": "Marca",
            "valor": "dfdfd"
          }
        ],
        "nombre_producto_completo": "ddd",
        "nombre_producto_corto": "dd",
        "precio_producto": "100.00",
        "ruta_archivo_pdf": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\c6454721ec\\producto_pdf.pdf",
        "ruta_imagen_principal": "https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "ruta_imagen_secundaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\c6454721ec\\imagen_secundaria.jpg",
        "ruta_imagen_terciaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\c6454721ec\\imagen_terciaria.jpg"
      },
      {
        "id": 5,
        "descripcion": "fdgdfgfd",
        "filtros": [
          {
            "filtro": "Color",
            "valor": "edit"
          },
          {
            "filtro": "capacidad",
            "valor": "edit3"
          }
        ],
        "nombre_producto_completo": "sdfds",
        "nombre_producto_corto": "asa",
        "precio_producto": "3.00",
        "ruta_archivo_pdf": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\cbd79ca1d5\\producto_pdf.pdf",
        "ruta_imagen_principal": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\cbd79ca1d5\\imagen_principal.jpg",
        "ruta_imagen_secundaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\cbd79ca1d5\\imagen_secundaria.jpg",
        "ruta_imagen_terciaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\cbd79ca1d5\\imagen_terciaria.jpg"
      },
      {
        "id": 6,
        "descripcion": "fdgfdgdfg",
        "filtros": [
          {
            "filtro": "tipo",
            "valor": "split pared"
          }
        ],
        "nombre_producto_completo": "eee",
        "nombre_producto_corto": "ee",
        "precio_producto": "100.00",
        "ruta_archivo_pdf": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\1ea8fe3a10\\producto_pdf.pdf",
        "ruta_imagen_principal": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\1ea8fe3a10\\imagen_principal.jpg",
        "ruta_imagen_secundaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\1ea8fe3a10\\imagen_secundaria.jpg",
        "ruta_imagen_terciaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\1ea8fe3a10\\imagen_terciaria.jpg"
      },
      {
        "id": 7,
        "descripcion": "fgdfgfdg",
        "filtros": [
          {
            "filtro": "marca",
            "valor": "york"
          }
        ],
        "nombre_producto_completo": "ccccccccc",
        "nombre_producto_corto": "cc",
        "precio_producto": "100.00",
        "ruta_archivo_pdf": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\5ad69a2abb\\producto_pdf.pdf",
        "ruta_imagen_principal": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\5ad69a2abb\\imagen_principal.jpg",
        "ruta_imagen_secundaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\5ad69a2abb\\imagen_secundaria.jpg",
        "ruta_imagen_terciaria": "C:\\Users\\DURAN\\Desktop\\APP_AIRE\\static/uploads\\5ad69a2abb\\imagen_terciaria.jpg"
      }
    ]
  )
  const [filteredProducts, setFilteredProducts] = useState()
  // const [filters, setFilters] = useState({
  //   color: [],
  //   marca: [],
  //   tipo: [],
  //   capacidad: []
  // })
  const [filters, setFilters] = useState({}); // Estado dinámico para los filtros
  const [filterOptions, setFilterOptions] = useState([]); // Opciones de filtros desde la API

  // Simulación de la llamada a la API de filtros
  useEffect(() => {
    const fetchFiltros = async () => {
      const response = await fetch("https://backend-aire-ayuda.onrender.com//filtros/store"); // Cambia por la URL de tu API real
      const dataResponse = await response.json();
      console.log('dataResponse', dataResponse)
//      const data = dataResponse.data
      const data = [
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

      setFilterOptions(data); // Guardamos los filtros dinámicos
      // setFilterOptions(dataResponse)

      // Inicializar el estado de filtros basado en los filtros recibidos
      const initialFilters = {};
      data.forEach(filtro => {
        initialFilters[filtro.filtro] = []; // Cada filtro comienza vacío
      });
      console.log('initialFilters', initialFilters)
      setFilters(initialFilters);
    };

    fetchFiltros();
  }, []);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await fetch('https://00tvt5q8-8001.brs.devtunnels.ms/productos/store');
  //       const result = await response.json();
  //       console.log('result', result)
  //       if (result.success) {
  //         setProducts(result.data);
  //       } else {
  //         setError('Failed to fetch products');
  //       }
  //     } catch (err) {
  //       setError('An error occurred while fetching products');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    let filtered = products;
    Object.keys(filters).forEach((filterKey) => {
      if (filters[filterKey] && Array.isArray(filters[filterKey]) && filters[filterKey].length > 0) {
        filtered = filtered.filter((product) =>
          product.filtros.some(
            (filtro) =>
              filtro.filtro.toLowerCase() === filterKey.toLowerCase() &&
              filters[filterKey].some(selectedValue =>
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

      console.log('newValues', filterKey, newValues)
      return {
        ...prevFilters,
        [filterKey]: newValues
      };
    });
  };

  // Limpiar todos los filtros
  const clearFilters = () => {
    const clearedFilters = {};
    Object.keys(filters).forEach(key => {
      clearedFilters[key] = [];
    });
    setFilters(clearedFilters);
  };

  return (
    <div className="max-w-screen-xl mt-8 mb-6 px-6 sm:px-8 mx-auto md:flex min-h-screen">
      <FilterProducts
        setFilters={handleFilterChange}
        clearFilters={clearFilters}
        filterOptions={filterOptions}
      />
      <ListProducts products={filteredProducts} />
    </div>
  );
}
