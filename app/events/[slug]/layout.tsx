import { Metadata } from "next";
import { sanityClient } from "@/lib/sanity";
import { EVENT_QUERY } from "@/lib/queries";

interface Props {
  params: Promise<{ slug: string }>;
}

interface EventImage {
  asset: {
    url: string;
  };
}

interface EventData {
  title: string;
  subtitle: string;
  description: string;
  images: EventImage[];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const eventData: EventData = await sanityClient.fetch(EVENT_QUERY, { slug: resolvedParams.slug });

  if (!eventData) {
    return {
      title: "Event Not Found | St. Vivekanand School Bikaner",
      description: "The requested event page could not be found.",
    };
  }

  return {
    title: `${eventData.title} | St. Vivekanand School Bikaner`,
    description: eventData.subtitle || eventData.description.slice(0, 160),
    keywords: [
      eventData.title.toLowerCase(),
      "school event",
      "school activity",
      "best school in bikaner",
      "student event",
      "school function",
      "educational event"
    ],
    alternates: {
      canonical: `https://stvivekanandschool.com/events/${params}`,
    },
    openGraph: {
      title: `${eventData.title} | St. Vivekanand School Bikaner`,
      description: eventData.subtitle || eventData.description.slice(0, 160),
      type: "article",
      locale: "en_IN",
      siteName: "St. Vivekanand School",
      images: eventData.images?.map((image: EventImage) => ({
        url: image.asset.url,
        width: 1200,
        height: 630,
        alt: eventData.title,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${eventData.title} | St. Vivekanand School Bikaner`,
      description: eventData.subtitle || eventData.description.slice(0, 160),
      images: eventData.images?.map((image: EventImage) => image.asset.url),
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

export default function EventSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 