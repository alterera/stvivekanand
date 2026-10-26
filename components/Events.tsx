import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { ArrowRight, CalendarDays, Pin } from "lucide-react";
import { Button } from "./ui/button";
import { sanityFetch } from "@/lib/sanity";
import { HOME_EVENTS_QUERY, HOME_NOTICES_QUERY } from "@/lib/queries";
import { getEventDateIso, parseEventDate } from "@/lib/eventDate";

interface EventListItem {
  _id: string;
  title: string;
  slug: string;
  eventDate?: string;
  _createdAt: string;
}

interface NoticeListItem {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
}

const formatNoticeDate = (value: string) =>
  new Date(value).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });

function EventDateBadge({ iso }: { iso: string }) {
  const { day, month } = parseEventDate(iso);
  return (
    <div
      className="flex shrink-0 flex-col items-center justify-center rounded-md border-2 border-[#85193C]/20 bg-[#fff9f5] px-3 py-2 text-center min-w-[4.25rem]"
      aria-hidden="true"
    >
      <span className="text-2xl font-bold leading-none text-[#85193C]">{day}</span>
      <span className="mt-1 text-xs font-bold tracking-wide text-[#1D3557]">{month}</span>
    </div>
  );
}

const Events = async () => {
  const [events, notices] = await Promise.all([
    sanityFetch<EventListItem[]>({ query: HOME_EVENTS_QUERY, tags: ["event"] }).catch(
      () => [] as EventListItem[],
    ),
    sanityFetch<NoticeListItem[]>({ query: HOME_NOTICES_QUERY, tags: ["notice"] }).catch(
      () => [] as NoticeListItem[],
    ),
  ]);

  return (
    <motion.section
      className="relative w-full bg-[#F9F9F9] py-16 md:py-20"
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
          <h2 className="text-3xl font-bold text-[#1D3557] md:text-4xl">Notices & Events</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Official circulars and upcoming celebrations from life at St. Vivekanand School.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-1 overflow-hidden rounded-md bg-white ring-1 ring-[#85193C]/15">
            <div className="bg-gradient-to-r from-[#85193C] to-[#6d1530] px-6 py-5 md:px-8">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm"
                  aria-hidden="true"
                >
                  <Pin className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h3 className="text-xl font-bold text-white">Notice Board</h3>
                  <p className="text-xs text-white/80">Official school circulars</p>
                </div>
              </div>
            </div>

            <div className="bg-[#faf8f6] p-4 md:p-6">
              {notices.length > 0 ? (
                <ul className="space-y-3">
                  {notices.map((notice, index) => (
                    <motion.li
                      key={notice._id}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`/notices/${notice.slug}`}
                        className="group flex gap-4 rounded-xl border border-[#85193C]/10 bg-white p-4 shadow-sm transition-all hover:border-[#85193C]/30"
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#85193C]/10 text-sm font-bold text-[#85193C]"
                          aria-hidden="true"
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="font-semibold leading-snug text-[#1D3557] group-hover:text-[#85193C]">
                            {notice.title}
                          </span>
                          <time
                            dateTime={notice.publishedAt}
                            className="mt-1 block text-xs font-medium text-gray-500"
                          >
                            {formatNoticeDate(notice.publishedAt)}
                          </time>
                        </div>
                        <ArrowRight
                          className="mt-1 h-4 w-4 shrink-0 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-[#85193C]"
                          aria-hidden="true"
                        />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="py-8 text-center text-sm text-gray-500">No notices at the moment.</p>
              )}

              <div className="mt-6 border-t border-[#85193C]/10 pt-4">
                <Link
                  href="/notices"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#85193C] transition-colors hover:text-[#6d1530]"
                >
                  View all notices
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="order-2 overflow-hidden rounded-md bg-white p-6 ring-1 ring-gray-200 md:p-8">
            <div className="mb-6 flex items-center gap-2 border-b border-gray-200 pb-4">
              <CalendarDays className="h-5 w-5 text-[#85193C]" aria-hidden="true" />
              <h3 className="text-xl font-bold text-[#1D3557]">School Events</h3>
            </div>

            {events.length > 0 ? (
              <ul className="divide-y divide-gray-100">
                {events.map((event, index) => {
                  const dateIso = getEventDateIso(event);
                  const { time, year } = parseEventDate(dateIso);
                  return (
                    <motion.li
                      key={event._id}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`/events/${event.slug}`}
                        className="flex gap-4 py-4 transition-opacity hover:opacity-90"
                      >
                        <EventDateBadge iso={dateIso} />
                        <div className="min-w-0 flex-1 pt-0.5">
                          <p className="font-semibold leading-snug text-[#1D3557] transition-colors group-hover:text-[#85193C]">
                            {event.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            <time dateTime={dateIso}>
                              {time} · {year}
                            </time>
                          </p>
                        </div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            ) : (
              <p className="py-8 text-center text-sm text-gray-500">No events to display at the moment.</p>
            )}

            <div className="mt-6">
              <Button
                asChild
                className="bg-[#85193C] px-6 py-2 text-base font-semibold text-white hover:bg-[#85193C]/90"
              >
                <Link href="/events">View all events</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Events;
