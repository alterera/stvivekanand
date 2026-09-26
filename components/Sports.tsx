import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Button } from "./ui/button";

interface SportCard {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
}

const sportsContent: SportCard[] = [
  {
    id: 1,
    title: "Basketball Court",
    imageUrl: "/assets/sports/basketball.webp",
    link: "/academics/sports/#basketball-court",
  },
  {
    id: 2,
    title: "Gymnasium",
    imageUrl: "/assets/sports/gymnasium.webp",
    link: "/academics/sports/#gymnasium-strength-and-fitness",
  },
  {
    id: 3,
    title: "Cricket Turf",
    imageUrl: "/assets/sports/cricket.webp",
    link: "/academics/sports/#cricket-turf",
  },
  {
    id: 4,
    title: "Lawn Tennis Court",
    imageUrl: "/assets/sports/tennis.webp",
    link: "/academics/sports/#lawn-tennis",
  },
];

const Sports = () => {
  return (
    <motion.section
      className="relative w-full bg-white xl:px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Image
        src="/assets/patterns/hilly.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={120}
        className="absolute bottom-0 left-32"
      />
      <div
        className="w-full rounded-t-3xl py-10 md:py-16"
        style={{
          backgroundImage: `url('/assets/background/cricket-2.webp')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="relative text-3xl md:text-4xl font-bold text-[#1D3557] mb-2">
            Sports Facilities
            <Image
              src="/assets/patterns/curvy.png"
              alt=""
              aria-hidden="true"
              height={100}
              width={120}
              className="absolute top-10 left-40"
            />
          </h2>
          <p className="mb-10">
            The largest gamut of in-house sports facilities for any school, right in the city centre.
          </p>

          <div className="flex flex-col lg:flex-row gap-8 mb-10">
            <div className="lg:w-full relative h-[200px] md:h-[100px] lg:h-[300px] overflow-hidden rounded-sm shadow-lg">
              <Image
                src="/assets/sports/sports-2.webp"
                alt="Students playing sports at St. Vivekanand School"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>

            <div className="lg:w-[40%] flex flex-col justify-between">
              <h3 className="text-2xl md:text-3xl font-bold text-[#1D3557] mb-4">
                Welcome to St. Vivekanand&apos;s Sports
              </h3>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Welcome to St. Vivekanand&apos;s sports, the physical education department of our
                school. We believe that sports is not just a thing, but a way of life that teaches
                discipline, perseverance, and teamwork.
              </p>
              <Button asChild className="w-fit text-white bg-[#7B243D] hover:bg-[#1D3557] font-bold">
                <Link href="/academics/sports">Read More</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {sportsContent.map((sport, index) => (
              <div
                key={sport.id}
                className="relative h-[200px] md:h-[300px] overflow-hidden group rounded-sm shadow-lg"
              >
                <Image
                  src={sport.imageUrl}
                  alt={sport.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/60" />

                <motion.div
                  className="absolute inset-0 p-4 flex flex-col justify-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    {sport.title}
                  </h3>

                  <Button
                    asChild
                    variant="outline"
                    className="w-fit bg-transparent text-white border-white hover:bg-[#7B243D] font-bold hover:text-white hover:border-none"
                  >
                    <Link href={sport.link} aria-label={`Read more about the ${sport.title}`}>
                      Read More
                    </Link>
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Sports;
