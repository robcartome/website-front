import { useState, useEffect } from "react";
import HeaderProducts from "./HeaderProducts/HeaderProducts";
import ProductCard from "../../../../../../components/ProductCard";
import Search from "@/components/Search";
import { SkeletonProducts } from "@/components/Shared/Skeletons/Skeletons";
import { useLovedProducts } from "@/hooks/use-loved-products";

export default function ListProducts({ products }) {
  console.log(products)
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedProducts();
  const [filteredProducts, setFilteredProducts] = useState(products); // Guardamos los productos filtrados

  // Actualizar filteredProducts cada vez que los productos cambien
  useEffect(() => {
    setFilteredProducts(products || []); // Si `products` es undefined, inicializa con un array vacío
  }, [products]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm) {
      setFilteredProducts(products); // Si no hay búsqueda, mostramos todos los productos
      return;
    }

    // Filtrar productos por nombre o descripción
    const filtered = products.filter((product) =>
      product.nombre_producto_corto.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  if (!filteredProducts) {
    return <SkeletonProducts />;
  }


  return (
    <section id="equipos" className="w-full md:p-4">
      {/* Pasamos la función de búsqueda al componente Search */}
      <Search onSearch={handleSearch} />
      <HeaderProducts />
      <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.length < 1 && (
          <div className="w-full">Sin productos...</div>
        )}
        {filteredProducts?.map((product) => {
          const {
            id,
            nombre_producto_corto,
            precio_producto,
            descripcion,
            ruta_imagen_principal,
          } = product;

          const likedProduct = lovedItems.some((item) => item.id === id);

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
                  : () => addLovedItem(product)
              }
              likedProduct={likedProduct}
              linkToDetail={`details/${id}`}
            />
          );
        })}
      </div>
    </section>
  );
}
