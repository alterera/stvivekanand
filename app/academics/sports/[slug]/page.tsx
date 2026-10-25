import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, toPlainText } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import { SPORT_BY_SLUG_QUERY, getSportSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { faqJsonLd } from "@/lib/jsonld";
import SwiperComponent from "@/components/SwiperComponent";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { PortableTextComponents } from "@/components/PortableTextComponent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JsonLd from "@/components/JsonLd";
import { Sport } from "@/types/index";

type Props = { params: Promise<{ slug: string }> };

function getSport(slug: string) {
  return sanityFetch<Sport | null>({
    query: SPORT_BY_SLUG_QUERY,
    params: { slug },
    tags: ["sports"],
  });
}

function describe(sport: Sport) {
  const intro = sport.intro?.length ? toPlainText(sport.intro) : "";
  return truncate(intro || sport.title);
}

export async function generateStaticParams() {
  const slugs = await getSportSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sport = await getSport(slug);

  if (!sport) {
    return notFoundMetadata("Sport Not Found", "The requested sport page could not be found.");
  }

  const imageUrl = sport.images?.[0]?.asset?.url;

  return pageMetadata({
    title: sport.title,
    description: describe(sport),
    path: `/academics/sports/${slug}`,
    image: imageUrl,
    imageAlt: sport.title,
  });
}

export default async function SportDetailPage({ params }: Props) {
  const { slug } = await params;
  const sport = await getSport(slug);

  if (!sport) {
    notFound();
  }

  const imageUrls = (sport.images ?? []).map((image) => image.asset.url);
  const faqs = (sport.faqs ?? []).filter((faq) => faq.faq && faq.answer);

  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F9] py-16 md:py-20">
      <Image
        src="/assets/patterns/hand-curv.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={100}
        className="pointer-events-none absolute top-16 left-6 hidden opacity-60 md:block"
      />
      <div
        className="pointer-events-none absolute -right-16 top-32 h-56 w-56 rounded-full bg-[#0D3658]/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        {faqs.length > 0 && (
          <JsonLd
            data={faqJsonLd(
              faqs.map((faq) => ({ question: faq.faq, answer: faq.answer })),
            )}
          />
        )}
        <DynamicBreadcrumb currentLabel={sport.title} />

        <header className="mt-8 max-w-3xl">
          <h1 className="text-3xl font-bold text-[#0D3658] md:text-4xl">{sport.title}</h1>
        </header>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row">
          <div className="w-full lg:w-1/2 space-y-6">
            {sport.intro?.length > 0 && (
              <div className="prose prose-neutral max-w-none text-gray-700">
                <PortableText value={sport.intro} />
              </div>
            )}
            {sport.atSchoolTitle && (
              <h2 className="text-xl font-bold text-[#0D3658]">{sport.atSchoolTitle}</h2>
            )}
            {sport.atSchoolIntro?.length > 0 && (
              <div className="prose prose-neutral max-w-none text-gray-700">
                <PortableText value={sport.atSchoolIntro} components={PortableTextComponents} />
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2">
            {imageUrls.length > 0 && (
              <SwiperComponent
                images={imageUrls}
                label={`${sport.title} at St. Vivekanand School, photo`}
              />
            )}
          </div>
        </div>

        {faqs.length > 0 && (
          <Accordion type="single" collapsible className="mt-12 w-full max-w-3xl">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.faq}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </section>
  );
}
