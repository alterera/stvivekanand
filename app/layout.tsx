import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/common/NavBar";
// import LenisProvider from "@/components/providers/LenisProvider";

const getPtSans = PT_Sans({
  weight: ["400", "700"],
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
      <body className={`${getPtSans.className} antialiased`}>
        {/* <LenisProvider> */}
          <NavBar />
          {children}
        {/* </LenisProvider> */}
      </body>
    </html>
  );
}
