"use client";
import React, { useState } from "react";
import { useLovedProducts } from "@/hooks/use-loved-products";
import ProductCard from "@/components/ProductCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BadgeCheck } from "lucide-react";

export default function LovedProducts() {
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedProducts();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="hover:text-sky-500"
        >
          <BadgeCheck
            className="fill-sky-500 text-white hover:opacity-80"
            width={30}
            height={35}
          />
        </button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-full sm:max-w-3xl lg:max-w-6xl p-4">
        <DialogHeader>
          <DialogTitle className="text-center mb-2">Productos Favoritos</DialogTitle>
          <DialogDescription className="overflow-y-auto max-h-screen">
            {lovedItems.length === 0 ? (
              <span>Seleccionar productos que te gusten...</span>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-h-screen">
                {/* Ajuste aquí */}
                {lovedItems.map((product) => {
                  const {
                    id,
                    nombre_producto,
                    precio_producto,
                    descripcion,
                    ruta_imagen_principal,
                  } = product;
                  const likedProduct = lovedItems.some(
                    (item) => item.id === id
                  );
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
                          : () => addLovedItem(product)
                      }
                      likedProduct={likedProduct}
                    />
                  );
                })}
              </div>
            )}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
