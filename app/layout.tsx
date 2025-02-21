import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/common/NavBar";
import LenisProvider from "@/components/providers/LenisProvider";

const getMontserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "St. Vivekanand School - #1 School in Bikaner",
  description: "Best school, rajashtan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getMontserrat.className} antialiased`}>
        <LenisProvider>
          <NavBar />
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
