/* eslint-disable @next/next/no-img-element */
"use client";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import getScrollAnimation from "@/lib/getScrollAnimation";
import ScrollAnimationWrapper from "../../../../components/ScrollAnimationWrapper";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Footer";
import { Download } from "lucide-react";
import { useLovedProducts } from "@/hooks/use-loved-products";

const DetailsPage = ({ params }) => {
  const { productId } = params;
  const searchParams = useSearchParams();
  const { addLovedItem, lovedItems, removeLovedItem } = useLovedProducts();
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState(null);  // Estado para almacenar los detalles del producto
  const [features, setFeatures] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    if (productId) {
      const fetchDetail = async () => {
        try {
          setLoading(true);
          const response = await fetch(`${apiUrl}/productos/store/${productId}`);

          if (!response.ok) {
            throw new Error(
              `Error al obtener detalle: ${response.statusText}`
            );
          }

          const dataResponse = await response.json();
          const data = dataResponse.data || []; // Protección si `dataResponse.data` es undefined
          setDetail(data);

          // Convertir filtros en features únicos (sin duplicados)
          const uniqueFeatures = data.filtros.reduce((acc, filtro) => {
            acc[filtro.filtro] = filtro.valor; // Si existe el mismo filtro, se reemplaza con el último valor
            return acc;
          }, {});

          // Convertir el objeto resultante en un array de strings formateado
          const formattedFeatures = Object.entries(uniqueFeatures).map(
            ([filtro, valor]) => `${filtro}: ${valor}`
          );
          setFeatures(formattedFeatures);

        } catch (err) {
          console.error("Error fetching products:", err);
          setError("Error al cargar los productos");
        } finally {
          setLoading(false);
        }
      };
      fetchDetail();
    }
  }, [productId, apiUrl]);  // El efecto se ejecuta cuando cambia el ID

  // Obtener productos relacionados desde los query params y deserializarlos
  useEffect(() => {
    const related = searchParams.get("related");
    if (related) {
      try {
        // Decodifica y deserializa el JSON de productos relacionados
        const relatedProductsData = JSON.parse(decodeURIComponent(related));
        console.log(relatedProductsData)
        setRelatedProducts(relatedProductsData);
      } catch (err) {
        console.error("Error parsing related products:", err);
      }
    }
  }, [searchParams]);

  if (loading) return <div>Cargando detalles del producto...</div>;

  if (!detail) return <div>Error al cargar los detalles del producto</div>;

  const srcImg = `${apiUrl}/${detail.ruta_imagen_principal}`; // PARA FETCH PRODUCTOS
  // const srcImg = imgUrl;
  const srcFile = `${apiUrl}/${detail.ruta_archivo_pdf}`;

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mt-20 sm:mt-28 mb-6 sm:mb-24 px-6 sm:px-8 lg:px-16 mx-auto ">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p-8 mt-8">
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
              <img
                src={srcImg}
                alt={detail.nombre_producto_completo}
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                {detail.nombre_producto_completo}
              </h3>
              <p className="my-2 text-black-500 text-justify">
                Una maravilla de la tecnología que transformará tu hogar o
                espacio de trabajo. Si buscas la comodidad suprema sin
                comprometer la eficiencia, este es tu aliado perfecto..
              </p>
              {/* Muestra las características, puedes mapearlas si son dinámicas */}
              <ul className="text-black-500 self-start list-inside ml-8">
                {features.map((caracteristica, index) => (
                  <motion.li
                    className="relative circle-check custom-list"
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={caracteristica}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    {caracteristica}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <div className="flex flex-col mt-8 ml-auto w-full lg:w-9/12">
              <div>
                <a href={srcFile} target="_blank" rel="noopener" className="flex justify-center gap-1 py-2 lg:py-4 px-6 lg:px-16 text-white font-semibold rounded-lg bg-sky-500 hover:shadow-lg">
                  <Download /> Ver Ficha Técnica
                </a>
              </div>
            </div>
          </ScrollAnimationWrapper>

        </div>

        {/* Descripción */}
        <section className="w-full p-4">
          <h1 className="text-2xl font-bold mb-4">Descripción</h1>
          <div dangerouslySetInnerHTML={{ __html: detail.descripcion }} />
          {/* Otra información del producto */}
        </section>

        {/* Productos relacionados */}
        <section className="w-full p-4">
          <h1 className="text-center text-2xl font-bold mb-4">Productos relacionados</h1>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            relatedProducts.map((product) => {
              const id = product.id;
              const likedProduct = lovedItems.some((item) => item.id === id);
              const relatedProductsParam = encodeURIComponent(JSON.stringify(relatedProducts));
              return (
                <ProductCard
                  key={id}
                  product={product}
                  addLovedProduct={
                    likedProduct
                      ? () => removeLovedItem(id)
                      : () => addLovedItem(product)
                  }
                  likedProduct={likedProduct}
                  linkToDetail={`/details/${id}?related=${relatedProductsParam}`}
                />
              )
            })
          }
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;
