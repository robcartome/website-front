"use client"
import React from "react";
import { useLovedProducts } from "@/hooks/use-loved-products";
import ProductCard from "@/components/ProductCard";

export default function LovedProducts() {
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedProducts();
  return (
    <div>
      <h1 className="text-2xl">Productos favoritos</h1>
      {lovedItems.lenght == 0 ? (
        <p>Seleccionar productos que te gusten...</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {lovedItems.map((product) => {
            const {
              id,
              nombre_producto,
              precio_producto,
              descripcion,
              ruta_imagen_principal,
            } = product;
            const likedProduct = lovedItems.some((item) => item.id === id)
            return (
              <ProductCard
                key={id}
                name={nombre_producto}
                price={precio_producto}
                description={descripcion}
                imgUrl={ruta_imagen_principal}
                addLovedProduct={
                  likedProduct
                    ? () => removeLovedItem(product.id)
                    : () => addLovedItem(product)}
                likedProduct={likedProduct}
              />
            )
          })
          }
        </div>
      )}
    </div>
  );
}

