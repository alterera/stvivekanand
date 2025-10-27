import type { Metadata } from "next";
import { PT_Sans, EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NavBar } from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import NextTopLoader from 'nextjs-toploader';
import BackToTop from "@/components/BackToTop";
import AdmissionModal from "@/components/AdmissionModal";
import { Toaster } from "@/components/ui/toaster";
// import Prospectus from "@/components/Prospectus";

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
  metadataBase: new URL('https://stvivekanandschool.com'),
  title: {
    default: "St. Vivekanand School - Best CBSE School in Bikaner",
    template: "%s | St. Vivekanand School Bikaner"
  },
  description: "St. Vivekanand School is the best CBSE school in Bikaner, offering quality education, modern facilities, and holistic development for students from Nursery to Class 12.",
  keywords: [
    "best school in bikaner",
    "cbse school bikaner",
    "top school in bikaner",
    "school in bikaner",
    "education in bikaner",
    "best cbse school",
    "quality education",
    "holistic development",
    "nursery to class 12"
  ],
  authors: [{ name: "St. Vivekanand School" }],
  creator: "St. Vivekanand School",
  publisher: "St. Vivekanand School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://stvivekanandschool.com",
    siteName: "St. Vivekanand School",
    title: "St. Vivekanand School - Best CBSE School in Bikaner",
    description: "St. Vivekanand School is the best CBSE school in Bikaner, offering quality education, modern facilities, and holistic development for students from Nursery to Class 12.",
    images: [
      {
        url: "/st-og.png",
        width: 1200,
        height: 630,
        alt: "St. Vivekanand School - Best CBSE School in Bikaner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Vivekanand School - Best CBSE School in Bikaner",
    description: "St. Vivekanand School is the best CBSE school in Bikaner, offering quality education, modern facilities, and holistic development for students from Nursery to Class 12.",
    images: ["/st-og.png"],
    creator: "@stvivekanandschool",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/assets/icons/fav.png",
    shortcut: "/assets/icons/fav.png",
    apple: "/assets/icons/fav.png",
  },
  alternates: {
    canonical: "https://stvivekanandschool.com",
  }
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
          <BackToTop/>
          <AdmissionModal />
          <Toaster />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-92M4BSDTEV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-92M4BSDTEV');
          `}
        </Script>
      </body>
    </html>
  );
}
