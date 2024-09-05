import FirstBlock from "./components/FirtsBlock/FirstBlock";
import Hero from "./components/Hero/Hero";
import FiltersAndListProducts from "./components/FiltersAndListProducts/FiltersAndListProducts";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Footer";


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
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
