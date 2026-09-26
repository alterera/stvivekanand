import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { PortableTextBlock } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { sanityFetch } from "@/lib/sanity";
import { LEGAL_PAGE_QUERY, getSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { PortableTextComponents } from "@/components/PortableTextComponent";

interface LegalPageData {
  title: string;
  metaDescription?: string;
  content: PortableTextBlock[];
  lastUpdated: string;
  effectiveDate: string;
  pageType: string;
}

type Props = { params: Promise<{ slug: string }> };

function getLegalPage(slug: string) {
  return sanityFetch<LegalPageData | null>({
    query: LEGAL_PAGE_QUERY,
    params: { slug },
    tags: ["legal"],
  });
}

const formatDate = (value: string) =>
  new Date(value).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" });

export async function generateStaticParams() {
  const slugs = await getSlugs("legal");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await getLegalPage(slug);

  if (!page) {
    return notFoundMetadata("Page Not Found", "The requested page could not be found.");
  }

  return pageMetadata({
    title: page.title,
    description: truncate(page.metaDescription || `${page.title} of St. Vivekanand School, Bikaner.`),
    path: `/${slug}`,
  });
}

export default async function LegalPage({ params }: Props) {
  const { slug } = await params;
  const page = await getLegalPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="bg-gray-50">
      <section className="py-20 w-full px-4 md:px-12 max-w-7xl mx-auto">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            {page.title}
          </h1>

          <div className="border-b border-gray-200 pb-4 mb-8">
            <div className="flex flex-row md:justify-between gap-4 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Effective Date:</span> {formatDate(page.effectiveDate)}
              </p>
              <p>
                <span className="font-semibold">Last Updated:</span> {formatDate(page.lastUpdated)}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <PortableText value={page.content} components={PortableTextComponents} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600 text-center">
            <p>
              For any questions or concerns regarding this document, please contact us at{" "}
              <Link href="/contact-us" className="text-[#85193C] hover:underline">
                our contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
