import type { Metadata } from "next";
import { PT_Sans, EB_Garamond } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import NextTopLoader from 'nextjs-toploader';

const getPtSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans"
});

const getGaramond = EB_Garamond({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-garamond"
})

export const metadata: Metadata = {
  title: "St. Vivekanand School - #1 School in Bikaner",
  description: "Best school, rajashtan",
  icons: {
    icon: "/assets/icons/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${getPtSans.className} ${getGaramond.variable} antialiased`}>
        <NextTopLoader color="#85193C" shadow="0 0 10px #85193C,0 0 5px #85193C"/>
          <NavBar />
          {children}
          <Footer />
      </body>
    </html>
  );
}
