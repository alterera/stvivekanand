import { sanityFetch } from "@/lib/sanity";
import { HERO_QUERY } from "@/lib/queries";
import HeroSlider, { type HeroText } from "./HeroSlider";

const FALLBACK: HeroText[] = [
  {
    title: "St. Vivekanand School, Bikaner",
    description: "CBSE school in Bikaner since 1977, from Nursery to Class 12",
    buttonText: "Admissions",
    url: "/admissions/admission-process",
  },
];

const Hero = async () => {
  const hero = await sanityFetch<HeroText[]>({ query: HERO_QUERY, tags: ["hero"] }).catch(
    () => [] as HeroText[],
  );

  return <HeroSlider hero={hero?.length ? hero : FALLBACK} />;
};

export default Hero;
