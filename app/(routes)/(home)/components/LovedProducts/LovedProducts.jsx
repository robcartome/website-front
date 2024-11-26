"use client";
import React from "react";
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
        <button className="hover:text-sky-500 flex items-center text-xs md:text-sm">
          <BadgeCheck
            className="fill-sky-500 text-white hover:opacity-80"
            width={30}
            height={35}
          />
          Favoritos
        </button>
      </DialogTrigger>

      {/* Ajuste de DialogContent para que sea completamente responsivo */}
      <DialogContent className="w-full max-w-full sm:max-w-3xl lg:max-w-6xl p-4 overflow-y-auto max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-center mb-2">Productos Favoritos</DialogTitle>
          <hr />
          <DialogDescription>
            {/* Mostramos un mensaje si no hay productos */}
            {lovedItems.length === 0 ? (
              <span>Seleccionar productos que te gusten...</span>
            ) : (
              // Ajuste del grid para asegurar que sea responsivo
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 pb-4">
                {lovedItems.map((product) => {
                  const id = product.id;
                  const likedProduct = lovedItems.some((item) => item.id === id);

                  return (
                    <ProductCard
                      key={id}
                      product={product}
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
