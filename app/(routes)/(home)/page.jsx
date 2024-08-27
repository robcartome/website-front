import Image from "next/image";
import FirstBlock from "./components/FirtsBlock/FirstBlock";
import Hero from "./components/Hero/Hero";
import FiltersAndListProducts from "./components/FiltersAndListProducts/FiltersAndListProducts";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Footer";
import LovedProducts from "./components/LovedProducts/LovedProducts";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Hero></Hero>
        {/* <FirstBlock></FirstBlock> */}
        <FiltersAndListProducts />
        <LovedProducts />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
