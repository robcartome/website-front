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
  const [products, setProducts] = useState(
    [
      {
        'id': 1,
        "filtros": [
                {
                    "id": 1,
                    "valor_filtro": {
                        "id": 1,
                        "valor": "York",
                        "filtro": {
                            "id": 1,
                            "nombre": "marca"
                        }
                    }
                },
                {
                    "id": 2,
                    "valor_filtro": {
                        "id": 2,
                        "valor": "Split Pared",
                        "filtro": {
                            "id": 2,
                            "nombre": "tipo"
                        }
                    }
                },
                {
                    "id": 3,
                    "valor_filtro": {
                        "id": 3,
                        "valor": "12.000 btu/h",
                        "filtro": {
                            "id": 3,
                            "nombre": "capacidad"
                        }
                    }
                }
        ],
        'nombre_producto': 'Eco Inverter con Enfriamiento Inteligente 1',
        'precio_producto': '1,250',
        'ruta_imagen_principal': '/assets/aireacondicionado.svg',
        'ruta_imagen_secundaria': '',
        'descripcion': 'Descripción del producto',
        'especificaciones': 'Especificaciones del producto'
      },
      {
      'id': 2,
      "filtros": [
            {
                "id": 1,
                "valor_filtro": {
                    "id": 1,
                    "valor": "miidea",
                    "filtro": {
                        "id": 1,
                        "nombre": "marca"
                    }
                }
            },
            {
                "id": 2,
                "valor_filtro": {
                    "id": 2,
                    "valor": "split_piso_techo",
                    "filtro": {
                        "id": 2,
                        "nombre": "tipo"
                    }
                }
            },
            {
                "id": 3,
                "valor_filtro": {
                    "id": 3,
                    "valor": "14.000 btu/h",
                    "filtro": {
                        "id": 3,
                        "nombre": "capacidad"
                    }
                }
            }
        ],
        'nombre_producto': 'Eco Inverter con Enfriamiento Inteligente',
        'precio_producto': '1,250',
        'ruta_imagen_principal': 'https://plus.unsplash.com/premium_photo-1661315526732-271aa84f480d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'ruta_imagen_secundaria': '',
        'descripcion': 'Descripción del producto',
        'especificaciones': 'Especificaciones del producto'
      },
      {
        'id': 3,
        "filtros": [
            {
                "id": 1,
                "valor_filtro": {
                    "id": 1,
                    "valor": "lg",
                    "filtro": {
                        "id": 1,
                        "nombre": "marca"
                    }
                }
            },
            {
                "id": 2,
                "valor_filtro": {
                    "id": 2,
                    "valor": "split_pared",
                    "filtro": {
                        "id": 2,
                        "nombre": "tipo"
                    }
                }
            },
            {
                "id": 3,
                "valor_filtro": {
                    "id": 3,
                    "valor": "14000",
                    "filtro": {
                        "id": 3,
                        "nombre": "capacidad"
                    }
                }
            }
        ],
        'nombre_producto': 'Aire acondicionado Split Pared Inverter York 12000 btu',
        'precio_producto': '1,880',
        'ruta_imagen_principal': 'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'ruta_imagen_secundaria': '',
        'descripcion': 'Descripción del producto',
        'especificaciones': 'Especificaciones del producto',
        'filters': [
          {
            "id": 1,
            "name": 'marca',
            "value": 'miidea'

          },
          {
            "id": 2,
            "name": 'tipo',
            "value": 'split_pared'
          },
          {
            "id": 3,
            "name": 'capacidad',
            "value": '14000'
          }
        ]
      },
      {
        'id': 4,
        "filtros": [
          {
              "id": 1,
              "valor_filtro": {
                  "id": 1,
                  "valor": "miidea",
                  "filtro": {
                      "id": 1,
                      "nombre": "marca"
                  }
              }
          },
          {
              "id": 2,
              "valor_filtro": {
                  "id": 2,
                  "valor": "split_pared",
                  "filtro": {
                      "id": 2,
                      "nombre": "tipo"
                  }
              }
          },
          {
              "id": 3,
              "valor_filtro": {
                  "id": 3,
                  "valor": "18000",
                  "filtro": {
                      "id": 3,
                      "nombre": "capacidad"
                  }
              }
          }
      ],
        'nombre_producto': 'Aire acondicionado Split pared Carrier 24000 btu',
        'precio_producto': '1,444',
        'ruta_imagen_principal': 'https://plus.unsplash.com/premium_photo-1682126009570-3fe2399162f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'ruta_imagen_secundaria': '',
        'descripcion': 'Descripción del producto',
        'especificaciones': 'Especificaciones del producto'
      },
      {
        'id': 5,
        'filtros': [
          {
            'id': 1,
            'producto': 5,
            'valor_filtro': 1
          }
        ],
        'nombre_producto': 'Aire acondicionado Split pared Inverter Lennox 12000 btu',
        'precio_producto': '1,200',
        'ruta_imagen_principal': 'https://plus.unsplash.com/premium_photo-1674567529893-3833fb7f6605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'ruta_imagen_secundaria': '',
        'descripcion': 'Descripción del producto',
        'especificaciones': 'Especificaciones del producto',
      },
      {
        'id': 6,
        'filtros': [
          {
            'id': 1,
            'producto': 6,
            'valor_filtro': 1
          }
        ],
        'nombre_producto': 'Eco Inverter con Enfriamiento Inteligente',
        'precio_producto': '1,250',
        'ruta_imagen_principal': '/assets/aireacondicionado.svg',
        'ruta_imagen_secundaria': '',
        'descripcion': 'Descripción del producto',
        'especificaciones': 'Especificaciones del producto',
        'filters': [
          {
            "id": 1,
            "name": 'marca',
            "value": 'miidea'

          },
          {
            "id": 2,
            "name": 'tipo',
            "value": 'split_pared'
          },
          {
            "id": 3,
            "name": 'capacidad',
            "value": '14000'
          }
        ]
      },
      {
        'id': 7,
        'filtros': [
          {
            'id': 1,
            'producto': 7,
            'valor_filtro': 1
          }
        ],
        'nombre_producto': 'Eco Inverter con Enfriamiento Inteligente',
        'precio_producto': '1,250',
        'ruta_imagen_principal': '/assets/aireacondicionado.svg',
        'ruta_imagen_secundaria': '',
        'descripcion': 'Descripción del producto',
        'especificaciones': 'Especificaciones del producto',
        'filters': []
      }
    ]
  )
  const [filteredProducts, setFilteredProducts] = useState()
  const [filters, setFilters] = useState({
    marca: [],
    tipo: [],
    capacidad: []
  })

  useEffect(() => {
    let filtered = products;
    console.log(filtered, filters)
    // Filtrado más dinámico y flexible, Esto te permitirá agregar nuevos filtros en el backend sin necesidad de modificar el código del frontend cada vez.
    // Object.keys(filters).forEach((filterKey) => {
    //   if (filters[filterKey]) {
    //     filtered = filtered.filter((product) =>
    //       product.filters.some(
    //         (filter) =>
    //           filter.name === filterKey &&
    //           filter.value.toLowerCase().includes(filters[filterKey].toLowerCase())
    //       )
    //     );
    //   }
    // });
    Object.keys(filters).forEach((filterKey) => {
      if (filters[filterKey] && Array.isArray(filters[filterKey]) && filters[filterKey].length > 0) {
        filtered = filtered.filter((product) =>
          product.filtros.some(
            (filtro) =>
              filtro.valor_filtro.filtro?.nombre.toLowerCase() === filterKey.toLowerCase() &&
              filters[filterKey].some(selectedValue =>
                filtro.valor_filtro.valor?.toLowerCase().includes(selectedValue.toLowerCase())
              )
          )
        );
      }
    });

    setFilteredProducts(filtered)
  },[filters, products])

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

  const clearFilters = () => {
    console.log('entro clearFilters')
    setFilters(
      {
        marca: "",
        tipo: "",
        capacidad: ""
      }
    )
  }
  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 mx-auto flex min-h-screen">
      {/* <SidebarFilter className="w-1/6 bg-white p-4 shadow-md" /> */}
      <FilterProducts
        setFilters={handleFilterChange}
        clearFilters={clearFilters}
        filters={filters}
      />
      <ListProducts products={filteredProducts} />
    </div>
  );
}
