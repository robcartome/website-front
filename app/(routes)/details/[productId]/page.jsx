"use client";

import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "@/lib/getScrollAnimation";
import ScrollAnimationWrapper from "../../../../components/ScrollAnimationWrapper";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/app/data";

const features = [
  "Marca: York",
  "Tipo: Split Pared",
  "Capacidad: 12.000 btu/h",
  "Gas: R-410A",
  "Función: Frio solo",
  "Características eléctricas: 220V/1F/60HZ",
  "Modelo unidad condensadora: YHFE12YJMDTMO-X",
];

const DetailsPage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const relatedProducts = products.slice(1,4)
  return (
    <>
      <Navbar />
      <div
        className="max-w-screen-xl mt-32 mb-6 sm:mb-24 px-6 sm:px-8 lg:px-16 mx-auto "
        id="equipamientos"
      >
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div
              className="h-full w-full p-4"
              variants={scrollAnimation}
            >
              <Image
                // src="/assets/Illustration2.png"
                src="/assets/aireacondicionado.svg"
                alt="VPN Illustrasi"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12"
              variants={scrollAnimation}
            >
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
                Aire acondicionado Split pared YORK 12000 btu
              </h3>
              <p className="my-2 text-black-500">
                una maravilla de la tecnología que transformará tu hogar o
                espacio de trabajo. Si buscas la comodidad suprema sin
                comprometer la eficiencia, este es tu aliado perfecto..
              </p>
              <ul className="text-black-500 self-start list-inside ml-8">
                {features.map((equipamientos, index) => (
                  <motion.li
                    className="relative circle-check custom-list"
                    custom={{ duration: 2 + index }}
                    variants={scrollAnimation}
                    key={equipamientos}
                    whileHover={{
                      scale: 1.1,
                      transition: {
                        duration: 0.2,
                      },
                    }}
                  >
                    {equipamientos}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        {/* Section descripción */}
        <section className="w-full p-4">
          <h1 class="text-2xl font-bold mb-4">Descripción</h1>
          <div className="text-justify">
            ¡No esperes más! Te presentamos el Aire Acondicionado Split Pared
            York 12000 BTU, una maravilla de la tecnología que transformará tu
            hogar o espacio de trabajo. Si buscas la comodidad suprema sin
            comprometer la eficiencia, este es tu aliado perfecto. Con este aire
            acondicionado, podrás programar tu entorno con el temporizador de 24
            horas, asegurándote de que siempre esté a la temperatura ideal,
            ahorrando energía y dinero. Además, la función de bloqueo para niños
            garantiza la seguridad en todo momento. ¿Te preocupa el
            mantenimiento? El autodiagnóstico facilita la identificación y
            solución de problemas, ahorrándote tiempo y preocupaciones. Y eso no
            es todo, la protección de 3 minutos y el reinicio automático
            aseguran que tu inversión esté protegida y funcionando de manera
            eficiente. ¡No pierdas más tiempo! Añade este aire acondicionado a
            tu carrito de compras y experimenta un nivel incomparable de confort
            y ahorro de energía. Tu comodidad y bienestar son nuestra prioridad.
            ¡Haz clic y disfruta del aire fresco que mereces!
            <br></br>
            <br></br>
            <b>Temporizador de 24 horas:</b>
            <br></br>
            <br></br>
            ¿Imagina llegar a casa con la temperatura perfecta, o asegurarte de
            ahorrar energía mientras no estás? Este equipo te permite programar
            el aire acondicionado para que se encienda o apague automáticamente
            en un horario específico. La comodidad a tu disposición.
            <br></br>
            <br></br>
            <b>Bloqueo para niños:</b>
            <br></br>
            <br></br>
            La seguridad es primordial. Con la función de bloqueo para niños,
            puedes estar tranquilo sabiendo que los más pequeños no podrán tocar
            el control remoto sin tu autorización. Un solo toque para bloquear,
            otro para desbloquear. Protege a tus seres queridos con facilidad.
            <br></br>
            <br></br>
            <b>Ventilador de velocidad múltiple:</b>
            <br></br>
            <br></br>
            ¿Necesitas un flujo de aire personalizado? Este equipo de aire
            acondicionado te ofrece la posibilidad de ajustar la velocidad del
            ventilador según tus necesidades. Selecciona entre varios niveles
            para disfrutar de la máxima comodidad en cualquier momento.
          </div>
          <div className="pt-4">
            <b>SKU: </b>YSPFSC-12 <b>Categorías:</b> Aire Acondicionado York,
            Split Pared
          </div>
        </section>

        {/* Section Productos relacionados */}
        <section className="w-full p-4">
          <h1 class="text-center text-2xl font-bold mb-4">Productos relacionados</h1>
          <div className="grid gap-x-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
            relatedProducts.map((product) => {
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
      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;
