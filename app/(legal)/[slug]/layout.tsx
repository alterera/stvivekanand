import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity";
import { LEGAL_PAGE_QUERY } from "@/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

interface LegalPageData {
  title: string;
  metaDescription: string;
  keywords?: string[];
  lastUpdated: string;
  effectiveDate: string;
  pageType: string;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const legalData: LegalPageData = await sanityClient.fetch(LEGAL_PAGE_QUERY, { 
    slug: resolvedParams.slug 
  });

  if (!legalData) {
    return {
      title: "Page Not Found | St. Vivekanand School Bikaner",
      description: "The requested page could not be found.",
    };
  }

  return {
    title: `${legalData.title} | St. Vivekanand School Bikaner`,
    description: legalData.metaDescription,
    keywords: legalData.keywords || [
      legalData.title.toLowerCase(),
      "legal",
      "policies",
      "school policies",
      "terms and conditions",
      "privacy",
      "disclaimer",
      "best school in bikaner",
      "st vivekanand school"
    ],
    alternates: {
      canonical: `https://stvivekanandschool.com/${resolvedParams.slug}`,
    },
    openGraph: {
      title: `${legalData.title} | St. Vivekanand School Bikaner`,
      description: legalData.metaDescription,
      type: "website",
      locale: "en_IN",
      url: `https://stvivekanandschool.com/${resolvedParams.slug}`,
      siteName: "St. Vivekanand School",
    },
    twitter: {
      card: "summary",
      title: `${legalData.title} | St. Vivekanand School Bikaner`,
      description: legalData.metaDescription,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default function LegalSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

