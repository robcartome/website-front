import Hero from "./components/Hero/Hero";
import FiltersAndListProducts from "./components/FiltersAndListProducts/FiltersAndListProducts";
import Services from "./components/Services/Services";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between xl:p-24">
        <Hero></Hero>
        {/* <FirstBlock></FirstBlock> */}
        <FiltersAndListProducts />
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
