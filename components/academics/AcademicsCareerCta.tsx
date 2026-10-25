import Image from "next/image";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";

export function AcademicsCareerCta() {
  return (
    <section className="relative overflow-hidden bg-[#85193C] py-12 md:py-14">
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-[320px] w-[320px] -translate-y-1/2 rounded-full bg-[#9a2349]/60"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-6 md:px-12 lg:grid-cols-2 lg:gap-12">
        <div className="text-white">
          <h2
            className="text-3xl font-bold leading-tight md:text-4xl"
            style={{ fontFamily: "var(--font-garamond)" }}
          >
            Craft your future
            <br />
            with passion
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/90">
            From experiential labs and smart classrooms to senior secondary streams, St. Vivekanand
            School helps every learner discover strengths and build a confident path forward.
          </p>
          <Link
            href="/academics/streams-offered"
            className="mt-6 inline-flex items-center gap-3 font-semibold text-white transition-opacity hover:opacity-90"
          >
            <CircleArrowRight className="h-8 w-8 fill-[#E85D04] text-white" aria-hidden="true" />
            Explore programmes
          </Link>
        </div>

        <div className="mx-auto grid w-full max-w-md grid-cols-2 gap-3 sm:max-w-lg">
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            <Image
              src="/assets/academics/computer.webp"
              alt="Students in a computer lab"
              fill
              sizes="(max-width: 1024px) 40vw, 200px"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-sm">
            <Image
              src="/assets/academics/experiential.webp"
              alt="Students in experiential learning"
              fill
              sizes="(max-width: 1024px) 40vw, 200px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
