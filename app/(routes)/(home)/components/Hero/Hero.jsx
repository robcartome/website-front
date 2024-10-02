"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "@/lib/getScrollAnimation";
import ScrollAnimationWrapper from "../../../../../components/ScrollAnimationWrapper";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-16 md:mt-4 px-8 xl:px-12 mx-auto"
      id="inicio"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:pt-8"
            variants={scrollAnimation}>
            <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium  text-black-500 leading-normal">
                Expertos en <strong className="text-sky-500">aire acondicionado</strong>
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                Todos los tipos de aires acondicionados para siempre estar a temperatura ambiente.
                Los mejores equipos a un gran precio
              </p>
              <ButtonPrimary>Saber mas</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/aireacondicionado.svg"
                  alt="Aire acondicionado"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
