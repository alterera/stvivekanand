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
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
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

        <header className="mt-6 mb-10 text-center max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">{event.title}</h1>
          {event.subtitle && (
            <p className="text-gray-600 mt-4">{event.subtitle}</p>
          )}
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-3/4">
            <EventPost
              title={event.title}
              description={event.description ?? ""}
              images={event.images ?? []}
            />
          </div>
          <aside className="w-full lg:w-1/4">
            <div className="p-5 bg-white border border-gray-200 shadow-sm rounded-lg lg:sticky lg:top-24">
              <AdmissionForm />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
