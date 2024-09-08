import { toast} from "@/components/ui/use-toast";
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
          return toast({
            title: "El producto ya existe"
          });
        }

        if (currentLovedItems.length >= 4) {
          return toast({
            title: "¡Seleccionar máximo 4 favoritos!",
            variant: "destructive"
          })
        }

        set({
          lovedItems: [...get().lovedItems, data],
        });


        // alert("Producto añadido a la lista favoritos <3");
        toast({
          title: "Producto añadido a la lista de favoritos <3",
        })
      },

      removeLovedItem: (id) => {
        set({
          lovedItems: [...get().lovedItems.filter((item) => item.id != id)],
        });
        toast({
          description: "El producto se ha eliminado de la lista de favoritos </3"
        })
        // toast({
        //   title: "El producto se ha eliminado de la lista de favoritos",
        //   variant: "destructive"
        // })
      },
    }),
    {
      name: "loved-products-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
