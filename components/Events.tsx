import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import { sanityFetch } from "@/lib/sanity";
import { HOME_EVENTS_QUERY } from "@/lib/queries";

interface EventCard {
  _id: string;
  title: string;
  imageUrl?: string;
  slug: string;
}

const Events = async () => {
  const events = await sanityFetch<EventCard[]>({ query: HOME_EVENTS_QUERY, tags: ["event"] }).catch(
    () => [] as EventCard[],
  );

  return (
    <motion.section
      className="relative w-full bg-white py-12"
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
        className="hidden md:flex absolute top-16"
      />
      <Image
        src="/assets/patterns/hilly.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={100}
        className="absolute bottom-16 right-0"
      />
      <Image
        src="/assets/patterns/3-circle.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={180}
        className="absolute bottom-16 left-10 -rotate-12"
      />
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <h2 className="relative text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-2">
          Events & Activities
          <Image
            src="/assets/patterns/curvy.png"
            alt=""
            aria-hidden="true"
            height={100}
            width={120}
            className="absolute top-10 left-[55%]"
          />
        </h2>
        <p className="text-center mb-10">
          Celebrations, competitions, and milestones from life at St. Vivekanand School.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 xl:px-4">
          {events.map((event, index) => (
            <div
              key={event._id}
              className="relative h-[200px] md:h-[250px] overflow-hidden group rounded-lg shadow-lg"
            >
              {event.imageUrl && (
                <Image
                  src={event.imageUrl}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              )}

              <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60" />

              <motion.div
                className="absolute inset-0 p-4 flex flex-col justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg md:text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  {event.title}
                </h3>
                <Button
                  asChild
                  variant="outline"
                  className="w-fit bg-transparent text-white border-white hover:bg-white hover:text-[#1D3557]"
                >
                  <Link href={`/events/${event.slug}`} aria-label={`Read more about ${event.title}`}>
                    Read More
                  </Link>
                </Button>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            asChild
            variant="destructive"
            className="text-white bg-[#7B243D] hover:bg-[#E63946]/90 px-6 py-2 text-base z-10"
          >
            <Link href="/events">View All Events</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Events;
