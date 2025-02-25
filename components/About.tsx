import React from "react";
import { Button } from "./ui/button";

// Define types for our content
interface ContentCard {
  id: number;
  title: string;
  description?: string;
  imageUrl?: string;
  type: "text" | "image";
}

// Content data
const aboutContent: ContentCard[] = [
  {
    id: 1,
    type: "text",
    title: "Our Vision",
    description:
      "At St. Vivekanand Sr. Sec. School, we are guided by the timeless wisdom of Swami Vivekananda, a beacon of education and social reform. We believe that true education transcends mere academics, aiming to awaken the inherent potential within every student and nurture well-rounded individuals who are responsible global citizens.",
  },
  {
    id: 2,
    type: "image",
    title: "From Principal's Desk",
    imageUrl: "/assets/faculty/principal.jpg",
  },
  {
    id: 3,
    type: "image",
    title: "Academic Excellence",
    imageUrl: "/assets/background/why-shpuld.jpg",
  },
];

const About = () => {
  const renderCard = (card: ContentCard) => {
    if (card.type === "text") {
      return (
        <div key={card.id} className="flex-1 flex flex-col items-center">
          <div
            className="aspect-square w-full bg-transparent p-6 border-2 border-white 
                  transition-transform hover:scale-[1.02] duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">
                {card.title}
              </h2>
              <p className="text-gray-200 text-sm md:text-base">{card.description}</p>
            </div>
            <Button
              variant="destructive"
              className="text-white bg-[#E63946] hover:scale-110 transition-transform duration-300 w-fit"
            >
              Read More
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div key={card.id} className="flex-1 flex flex-col items-center">
        <div className="aspect-square transition-transform hover:scale-[1.02] duration-300 w-full relative group overflow-hidden">
          <div
            className="h-full w-full bg-cover bg-center transition-transform 
                  "
            style={{ backgroundImage: `url('${card.imageUrl}')` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 p-6 flex flex-col justify-end gap-4">
              <h2 className="text-2xl font-semibold text-white">
                {card.title}
              </h2>
              <Button
                variant="destructive"
                className="text-white bg-[#E63946] hover:scale-110 transition-transform duration-300 w-fit"
              >
                Read More
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full bg-[#002147]">
      <div
        className="relative max-w-7xl mx-auto bg-[#002147] py-12 px-4 md:px-0"
        style={{
          backgroundImage: "url('/assets/background/stvivek.png')",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-xl md:text-4xl font-bold text-white pb-4">
          About St. Vivekanand School
        </h1>
        <p className="md:w-[50%] text-white text-sm md:text-base pb-8">
          Our school is well-known for its high-quality education, providing a
          co-educational Day cum Boarding school environment.
        </p>
        <div className="flex flex-col md:flex-row gap-6">
          {aboutContent.map((card) => renderCard(card))}
        </div>
      </div>
    </section>
  );
};

export default About;
