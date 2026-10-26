import Image from "next/image";
import Link from "next/link";
import type { PortableTextBlock } from "next-sanity";
import { ArrowRight } from "lucide-react";
import { FacilityPortableText } from "./FacilityPortableText";

export type AcademicsSection = {
  _id: string;
  title: string;
  description?: PortableTextBlock[];
  sectionSlug: string;
  imageUrl?: string;
};

const FALLBACK_IMAGE = "/assets/academics/science.webp";

/** Subtle alternating tints on the whole card — not split by column */
const rowSurfaces = ["bg-white", "bg-[#FAF8F6]"];

export function AcademicsFacilityRows({ sections }: { sections: AcademicsSection[] }) {
  if (sections.length === 0) {
    return (
      <p className="py-12 text-center text-gray-600">
        Academic facilities will appear here once they are published in the CMS.
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      {sections.map((section, index) => {
        const imageLeft = index % 2 === 0;
        const imageUrl = section.imageUrl || FALLBACK_IMAGE;
        const surface = rowSurfaces[index % rowSurfaces.length];

        return (
          <article
            key={section._id}
            className={`overflow-hidden ${surface}`}
          >
            <div className="grid grid-cols-1 items-stretch lg:grid-cols-2">
              <div
                className={`relative min-h-[240px] w-full lg:min-h-[320px] ${
                  imageLeft ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <Image
                  src={imageUrl}
                  alt={section.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div
                className={`flex flex-col justify-center px-6 py-8 md:px-10 md:py-10 ${
                  imageLeft ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <h2 className="text-2xl font-bold text-[#1D3557] md:text-3xl">{section.title}</h2>
                {section.description && section.description.length > 0 && (
                  <div className="mt-4 text-gray-600">
                    <FacilityPortableText value={section.description} />
                  </div>
                )}
                <Link
                  href={`/academics/${section.sectionSlug}`}
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-[#85193C] transition-all hover:gap-3"
                >
                  Explore {section.title}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
