// app/events/page.tsx
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { ALL_EVENTS_QUERY } from "@/lib/queries";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

interface EventListItem {
  title: string;
  slug: { current: string };
  subtitle?: string;
  description: string;
  images: { asset: { _id: string; url: string } }[];
}

export default async function EventsPage() {
  const events: EventListItem[] = await sanityClient.fetch(ALL_EVENTS_QUERY);

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <DynamicBreadcrumb />
        <div className="py-5">
          <h1 className="text-3xl font-bold text-center pb-2">
            Events & Activities
          </h1>
          <p className="text-center text-sm">
            Explore our school events, celebrations, and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {events.map((event) => {
            const thumbnailUrl =
              event.images?.[0]?.asset?.url ?? "/assets/background/new-1.jpg";
            return (
              <Link key={event.slug.current} href={`/events/${event.slug.current}`}>
                <div className="rounded-lg shadow-md overflow-hidden cursor-pointer bg-[#0D3658] text-white">
                  <Image
                    src={thumbnailUrl}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                    {event.subtitle && (
                      <p className="text-sm text-gray-200 mb-1">
                        {event.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-gray-300 line-clamp-2">
                      {event.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {events.length === 0 && (
          <div className="text-center py-16 text-gray-500">
            <p>No events to display at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
}
