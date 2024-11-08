import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Second Persoal Portfolio",
  description: "A refined and visually engaging portfolio by Shahmeer Ali, crafted with Tailwind CSS to showcase skills and projects in a clean, modern layout",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className } >
        <Navbar/>
        {children}</body>
       <FooterSection/>
        
 
    </html>
  );
}
