export type SportsAchievement = {
  id: string;
  placement: string;
  headline: string;
  detail?: string;
};

export const SPORTS_ACHIEVEMENTS: SportsAchievement[] = [
  {
    id: "maka",
    placement: "1st",
    headline: "Runner-up in Maka Trophy 2024",
  },
  {
    id: "khelo",
    placement: "1st",
    headline: "Runner-up in Khelo India Games",
    detail: "Three consecutive years",
  },
  {
    id: "district",
    placement: "1st",
    headline: "District champions — inter-school cricket",
    detail: "2023–24 season",
  },
  {
    id: "national",
    placement: "50+",
    headline: "Students represented at national-level sports",
    detail: "Across disciplines",
  },
];

export const GLIMPSE_IMAGES = [
  { src: "/assets/sports/cricket.webp", alt: "Cricket at SVS", className: "md:col-span-2 md:row-span-2" },
  { src: "/assets/sports/basketball.webp", alt: "Basketball court", className: "md:col-span-1" },
  { src: "/assets/sports/tennis.webp", alt: "Lawn tennis", className: "md:col-span-1" },
  { src: "/assets/sports/gymnasium.webp", alt: "Gymnasium", className: "md:col-span-1" },
  { src: "/assets/sports/sports-2.webp", alt: "Sports at campus", className: "md:col-span-2" },
] as const;

export const GLORY_MOMENTS = [
  {
    image: "/assets/sports/cricket.webp",
    title: "Cricket turf victories",
    text: "Our cricket programme trains on professional turf with structured leagues and inter-school fixtures.",
  },
  {
    image: "/assets/sports/basketball.webp",
    title: "Basketball excellence",
    text: "Indoor courts and certified coaching help athletes build skill, stamina, and team spirit year-round.",
  },
  {
    image: "/assets/sports/sports-2.webp",
    title: "All-round athletes",
    text: "From fitness labs to multi-sport tournaments, SVS nurtures champions on and off the field.",
  },
] as const;

export const HERO_CAROUSEL_IMAGES = [
  { src: "/assets/sports/sports-2.webp", alt: "Students at St. Vivekanand School sports facilities" },
  { src: "/assets/sports/cricket.webp", alt: "Cricket training at SVS" },
  { src: "/assets/background/cricket-2.webp", alt: "Sports action at SVS campus" },
] as const;
