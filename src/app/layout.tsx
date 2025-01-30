import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import FooterWrapper from "@/components/FooterWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tri Pham Photography",
  description:
    "Professional photography portfolio of Tri Pham, capturing beautiful moments through the lens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-black text-white flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
