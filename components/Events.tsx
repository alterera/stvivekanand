import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { sanityFetch } from "@/lib/sanity";
import { HOME_EVENTS_QUERY } from "@/lib/queries";

const FALLBACK_IMAGE = "/assets/background/new-1.jpg";

interface EventCard {
  _id: string;
  title: string;
  subtitle?: string;
  imageUrl?: string;
  slug: string;
}

function EventCardItem({ event, index }: { event: EventCard; index: number }) {
  const imageUrl = event.imageUrl || FALLBACK_IMAGE;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <Link href={`/events/${event.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading={index < 4 ? "eager" : "lazy"}
          />
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-medium text-gray-500">
            <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            School Event
          </p>
          <h3 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-[#1D3557] transition-colors group-hover:text-[#85193C]">
            {event.title}
          </h3>
          {event.subtitle && (
            <p className="mb-4 line-clamp-2 flex-1 text-sm leading-relaxed text-gray-600">
              {event.subtitle}
            </p>
          )}
          <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-[#85193C] transition-all group-hover:gap-2">
            Read more
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}

const Events = async () => {
  const events = await sanityFetch<EventCard[]>({ query: HOME_EVENTS_QUERY, tags: ["event"] }).catch(
    () => [] as EventCard[],
  );

  return (
    <motion.section
      className="relative w-full bg-white py-16 md:py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Image
        src="/assets/patterns/dots.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={100}
        className="pointer-events-none absolute top-12 right-6 hidden opacity-40 md:block"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-bold text-[#1D3557] md:text-4xl">Events & Activities</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Celebrations, competitions, and milestones from life at St. Vivekanand School.
          </p>
        </div>

        {events.length > 0 ? (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((event, index) => (
              <li key={event._id} className="h-full">
                <EventCardItem event={event} index={index} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-12 text-center text-gray-500">No events to display at the moment.</p>
        )}

        <div className="mt-10 flex justify-center md:mt-12">
          <Button
            asChild
            className="bg-[#85193C] px-6 py-2 text-base font-semibold text-white hover:bg-[#85193C]/90"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Events;
