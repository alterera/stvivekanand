import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity";
import { EVENT_QUERY, getSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import EventPost from "@/components/EventPost";
import AdmissionForm from "@/components/widgets/AdmissionForm";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import JsonLd from "@/components/JsonLd";

interface EventData {
  title: string;
  subtitle?: string;
  description?: string;
  _createdAt?: string;
  _updatedAt?: string;
  images?: { asset: { url: string } }[];
}

type Props = { params: Promise<{ slug: string }> };

function getEvent(slug: string) {
  return sanityFetch<EventData | null>({ query: EVENT_QUERY, params: { slug }, tags: ["event"] });
}

function describe(event: EventData) {
  return truncate(event.description || event.subtitle || event.title);
}

export async function generateStaticParams() {
  const slugs = await getSlugs("event");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    return notFoundMetadata("Event Not Found", "The requested event page could not be found.");
  }

  return pageMetadata({
    title: event.title,
    description: describe(event),
    path: `/events/${slug}`,
    image: event.images?.[0]?.asset?.url,
    imageAlt: event.title,
    type: "article",
  });
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = await getEvent(slug);

  if (!event) {
    notFound();
  }

  return (
    <section className="w-full px-4 md:px-12 py-20">
      <JsonLd
        data={articleJsonLd({
          headline: event.title,
          description: describe(event),
          path: `/events/${slug}`,
          image: event.images?.[0]?.asset?.url,
          datePublished: event._createdAt,
          dateModified: event._updatedAt,
        })}
      />
      <DynamicBreadcrumb currentLabel={event.title} />

      <div className="my-5">
        <h1 className="text-3xl text-[#0D3658] font-bold text-center mb-2">{event.title}</h1>
        {event.subtitle && (
          <p className="text-sm text-gray-500 text-center mb-8">{event.subtitle}</p>
        )}
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative gap-5">
        <div className="w-full md:w-3/4">
          <EventPost
            title={event.title}
            description={event.description ?? ""}
            images={event.images ?? []}
          />
        </div>
        <div className="w-full md:w-1/4 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
}
