/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { BadgeCheck } from 'lucide-react';
import Image from "next/image";

// import { FaChalkboardTeacher, FaRegCalendarAlt } from 'react-icons/fa';
import Link from "next/link";

export default function ProductCard({
  slug,
  name,
  price,
  description,
  imgUrl,
  addLovedProduct,
  likedProduct,
  linkToDetail=''
}) {
  // const linkToDetail = `/detail/${slug}`; // detail/aire-acondicionado-split-pared-york-12000-btu
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const srcImg = `${apiUrl}/${imgUrl}`; // PARA FETCH PRODUCTOS
  // const srcImg = imgUrl;
  const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex flex-col justify-between h-full">
        <img
          // src="/assets/aireacondicionado.svg"
          src={srcImg}
          alt="Aire acondicionado"
          layout="responsive"
          quality={100}
          height={240}
          width={240}
          className="w-full"
        />
        <div className="px-3 py-2">
          <div className="mb-1 justify-between">
            <span className="font-bold text-sm md:text-base">
              {name}
            </span>
            <BadgeCheck
              className={`cursor-pointer ${likedProduct ? 'fill-sky-500' : ''}`}
              // className="cursor-pointer"
              // color={ likedProduct ? "#0cb7f2" : "#000"}
              color={ likedProduct ? "#ffff" : "#36c9fa"}
              // width={ likedProduct ? 30 : 24}
              // height={ likedProduct ? 30 : 24}
              // strokeWidth={2}
              onClick={() => addLovedProduct()}
            />
          </div>
          <ul className="list-disc text-gray-700 text-xs pl-4">
            <li>Tipo de Gas: </li>
            <li>Consumo: </li>
            <li>Potencia: </li>
            <li>Cop: </li>
          </ul>
        </div>
        <div className="px-4 pt-2 pb-4 flex items-center justify-between">
            <span className="inline-block bg-gray-200 rounded-full px-2 text-xs font-semibold text-gray-700">
              EUR {price}
            </span>
            <a
              className="pl-3 pr-2 py-0 text-sky-100 font-medium bg-sky-500 rounded-full inline-flex items-center text-xs"
              href={linkToDetail}
            >
              <span className="hidden md:block">
                Ver mas
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1 duration-150"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
        </div>
      </div>
    </div>
  );
}
