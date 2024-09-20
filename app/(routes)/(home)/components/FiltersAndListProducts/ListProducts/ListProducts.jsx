"use client";
import React, { useState } from "react";
import HeaderProducts from "./HeaderProducts/HeaderProducts";
import ProductCard from "../../../../../../components/ProductCard";
import Search from "@/components/Search";
import SkeletonProducts from "@/components/Shared/SkeletonProducts/SkeletonProducts";
import { useLovedProducts } from "@/hooks/use-loved-products";

export default function ListProducts(props) {
  const { products } = props;
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedProducts();

  if (!products) {
    return <SkeletonProducts />;
  }

  console.log('lovedItems', lovedItems, products)
  return (
    <section className="w-full p-4">
      <Search />
      <HeaderProducts />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.length < 1 && (
          <div className="flex w-full">Sin productos...</div>
        )}
        {products.map((product) => {
          const {
            id,
            nombre_producto_corto,
            precio_producto,
            descripcion,
            ruta_imagen_principal,
          } = product;
          const likedProduct = lovedItems.some((item) => item.id === id) // En caso se quiera tener opcion de tener favoritos o clicks en los corazones

          return (
            <ProductCard
              key={id}
              name={nombre_producto_corto}
              price={precio_producto}
              description={descripcion}
              imgUrl={ruta_imagen_principal}
              addLovedProduct={
                likedProduct
                  ? () => removeLovedItem(product.id)
                  : () => addLovedItem(product)}
              likedProduct={likedProduct}
            />
          );
        })}
      </div>
    </section>
  );
}
