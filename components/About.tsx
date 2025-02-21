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
      "At St. Vivekanand School, we believe in nurturing young minds with values, knowledge, and skills that prepare them for the future. Our commitment to excellence in education spans over decades, making us one of the most trusted educational institutions. The most trusted educational institutions. Excellence in education",
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
        if (card.type === 'text') {
          return (
            <div key={card.id} className="flex-1 flex flex-col items-center">
              <div 
                className="aspect-square w-[80%] md:w-full bg-transparent p-6 border-2 border-white 
                  transition-transform hover:scale-[1.02] duration-300 mb-4"
              >
                <h2 className="text-2xl font-semibold text-white mb-4">{card.title}</h2>
                <p className="text-gray-200">{card.description}</p>
              </div>
              <Button 
                variant="destructive" 
                className="text-white bg-[#E63946] hover:scale-110 transition-transform duration-300"
              >
                Read More
              </Button>
            </div>
          );
        }
    
        return (
          <div key={card.id} className="flex-1 flex flex-col items-center">
            <div 
              className="aspect-square w-[80%]  md:w-full relative group overflow-hidden mb-4"
            >
              <div 
                className="h-full w-full bg-cover bg-center transition-transform 
                  duration-500 group-hover:scale-110"
                style={{backgroundImage: `url('${card.imageUrl}')`}}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h2 className="text-2xl font-semibold text-white mb-4">{card.title}</h2>
                </div>
              </div>
            </div>
            <Button 
                variant="destructive" 
                className="text-white bg-[#E63946] hover:scale-110 transition-transform duration-300"
              >
                Read More
              </Button>
          </div>
        );
    };

    return (
      <>
        <section className="w-full bg-[#457B9D]">
          <div className="relative max-w-7xl mx-auto bg-[#1D3557] py-10 px-4 md:px-12" style={{
            backgroundImage: "url('/assets/background/stvivek.png')", objectFit: "cover", backgroundRepeat: 'no-repeat'}}>
            <h1 className="text-3xl md:text-4xl font-bold text-white pb-5">
              About St. Vivekanand School
            </h1>
            <p className="md:w-[50%] text-white pb-10">Our school is well-known for its high-quality education, providing a co-educational Day cum Boarding school environment.</p>
            <div className="flex flex-col md:flex-row gap-8">
              {aboutContent.map(card => renderCard(card))}
            </div>
          </div>
        </section>
      </>
    );
};

export default About;
