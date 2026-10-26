import Image from "next/image";
import * as motion from "motion/react-client";
import { NumberTicker } from "./magicui/number-ticker";
import { Awards } from "./ui/award";

interface RankingCard {
  id: number;
  rank: number;
  suffix: string;
  description: string;
}

const rankingContent: RankingCard[] = [
  { id: 1, rank: 55, suffix: "K+", description: "Students Enrolled Since 1977" },
  { id: 2, rank: 6, suffix: "K+", description: "Total Students Passed 12th Boards" },
  { id: 3, rank: 500, suffix: "+", description: "Students Cracked IIT-JEE & NEET" },
  { id: 4, rank: 50, suffix: "+", description: "Represent at the National Level Sports" },
];

const Rankings = () => {
  return (
    <motion.section
      className="relative w-full overflow-hidden bg-[#002147] py-16 xl:px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Image
        src="/assets/patterns/dots.png"
        alt=""
        aria-hidden="true"
        height={120}
        width={120}
        className="pointer-events-none absolute left-8 top-8 opacity-20"
      />
      <Image
        src="/assets/patterns/tri-dots.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={140}
        className="pointer-events-none absolute bottom-10 right-6 rotate-90 opacity-25"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#85193C]/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-16 top-20 h-64 w-64 rounded-full bg-[#457B9D]/25"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
          <div className="flex w-full flex-col items-center text-center md:w-[280px] md:shrink-0 md:text-left">
            <Awards
              variant="stamp"
              title="Bikaner"
              subtitle="SVS Legacy"
              recipient="Since 1977"
              level="gold"
              className="h-44 w-44 md:h-48 md:w-48"
            />
            <h2 className="mt-6 text-3xl font-bold text-white md:text-4xl">Our Legacy</h2>
            <p className="mt-2 text-sm text-white/75 text-center">
              Milestones that reflect decades of academic and sporting excellence.
            </p>
          </div>

          <ul className="grid flex-1 grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
            {rankingContent.map((rank) => (
              <li
                key={rank.id}
                className="group flex flex-col items-center rounded-xl bg-gray-100 p-6 text-center shadow-lg transition-all duration-300 hover:bg-[#457B9D] hover:shadow-xl"
              >
                <p className="mb-2 text-4xl font-bold text-[#7B243D] md:text-5xl group-hover:text-white">
                  <NumberTicker
                    value={rank.rank}
                    className="text-[#7B243D] group-hover:text-white"
                  />
                  <span>{rank.suffix}</span>
                </p>
                <p className="text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/90 md:text-base">
                  {rank.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Rankings;
