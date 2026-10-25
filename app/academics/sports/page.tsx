import Image from "next/image";
import Link from "next/link";
import { getSportsData } from "@/lib/queries";
import { Sport } from "@/types/index";
import { Metadata } from "next";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { pageMetadata, truncate } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const sportsData: Sport[] = await getSportsData();
  const names = sportsData.map((sport) => sport.title).filter(Boolean).join(", ");

  return pageMetadata({
    title: "Sports Facilities",
    description: truncate(
      names
        ? `Explore our sports facilities including ${names} at St. Vivekanand School, Bikaner.`
        : "Discover the sports program at St. Vivekanand School: facilities, coaching, teams, and achievements.",
    ),
    path: "/academics/sports",
    imageAlt: "St. Vivekanand School Sports",
  });
}

const SportsPage = async () => {
  const sportsData: Sport[] = await getSportsData();

  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F9] py-20">
      <Image
        src="/assets/patterns/hand-curv.png"
        height={100}
        width={100}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -top-2 left-0 hidden md:block"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <DynamicBreadcrumb />

        <div className="container mx-auto pt-4">
          <h1 className="mb-2 text-center text-4xl font-bold text-[#0D3658]">Sports Facilities</h1>
          <p className="mb-10 text-center text-gray-600">
            The largest gamut of in-house sports facilities for any school, right in the city centre
          </p>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sportsData.map((sport) => {
              const slug = sport.sportId?.current;
              if (!slug) return null;

              const thumbnail =
                sport.images?.[0]?.asset?.url ?? "/assets/sports/sports-2.webp";

              return (
                <Link
                  key={sport._id}
                  href={`/academics/sports/${slug}`}
                  className="group overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-shadow hover:shadow-lg"
                >
                  <div className="relative h-52 overflow-hidden bg-[#0D3658]">
                    <Image
                      src={thumbnail}
                      alt={sport.title}
                      width={400}
                      height={260}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-xl font-semibold text-[#0D3658] group-hover:text-[#85193C]">
                      {sport.title}
                    </h2>
                    <span className="mt-2 inline-block text-sm font-semibold text-[#85193C]">
                      View details →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {sportsData.length === 0 && (
            <p className="py-12 text-center text-gray-500">No sports listed at the moment.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SportsPage;
