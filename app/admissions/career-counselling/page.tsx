import Image from "next/image";
import * as motion from "motion/react-client";
import { Marquee } from "@/components/magicui/marquee";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";

const FaqData = [
  {
    id: 1,
    faq: "Importance of Career Counselling",
    answer: "Career counselling plays a vital role in assisting students in exploring various career options and identifying their strengths and interests. Our career counsellor at The St. Vivekanand School works closely with students to help them understand their skills and preferences, and provides them with valuable information about different career paths. By guiding students through self-exploration and providing them with resources and tools, our career counsellor helps them make informed decisions about their future.",
  },
  {
    id: 2,
    faq: "Dedicated Staff for Career Counselling",
    answer: "At St. Vivekanand School, we have a dedicated staff member who is trained and experienced in career counselling. Our career counsellor provides individualized support to each student, taking into account their unique interests, aptitudes, and goals. By offering personalized guidance and encouragement, our career counsellor helps students navigate the complex world of career choices and make well-informed decisions.",
  },
  {
    id: 3,
    faq: "Annual Career Fair",
    answer: "In addition to individual career counselling sessions, The St. Vivekanand School also organizes an annual Career Fair. This event provides an excellent opportunity for students to interact with representatives from various universities and colleges, as well as professionals from different industries. The Career Fair allows students to explore a wide range of career options, gather information about different academic programs, and network with experts in their fields of interest.",
  },
];

const images = [
  { img: "/assets/background/bg-2.webp", alt: "Students on the St. Vivekanand School campus" },
  { img: "/assets/background/bg-3.webp", alt: "School activities at St. Vivekanand School" },
  { img: "/assets/background/campus-bg.webp", alt: "St. Vivekanand School campus building" },
  { img: "/assets/background/hero-bg.webp", alt: "St. Vivekanand School grounds" },
];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const PhotoCard = ({ img, alt }: { img: string; alt: string }) => {
  return (
    <figure className="relative h-52 w-64 md:h-60 md:w-80 lg:h-60 lg:w-96 overflow-hidden rounded-xl border">
      <Image src={img} alt={alt} fill sizes="(max-width: 768px) 256px, 384px" className="object-cover" />
      <div className="absolute inset-0 bg-black/30 hover:bg-black/10 transition duration-300" />
    </figure>
  );
};

const CareerCounselling = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />

        <div className="text-center mb-12 mt-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">Career Counselling</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Guidance, one-to-one counselling, and an annual career fair to help every student choose
            their path with confidence.
          </p>
        </div>
        <div className="flex flex-col gap-16">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full md:w-1/2">
              <Image
                src="/assets/background/campus-bg.webp"
                alt="St. Vivekanand School campus, where career counselling sessions are held"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-semibold text-[#002147] mb-4">
                Counselling in St. Vivekanand School
              </h2>
              <p className="text-gray-700 text-base md:text-lg">
                In today&apos;s fast-paced world, choosing the right career path is crucial for every
                student. It is important for them to receive proper guidance and support to help them
                make informed decisions about their future. At St. Vivekanand School, we understand
                the significance of career counselling and have a dedicated staff member who is
                committed to helping our students achieve their career goals.
              </p>
            </div>
          </motion.div>
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((photo) => (
                <PhotoCard key={photo.img} {...photo} />
              ))}
            </Marquee>
          </div>

          <div>
            <Accordion type="single" collapsible className="w-full">
              {FaqData.map((faq) => (
                <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                  <AccordionTrigger>{faq.faq}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((photo) => (
                <PhotoCard key={photo.img} {...photo} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerCounselling;
