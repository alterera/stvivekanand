import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Trophy } from "lucide-react";
import { getSportsData } from "@/lib/queries";
import { Sport } from "@/types/index";
import { Metadata } from "next";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { pageMetadata, truncate } from "@/lib/seo";
import { SportsHeroCarousel } from "@/components/academics/SportsHeroCarousel";
import {
  GLIMPSE_IMAGES,
  GLORY_MOMENTS,
  HERO_CAROUSEL_IMAGES,
  SPORTS_ACHIEVEMENTS,
} from "@/components/academics/sports-hub-data";

export async function generateMetadata(): Promise<Metadata> {
  const sportsData: Sport[] = await getSportsData();
  const names = sportsData.map((sport) => sport.title).filter(Boolean).join(", ");

  return pageMetadata({
    title: "Sports @ SVS",
    description: truncate(
      names
        ? `Sports at St. Vivekanand School — ${names} and more on our Bikaner campus.`
        : "Discover the sports program at St. Vivekanand School: facilities, coaching, teams, and achievements.",
    ),
    path: "/academics/sports",
    imageAlt: "St. Vivekanand School Sports",
  });
}

const SportsPage = async () => {
  const sportsData: Sport[] = await getSportsData();

  const heroImages = HERO_CAROUSEL_IMAGES.map((img) => ({ ...img }));

  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F9]">
      <Image
        src="/assets/patterns/hand-curv.png"
        height={100}
        width={100}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-24 hidden opacity-50 md:block"
      />
      <div
        className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full bg-[#85193C]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-32 -left-16 h-56 w-56 rounded-full bg-[#0D3658]/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-15 md:px-12 md:pt-20">
        <DynamicBreadcrumb />

        <header className="mt-6 text-center md:mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#85193C]">
            St. Vivekanand School
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-[#0D3658] md:text-5xl">
            Sports <span className="text-[#85193C]">@SVS</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 md:text-lg">
            The largest gamut of in-house sports facilities for any school, right in the city centre.
          </p>
        </header>

        <div className="mt-10 md:mt-12">
          <SportsHeroCarousel images={heroImages} />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SPORTS_ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden bg-yellow-50/50 p-6 ring-1 ring-gray-200"
            >
              <div className="absolute right-4 top-4 opacity-10 transition-opacity group-hover:opacity-20">
                <Trophy className="h-16 w-16 text-[#85193C]" aria-hidden="true" />
              </div>
              <p className="text-3xl font-black text-[#85193C]">{item.placement}</p>
              {item.detail && (
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#457B9D]">
                  {item.detail}
                </p>
              )}
              <p className="mt-3 text-sm leading-snug text-[#1D3557] md:text-base">
                {item.headline}
              </p>
            </div>
          ))}
        </div>

        <section className="mt-16 md:mt-20">
          <h2 className="text-center text-2xl font-bold text-[#0D3658] md:text-3xl">
            A glimpse into SVS sports
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-gray-600">
            Training grounds, courts, and fitness spaces where our athletes grow every day.
          </p>
          <div className="mt-8 grid auto-rows-[140px] grid-cols-2 gap-3 md:auto-rows-[180px] md:grid-cols-4 md:gap-4">
            {GLIMPSE_IMAGES.map((item) => (
              <div
                key={item.src}
                className={`relative overflow-hidden rounded-xl shadow-md ring-1 ring-[#0D3658]/10 ${item.className}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 md:mt-20">
          <h2 className="text-center text-2xl font-bold text-[#0D3658] md:text-3xl">
            Moments of Glory on the Field
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {GLORY_MOMENTS.map((moment) => (
              <article
                key={moment.title}
                className="overflow-hidden rounded-md bg-white ring-1 ring-gray-200"
              >
                <div className="relative h-48 w-full md:h-52">
                  <Image
                    src={moment.image}
                    alt={moment.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#1D3557]">{moment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{moment.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-2xl bg-[#0D3658] p-8 md:mt-20 md:p-10">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Sports on campus</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/80 md:text-base">
            Explore each facility, coaching programme, and FAQ for every sport we offer.
          </p>
          <ul className="mt-8 divide-y divide-white/15">
            {sportsData.map((sport) => {
              const slug = sport.sportId?.current;
              if (!slug) return null;
              return (
                <li key={sport._id}>
                  <Link
                    href={`/academics/sports/${slug}`}
                    className="group flex items-center justify-between gap-4 py-4 text-white transition-colors hover:text-[#f4c4d4]"
                  >
                    <span className="text-base font-semibold md:text-lg">{sport.title}</span>
                    <ChevronRight
                      className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
          {sportsData.length === 0 && (
            <p className="mt-4 text-center text-white/70">No sports listed at the moment.</p>
          )}
        </section>
      </div>
    </section>
  );
};

export default SportsPage;
