import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity";
import { EVENT_QUERY, getSlugs } from "@/lib/queries";
import { getEventDateIso, parseEventDate } from "@/lib/eventDate";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import EventPost from "@/components/EventPost";
import AdmissionFormSidebar from "@/components/widgets/AdmissionFormSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import JsonLd from "@/components/JsonLd";

interface EventData {
  title: string;
  description?: string;
  eventDate?: string;
  _createdAt?: string;
  _updatedAt?: string;
  images?: { asset: { url: string } }[];
}

type Props = { params: Promise<{ slug: string }> };

function getEvent(slug: string) {
  return sanityFetch<EventData | null>({ query: EVENT_QUERY, params: { slug }, tags: ["event"] });
}

function describe(event: EventData) {
  return truncate(event.description || event.title);
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

  const dateIso = getEventDateIso(event);
  const { day, month, time, year } = parseEventDate(dateIso);

  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F9] py-16 md:py-20">
      <Image
        src="/assets/patterns/tri-dots.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={140}
        className="pointer-events-none absolute top-20 -right-4 rotate-90 opacity-50"
      />
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-[#85193C]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-tl-[4rem] bg-[#1D3557]/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <JsonLd
          data={articleJsonLd({
            headline: event.title,
            description: describe(event),
            path: `/events/${slug}`,
            image: event.images?.[0]?.asset?.url,
            datePublished: dateIso,
            dateModified: event._updatedAt,
          })}
        />
        <DynamicBreadcrumb currentLabel={event.title} />

        <header className="mx-auto mt-8 mb-10 max-w-4xl text-center">
          <div
            className="mx-auto mb-4 inline-flex flex-col items-center rounded-lg border-2 border-[#85193C]/25 bg-[#fff9f5] px-5 py-3"
            aria-hidden="true"
          >
            <span className="text-3xl font-bold leading-none text-[#85193C]">{day}</span>
            <span className="mt-1 text-sm font-bold tracking-wide text-[#1D3557]">{month}</span>
          </div>
          <h1 className="text-3xl font-bold text-[#1D3557] md:text-4xl">{event.title}</h1>
          <p className="mt-3 text-gray-600">
            <time dateTime={dateIso}>
              {time} · {year}
            </time>
          </p>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-2/3">
            <EventPost
              title={event.title}
              description={event.description ?? ""}
              images={event.images ?? []}
            />
          </div>
          <aside className="w-full lg:w-1/3">
            <AdmissionFormSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}
