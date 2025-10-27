import React from "react";
import { sanityClient } from "@/lib/sanity";
import { LEGAL_PAGE_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import { PortableTextBlock } from "next-sanity";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@/components/PortableTextComponent";
import Link from "next/link";

interface LegalPageData {
  title: string;
  content: PortableTextBlock[];
  lastUpdated: string;
  effectiveDate: string;
  pageType: string;
}

type Params = Promise<{ slug: string }>;

const Page = async ({ params }: { params: Params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const legalData: LegalPageData = await sanityClient.fetch(LEGAL_PAGE_QUERY, { 
    slug 
  });

  if (!legalData) {
    notFound();
  }

  // Format the dates on the server side
  const formattedLastUpdated = new Date(legalData.lastUpdated).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const formattedEffectiveDate = new Date(legalData.effectiveDate).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gray-50">
      <section className="py-20 w-full px-4 md:px-12 max-w-7xl mx-auto">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900">
            {legalData.title}
          </h1>
          
          <div className="border-b border-gray-200 pb-4 mb-8">
            <div className="flex flex-row md:justify-between gap-4 text-sm text-gray-600">
              <p>
                <span className="font-semibold">Effective Date:</span> {formattedEffectiveDate}
              </p>
              <p>
                <span className="font-semibold">Last Updated:</span> {formattedLastUpdated}
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <PortableText value={legalData.content} components={PortableTextComponents} />
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
};

export default Page;

