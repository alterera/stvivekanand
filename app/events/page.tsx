import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { sanityFetch } from "@/lib/sanity";
import { ALL_EVENTS_QUERY } from "@/lib/queries";
import { getEventDateIso, getEventYear, parseEventDate } from "@/lib/eventDate";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { EventsYearFilter } from "@/components/events/EventsYearFilter";

interface EventListItem {
  title: string;
  slug: { current: string };
  description: string;
  eventDate?: string;
  _createdAt?: string;
  images: { asset: { _id: string; url: string } }[];
}

type Props = { searchParams: Promise<{ year?: string }> };

export default async function EventsPage({ searchParams }: Props) {
  const { year: yearParam } = await searchParams;
  const events = await sanityFetch<EventListItem[]>({ query: ALL_EVENTS_QUERY, tags: ["event"] });

  const years = Array.from(
    new Set(events.map((event) => getEventYear(getEventDateIso(event)))),
  ).sort((a, b) => b - a);

  const parsedYear = yearParam ? Number.parseInt(yearParam, 10) : undefined;
  const selectedYear =
    parsedYear && years.includes(parsedYear) ? parsedYear : years[0] ?? new Date().getFullYear();

  const filteredEvents = events.filter(
    (event) => getEventYear(getEventDateIso(event)) === selectedYear,
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F9] py-20">
      <Image
        src="/assets/patterns/dots.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={100}
        className="pointer-events-none absolute top-16 right-8 opacity-40"
      />
      <div
        className="pointer-events-none absolute -left-24 top-40 h-64 w-64 rounded-full bg-[#85193C]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-20 h-48 w-48 rounded-full bg-[#1D3557]/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <DynamicBreadcrumb />
        <div className="mb-10 mt-6 text-center">
          <h1 className="text-3xl font-bold text-[#1D3557] md:text-4xl">Events & Activities</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Explore our school events, celebrations, and activities.
          </p>
        </div>

        <div className="mb-10">
          <Suspense fallback={null}>
            <EventsYearFilter years={years} selectedYear={selectedYear} />
          </Suspense>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event, index) => {
            const thumbnailUrl =
              event.images?.[0]?.asset?.url ?? "/assets/background/new-1.jpg";
            const dateIso = getEventDateIso(event);
            const { day, month, time, year } = parseEventDate(dateIso);

            return (
              <Link
                key={event.slug.current}
                href={`/events/${event.slug.current}`}
                className="group overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden bg-[#0D3658]">
                  <Image
                    src={thumbnailUrl}
                    alt={event.title}
                    width={400}
                    height={250}
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute left-4 top-4 flex flex-col items-center rounded-md border-2 border-white/30 bg-[#fff9f5]/95 px-3 py-2 text-center"
                    aria-hidden="true"
                  >
                    <span className="text-xl font-bold leading-none text-[#85193C]">{day}</span>
                    <span className="mt-1 text-xs font-bold text-[#1D3557]">{month}</span>
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-bold text-[#1D3557] group-hover:text-[#85193C]">
                    {event.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    <time dateTime={dateIso}>
                      {time} · {year}
                    </time>
                  </p>
                  <p className="mt-3 line-clamp-2 text-sm text-gray-600">{event.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="py-16 text-center text-gray-500">
            <p>No events to display for {selectedYear}.</p>
          </div>
        )}
      </div>
    </section>
  );
}
