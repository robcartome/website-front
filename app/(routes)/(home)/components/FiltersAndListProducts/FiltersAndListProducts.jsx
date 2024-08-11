import React from "react";
import ListProducts from "./ListProducts/ListProducts";
import SidebarFilter from "./components/SidebarFilter";

export default async function FiltersAndListProducts() {
  // const products = await fetchProducts();
  const products = [
    {
      'id': 1,
      'filtros': [
        {
          'id': 1,
          'producto': 1,
          'valor_filtro': 1
        }
      ],
      'nombre_producto': 'Eco Inverter con Enfriamiento Inteligente',
      'precio_producto': '1,250',
      'ruta_imagen_principal': '/assets/aireacondicionado.svg',
      'ruta_imagen_secundaria': '',
      'descripcion': 'Descripción del producto',
      'especificaciones': 'Especificaciones del producto'
    },
    {
      'id': 1,
      'filtros': [
        {
          'id': 1,
          'producto': 1,
          'valor_filtro': 1
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
      'id': 1,
      'filtros': [
        {
          'id': 1,
          'producto': 1,
          'valor_filtro': 1
        }
      ],
      'nombre_producto': 'Aire acondicionado Split Pared Inverter York 12000 btu',
      'precio_producto': '1,880',
      'ruta_imagen_principal': 'https://plus.unsplash.com/premium_photo-1683134512538-7b390d0adc9e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'ruta_imagen_secundaria': '',
      'descripcion': 'Descripción del producto',
      'especificaciones': 'Especificaciones del producto'
    },
    {
      'id': 1,
      'filtros': [
        {
          'id': 1,
          'producto': 1,
          'valor_filtro': 1
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
      'id': 1,
      'filtros': [
        {
          'id': 1,
          'producto': 1,
          'valor_filtro': 1
        }
      ],
      'nombre_producto': 'Aire acondicionado Split pared Inverter Lennox 12000 btu',
      'precio_producto': '1,200',
      'ruta_imagen_principal': 'https://plus.unsplash.com/premium_photo-1674567529893-3833fb7f6605?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'ruta_imagen_secundaria': '',
      'descripcion': 'Descripción del producto',
      'especificaciones': 'Especificaciones del producto'
    },
    {
      'id': 1,
      'filtros': [
        {
          'id': 1,
          'producto': 1,
          'valor_filtro': 1
        }
      ],
      'nombre_producto': 'Eco Inverter con Enfriamiento Inteligente',
      'precio_producto': '1,250',
      'ruta_imagen_principal': '/assets/aireacondicionado.svg',
      'ruta_imagen_secundaria': '',
      'descripcion': 'Descripción del producto',
      'especificaciones': 'Especificaciones del producto'
    },
    {
      'id': 1,
      'filtros': [
        {
          'id': 1,
          'producto': 1,
          'valor_filtro': 1
        }
      ],
      'nombre_producto': 'Eco Inverter con Enfriamiento Inteligente',
      'precio_producto': '1,250',
      'ruta_imagen_principal': '/assets/aireacondicionado.svg',
      'ruta_imagen_secundaria': '',
      'descripcion': 'Descripción del producto',
      'especificaciones': 'Especificaciones del producto'
    }
  ]
  return (
    <div className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 mx-auto flex min-h-screen">
      <SidebarFilter className="w-1/6 bg-white p-4 shadow-md" />
      <ListProducts products={products} />
    </div>
  );
}
