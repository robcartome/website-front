import Hero from "./components/Hero/Hero";
import FiltersAndListProducts from "./components/FiltersAndListProducts/FiltersAndListProducts";
import Services from "./components/Services/ServiceCards";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Footer";
import SectionInfo from "./components/SectionInfo/SectionInfo";


export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between ">
        <Hero></Hero>
        {/* <FirstBlock></FirstBlock> */}
        <FiltersAndListProducts />
      </main>
      <SectionInfo />
      <Services />
      <footer>
        <Footer />
      </footer>
    </>
  );
}
