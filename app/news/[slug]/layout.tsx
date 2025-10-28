import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity";
import { BLOG_QUERY } from "@/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

interface NewsImage {
  asset: {
    url: string;
  };
}

interface NewsData {
  title: string;
  article: string;
  featuredImage: NewsImage;
  publishedAt: string;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const newsData: NewsData = await sanityClient.fetch(BLOG_QUERY, { slug: resolvedParams.slug });

  if (!newsData) {
    return {
      title: "News Not Found | St. Vivekanand School Bikaner",
      description: "The requested news article could not be found.",
    };
  }

  return {
    title: `${newsData.title} | St. Vivekanand School Bikaner`,
    description: newsData.article.slice(0, 160),
    alternates: {
      canonical: `https://stvivekanandschool.com/news/${resolvedParams.slug}`,
    },
    keywords: [
      newsData.title.toLowerCase(),
      "school news",
      "school updates",
      "school announcements",
      "best school in bikaner",
      "education news",
      "school blog",
      "school article"
    ],
    openGraph: {
      title: `${newsData.title} | St. Vivekanand School Bikaner`,
      description: newsData.article.slice(0, 160),
      type: "article",
      locale: "en_IN",
      siteName: "St. Vivekanand School",
      publishedTime: newsData.publishedAt,
      images: newsData.featuredImage ? [{
        url: newsData.featuredImage.asset.url,
        width: 1200,
        height: 630,
        alt: newsData.title,
      }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${newsData.title} | St. Vivekanand School Bikaner`,
      description: newsData.article.slice(0, 160),
      images: newsData.featuredImage ? [newsData.featuredImage.asset.url] : undefined,
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

export default function NewsSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 