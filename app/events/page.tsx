import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { ALL_EVENTS_QUERY } from "@/lib/queries";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";

interface EventListItem {
  title: string;
  slug: { current: string };
  subtitle?: string;
  description: string;
  images: { asset: { _id: string; url: string } }[];
}

export default async function EventsPage() {
  const events = await sanityFetch<EventListItem[]>({ query: ALL_EVENTS_QUERY, tags: ["event"] });

  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />
        <div className="text-center mb-12 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Events & Activities
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore our school events, celebrations, and activities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => {
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
                    loading={index < 3 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
