import { getSportsData } from "@/lib/queries";
import { Sport } from "@/types/index";
import SwiperComponent from "@/components/SwiperComponent";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

const SportsPage = async () => {
  const sportsData: Sport[] = await getSportsData();

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20">
      <DynamicBreadcrumb />

      <div className="container mx-auto pt-4">
        <h1 className="text-4xl font-bold mb-2 text-center">
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
            alt="pa"
            className="absolute top-0 left-0"
          />
          {sportsData.map((sport, i) => {
            const sectionId = sport.sportId?.current;

            if (!sectionId) {
              console.warn(`Missing sportId for sport: ${sport.title}`);
              return null;
            }

            // Extract image URLs for the SwiperComponent
            const imageUrls = sport.images.map((image) => image.asset.url);

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
                    <h2 className="text-3xl font-semibold mb-4">
                      {sport.title}
                    </h2>
                    <p className="mb-4">{sport.intro}</p>

                    <h3 className="text-xl font-bold mb-4">
                      {sport.atSchoolTitle}
                    </h3>
                    <p className="mb-4">{sport.atSchoolIntro}</p>
                  </div>

                  {/* Pass image URLs to SwiperComponent */}
                  <div className="w-full md:w-1/2">
                    <SwiperComponent images={imageUrls} />
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full mt-5">
                  {sport.faqs.map((faq, i) => (
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
}

export default SportsPage;
