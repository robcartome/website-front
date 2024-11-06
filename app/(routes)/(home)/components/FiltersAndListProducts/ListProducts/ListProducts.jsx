import { useState, useEffect } from "react";
import HeaderProducts from "./HeaderProducts/HeaderProducts";
import ProductCard from "../../../../../../components/ProductCard";
import Search from "@/components/Search";
import { SkeletonProducts } from "@/components/Shared/Skeletons/Skeletons";
import { useLovedProducts } from "@/hooks/use-loved-products";

export default function ListProducts({ products }) {
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedProducts();
  const [filteredProducts, setFilteredProducts] = useState(products || []);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(20);
  const [selectedFamily, setSelectedFamily] = useState(""); // Estado para la familia seleccionada

  useEffect(() => {
    setFilteredProducts(products || []);
  }, [products]);

  const handleSearch = (searchTerm) => {
    if (!searchTerm && !selectedFamily) {
      setFilteredProducts(products);
      setCurrentPage(1);
      return;
    }

    const filtered = products.filter((product) => {
      const matchesSearch =
        product.nombre_producto_corto
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        product.descripcion
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesFamily = selectedFamily
        ? product.familia?.toLowerCase() === selectedFamily.toLowerCase()
        : true;

      return matchesSearch && matchesFamily;
    });

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handleFamilyFilter = (family) => {
    if (selectedFamily === family) {
      // Si la familia ya está seleccionada, la deseleccionamos y mostramos todos los productos
      setSelectedFamily("");
      setFilteredProducts(products);
    } else {
      // Si seleccionamos una familia diferente, filtramos por esa familia
      setSelectedFamily(family);

      const filtered = products.filter(
        (product) => product.familia?.toLowerCase() === family.toLowerCase()
      );
      setFilteredProducts(filtered);
    }

    setCurrentPage(1); // Reiniciamos la paginación
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!filteredProducts) {
    return <SkeletonProducts />;
  }

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Lógica para mostrar el rango de páginas visibles y botones "Anterior" y "Siguiente"
  const pageNumbers = [];
  const maxVisiblePages = 3;

  let startPage = Math.max(1, currentPage - 2);
  let endPage = Math.min(totalPages, currentPage + 2);

  if (endPage - startPage < maxVisiblePages - 1) {
    if (currentPage <= 2) {
      endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    } else if (currentPage >= totalPages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <section id="equipos" className="w-full md:p-4">
      {/* Filtros de Familia */}
      <div className="flex flex-wrap gap-2 mb-2 md:flex-nowrap">
        <button
          className={`text-slate-800 text-xs md:text-sm bg-white  border border-slate-200 rounded-lg font-medium px-4 py-2 md:w-full ${
            selectedFamily === "Conjunto 1x1" ? "bg-blue-400 text-white" : ""
          }`}
          onClick={() => handleFamilyFilter("Conjunto 1x1")}
        >
          CONJUNTO 1x1
        </button>
        <button
          className={`text-slate-800 text-xs md:text-sm bg-white  border border-slate-200 rounded-lg font-medium px-4 py-2 md:w-full ${
            selectedFamily === "Interior Multi" ? "bg-blue-400 text-white" : ""
          }`}
          onClick={() => handleFamilyFilter("Interior Multi")}
        >
          INTERIOR MULTI
        </button>
        <button
          className={`text-slate-800 text-xs md:text-sm bg-white  border border-slate-200 rounded-lg font-medium px-4 py-2 md:w-full ${
            selectedFamily === "Exterior Multi" ? "bg-blue-400 text-white" : ""
          }`}
          onClick={() => handleFamilyFilter("Exterior Multi")}
        >
          EXTERIOR MULTI
        </button>
      </div>

      {/* Componente de Búsqueda */}
      <Search onSearch={handleSearch} />

      <HeaderProducts />

      <div className="grid gap-2 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentProducts.length < 1 && (
          <div className="w-full">Sin productos...</div>
        )}

        {currentProducts.map((product) => {
          const {
            id,
            nombre_producto_corto,
            precio_producto,
            descripcion,
            ruta_imagen_principal,
          } = product;
          const likedProduct = lovedItems.some((item) => item.id === id);
          // Filtra 4 productos relacionados según familia
          const relatedProducts = products
          .filter((p) => p.familia === product.familia && p.id !== id)
          .slice(0, 4);
          const relatedProductsParam = encodeURIComponent(JSON.stringify(relatedProducts));
          return (
            <ProductCard
              key={id}
              name={nombre_producto_corto}
              price={precio_producto}
              description={descripcion}
              imgUrl={ruta_imagen_principal}
              addLovedProduct={
                likedProduct
                  ? () => removeLovedItem(id)
                  : () => addLovedItem(product)
              }
              likedProduct={likedProduct}
              linkToDetail={`details/${id}?related=${relatedProductsParam}`}
            />
          );
        })}
      </div>

      {/* Paginación */}
      <div className="pagination mt-4 flex justify-center items-center">
        {/* Botón de página anterior */}
        <button
          onClick={prevPage}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-sky-500 text-white"
          }`}
          disabled={currentPage === 1}
        >
          &lt;
        </button>

        {/* Primer página */}
        {startPage > 1 && (
          <>
            <button
              onClick={() => paginate(1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === 1 ? "bg-sky-500 text-white" : "bg-gray-200"
              }`}
            >
              1
            </button>
            {startPage > 2 && <span className="mx-1">...</span>}
          </>
        )}

        {/* Páginas intermedias */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => paginate(page)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === page ? "bg-sky-500 text-white" : "bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Última página */}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="mx-1">...</span>}
            <button
              onClick={() => paginate(totalPages)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-sky-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Botón de página siguiente */}
        <button
          onClick={nextPage}
          className={`mx-1 px-3 py-1 rounded ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-sky-500 text-white"
          }`}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}
