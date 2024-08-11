/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
// import './ProductCard.css';
// import Badge from 'react-bootstrap/Badge';

// import { FaChalkboardTeacher, FaRegCalendarAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import Link from "next/link";

export default function ProductCard({
  slug,
  name,
  price,
  description,
  imgUrl,
}) {
  // const linkToDetail = `/detail/${slug}`; // detail/aire-acondicionado-split-pared-york-12000-btu
  const linkToDetail = `details/${name}`;
  const imageLoader = ({ src, width, quality }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex flex-col justify-between h-full">
        <img
          // src="/assets/aireacondicionado.svg"
          src={imgUrl}
          alt="Aire acondicionado"
          layout="responsive"
          quality={100}
          height={240}
          width={240}
          className="w-full"
        />
        <div className="px-6 py-2">
          <div className="font-bold text-lg mb-1">{name}</div>
          <ul className="list-disc text-gray-700 text-xs pl-4">
            <li>Enfriamiento automático inteligente.</li>
            <li>Enfriamiento rápido.</li>
            <li>SmartThings.</li>
            <li>Limpieza automática.</li>
          </ul>
        </div>
        <div className="px-4 pt-2 pb-4 flex items-center justify-between">
          <div>
            <span className="inline-block bg-gray-200 rounded-full px-2 text-xs font-semibold text-gray-700">
              EUR {price}
            </span>
          </div>
          <div>
            <Link
              className="pl-3 pr-2 py-1 text-sky-100 font-medium bg-sky-500 rounded-full inline-flex items-center text-xs"
              href={linkToDetail}
            >
              Ver mas
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
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}