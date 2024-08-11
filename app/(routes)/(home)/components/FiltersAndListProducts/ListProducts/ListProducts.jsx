"use client";
import React from "react";
import HeaderProducts from "./HeaderProducts/HeaderProducts";
import ProductCard from "../../../../../../components/ProductCard";
import Search from "@/components/Search";

export default function ListProducts(props) {
  const {products} = props;

  if (!products) {
    return <p>Skeleton...</p>
  }

  return (
    <section className="w-full p-4">
      <Search />
      <HeaderProducts />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {
          products.map((product) => {
            const {id, nombre_producto, precio_producto, descripcion, ruta_imagen_principal} = product
            // const likedProduct = lovedItems.some((item) => item.id === id) // En caso se quiera tener opcion de tener favoritos o clicks en los corazones
            return (
              <ProductCard
                key={id}
                name={nombre_producto}
                price={precio_producto}
                description={descripcion}
                imgUrl={ruta_imagen_principal}
              />
            )
          })
        }
      </div>
    </section>
  );
}