import { getSportsData } from "@/lib/queries";
import { Sport } from "@/types/index";
import SwiperComponent from "@/components/SwiperComponent";
import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { PortableText } from "next-sanity";
import { PortableTextComponents } from "@/components/PortableTextComponent";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
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
  const faqs = sportsData.flatMap((sport) =>
    (sport.faqs ?? [])
      .filter((faq) => faq.faq && faq.answer)
      .map((faq) => ({ question: faq.faq, answer: faq.answer })),
  );

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      {faqs.length > 0 && <JsonLd data={faqJsonLd(faqs)} />}
      <DynamicBreadcrumb />

      <div className="container mx-auto pt-4">
        <h1 className="text-4xl font-bold mb-2 text-center text-[#0D3658]">
          Sports Facilities
        </h1>
        <p className="text-center mb-8">
          The largest gamut of in-house sports facilities for any school, right
          in the city centre
        </p>

        <div className="relative">
          <Image
            src={"/assets/patterns/hand-curv.png"}
            height={100}
            width={100}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute -top-10 left-0"
          />
          {sportsData.map((sport, i) => {
            const sectionId = sport.sportId?.current;

            if (!sectionId) {
              console.warn(`Missing sportId for sport: ${sport.title}`);
              return null;
            }

            const imageUrls = (sport.images ?? []).map((image) => image.asset.url);

            return (
              <section
                key={sport._id}
                id={sectionId}
                className="mb-12 scroll-mt-20"
              >
                <div
                  className={`flex flex-col-reverse gap-10 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="w-full md:w-1/2 py-5 md:py-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-semibold mb-4 text-[#0D3658]">
                      {sport.title}
                    </h2>
                    <div className="mb-4 text-gray-700">
                      <PortableText
                        value={sport.intro}
                      />
                    </div>

                    <h3 className="text-xl font-bold mb-4 text-[#0D3658]">
                      {sport.atSchoolTitle}
                    </h3>
                    <div className="mb-4 text-gray-700">
                      <PortableText value={sport.atSchoolIntro} components={PortableTextComponents}/>
                    </div>
                  </div>

                  <div className="w-full md:w-1/2">
                    <SwiperComponent images={imageUrls} label={`${sport.title} at St. Vivekanand School, photo`} />
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full mt-5">
                  {(sport.faqs ?? []).map((faq, i) => (
                    <AccordionItem value={`item-${i}`} key={i}>
                      <AccordionTrigger>{faq.faq}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SportsPage;
