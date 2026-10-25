import Image from "next/image";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { AcademicsFacilityRows } from "@/components/academics/AcademicsFacilityRows";
import { AcademicsCareerCta } from "@/components/academics/AcademicsCareerCta";
import { sanityFetch } from "@/lib/sanity";
import { ALL_SECTIONS_QUERY } from "@/lib/queries";
import type { AcademicsSection } from "@/components/academics/AcademicsFacilityRows";

export default async function AcademicsHubPage() {
  const sections = await sanityFetch<AcademicsSection[]>({
    query: ALL_SECTIONS_QUERY,
    tags: ["section"],
  }).catch(() => [] as AcademicsSection[]);

  const heroImage = sections[0]?.imageUrl || "/assets/academics/library.webp";

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#fff9f5] py-16 md:py-20">
        <Image
          src="/assets/patterns/tri-dots.png"
          alt=""
          aria-hidden="true"
          height={100}
          width={140}
          className="pointer-events-none absolute top-16 -right-5 rotate-90 opacity-60"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <DynamicBreadcrumb />
          <div className="mt-6 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h1 className="text-3xl font-bold text-[#1D3557] md:text-4xl lg:text-5xl">
                Academics at St. Vivekanand School
              </h1>
              <p className="mt-5 text-base leading-relaxed text-gray-700 md:text-lg">
                The central building consists of 50+ well-lit, fully equipped classrooms — many
                transformed into digital learning spaces. Our labs, library, and specialised
                programmes are designed for hands-on discovery from foundational years through
                senior secondary.
              </p>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={heroImage}
                alt="Academic facilities at St. Vivekanand School"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full bg-[#F5F3F0] py-16 md:py-20">
        <Image
          src="/assets/patterns/dots.png"
          alt=""
          aria-hidden="true"
          height={100}
          width={100}
          className="pointer-events-none absolute bottom-12 left-6 hidden opacity-30 md:block"
        />
        <div className="relative mx-auto max-w-7xl px-6 md:px-12">
          <AcademicsFacilityRows sections={sections} />
        </div>
      </section>

      <AcademicsCareerCta />
    </>
  );
}
