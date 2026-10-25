import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { toPlainText, type PortableTextBlock } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { ArrowLeft } from "lucide-react";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { PortableTextComponents } from "@/components/PortableTextComponent";
import { sanityFetch } from "@/lib/sanity";
import { SECTION_BY_SLUG_QUERY, getSectionSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";

type SectionData = {
  _id: string;
  title: string;
  description?: PortableTextBlock[];
  sectionSlug: string;
  imageUrl?: string;
  _updatedAt?: string;
};

type Props = { params: Promise<{ slug: string }> };

function getSection(slug: string) {
  return sanityFetch<SectionData | null>({
    query: SECTION_BY_SLUG_QUERY,
    params: { slug },
    tags: ["section"],
  });
}

function describe(section: SectionData) {
  if (!section.description?.length) return section.title;
  return truncate(toPlainText(section.description) || section.title);
}

export async function generateStaticParams() {
  const slugs = await getSectionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = await getSection(slug);

  if (!section) {
    return notFoundMetadata("Facility Not Found", "The requested academic facility could not be found.");
  }

  return pageMetadata({
    title: section.title,
    description: describe(section),
    path: `/academics/${slug}`,
    image: section.imageUrl,
    imageAlt: section.title,
  });
}

export default async function AcademicsFacilityPage({ params }: Props) {
  const { slug } = await params;
  const section = await getSection(slug);

  if (!section) {
    notFound();
  }

  const imageUrl = section.imageUrl || "/assets/academics/science.webp";

  return (
    <section className="w-full bg-[#F9F9F9] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <DynamicBreadcrumb currentLabel={section.title} />

        <header className="mt-8 max-w-4xl">
          <h1 className="text-3xl font-bold text-[#1D3557] md:text-4xl">{section.title}</h1>
        </header>

        <div className="relative mt-8 aspect-[21/9] w-full max-w-5xl overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={imageUrl}
            alt={section.title}
            fill
            sizes="(max-width: 1280px) 100vw, 1024px"
            className="object-cover"
            priority
          />
        </div>

        {section.description && section.description.length > 0 && (
          <article className="prose prose-neutral mt-10 max-w-3xl rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            <PortableText value={section.description} components={PortableTextComponents} />
          </article>
        )}
      </div>
    </section>
  );
}
