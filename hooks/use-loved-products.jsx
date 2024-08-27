import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLovedProducts = create(
  persist(
    (set, get) => ({
      lovedItems: [],
      addLovedItem: (data) => {
        console.log('data addLovedItem', data)
        const currentLovedItems = get().lovedItems;
        const existingItem = currentLovedItems.find(
          (item) => item.id == data.id
        );

        if (existingItem) {
            // get().removeLovedItem(data.id); // Primera forma solo usar adLovedItem. deprecated
            alert("El producto ya existe");
          return;
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });

        alert("Producto añadido a la lista favoritos <3");
      },

      removeLovedItem: (id) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id != id)],
        });
        alert("El producto se ha eliminado de la lista de favoritos ");
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
