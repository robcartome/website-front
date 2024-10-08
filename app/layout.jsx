import { Outfit } from "next/font/google";
import "./globals.css";
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Aireayuda",
  description: "Todo sobre aire acondicionado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={outfit.className}>
        <NextTopLoader color="#000" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
