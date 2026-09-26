import type { Metadata } from "next";
import { PT_Sans, EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { NavBar } from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import NextTopLoader from "nextjs-toploader";
import BackToTop from "@/components/BackToTop";
import AdmissionModal from "@/components/AdmissionModal";
import { Toaster } from "@/components/ui/toaster";
import JsonLd from "@/components/JsonLd";
import MotionProvider from "@/components/motion/MotionProvider";
import { schoolJsonLd } from "@/lib/jsonld";
import { BRAND_SUFFIX, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/seo";

const getPtSans = PT_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const getGaramond = EB_Garamond({
  weight: ["500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-garamond",
});

const defaultTitle = "St. Vivekanand School - Best CBSE School in Bikaner";
const defaultDescription =
  "St. Vivekanand School is a CBSE school in Bikaner offering quality education, modern facilities, and holistic development for students from Nursery to Class 12.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${BRAND_SUFFIX}`,
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: defaultDescription,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/icons/fav.png",
    shortcut: "/assets/icons/fav.png",
    apple: "/assets/icons/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <body className={`${getPtSans.className} ${getGaramond.variable} antialiased`}>
        <JsonLd data={schoolJsonLd()} />
        <NextTopLoader color="#85193C" showSpinner={false} shadow={false} />
        <MotionProvider>
          <NavBar />
          {children}
          <Footer />
          <BackToTop />
          <AdmissionModal />
        </MotionProvider>
        <Toaster />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z9BN0MGCL3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z9BN0MGCL3');
          `}
        </Script>
      </body>
    </html>
  );
}
