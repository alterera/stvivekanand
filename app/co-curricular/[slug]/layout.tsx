import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity";
import { CURRICULAR_QUERY } from "@/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

interface CurricularImage {
  asset: {
    url: string;
  };
}

interface CurricularData {
  title: string;
  subtitle?: string;
  description: string;
  image?: CurricularImage;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const curricularData: CurricularData = await sanityClient.fetch(CURRICULAR_QUERY, { slug });

  if (!curricularData) {
    return {
      title: "Activity Not Found | St. Vivekanand School Bikaner",
      description: "The requested co-curricular activity could not be found.",
      robots: { index: false, follow: false },
    };
  }

  const title = `${curricularData.title} | St. Vivekanand School Bikaner`;
  const description = (curricularData.subtitle || curricularData.description || "").slice(0, 160);
  const imageUrl = curricularData.image?.asset.url;

  return {
    title,
    description,
    keywords: [
      curricularData.title.toLowerCase(),
      "co-curricular",
      "school activities",
      "student development",
      "best school in bikaner",
    ],
    alternates: {
      canonical: `https://stvivekanandschool.com/co-curricular/${slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      locale: "en_IN",
      siteName: "St. Vivekanand School",
      images: imageUrl
        ? [
            {
              url: imageUrl,
              width: 1200,
              height: 630,
              alt: curricularData.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
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

export default function CurricularSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


