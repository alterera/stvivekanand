import type React from "react";
import * as motion from "motion/react-client";
import {
  Volleyball,
  FlaskConical,
  Bot,
  BookOpen,
  Laptop,
  Microscope,
  Brain,
  Languages,
  Lightbulb,
  Presentation,
  Trophy,
  Target,
  Dumbbell,
  Music,
  Palette,
  Paintbrush,
  Drama,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";

const iconClass = "size-12 shrink-0 text-[#E63946]";

type Facility = {
  id: number;
  title: string;
  description: string;
  icon: React.JSX.Element;
  link: string;
};

const facilities: Facility[] = [
  { id: 1, title: "Science Laboratories", description: "Fully equipped Physics, Chemistry, and Biology Labs.", icon: <FlaskConical className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#science-laborities" },
  { id: 2, title: "Space Lab", description: "The only Space Lab in the city, offering hands-on space study experiences.", icon: <Microscope className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#space-lab" },
  { id: 3, title: "Robotics Lab", description: "Hands-on experience in robotics and elementary toolkit learning.", icon: <Bot className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#robotics" },
  { id: 4, title: "Computer Lab", description: "Modern, internet-enabled lab for research, homework, and projects.", icon: <Laptop className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#computer-department" },
  { id: 5, title: "Experiential Learning", description: "Activity-based learning to help students discover themselves.", icon: <Lightbulb className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#experiential-learning" },
  { id: 6, title: "Library", description: "Over 45 years of curated knowledge, with IIT-JEE & NEET sections.", icon: <BookOpen className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#library" },
  { id: 7, title: "AI & Machine Learning Lab", description: "Learn the basics of AI & ML with practical applications.", icon: <Brain className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#ai-ml-lab" },
  { id: 8, title: "Phonics Lab", description: "UK-based phonics learning pedagogy for early English learning.", icon: <Languages className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#phonic-lab" },
  { id: 9, title: "Steam Lab", description: "Science, Technology, Engineering, Arts, and Math combined for real-world applications.", icon: <Presentation className={iconClass} aria-hidden="true" />, link: "/academics/all-facilities/#steam-lab" },
];

const sportsFacilities: Facility[] = [
  { id: 1, title: "Basketball Court", description: "A state-of-the-art court that hosts one of the finest basketball communities in town.", icon: <Volleyball className={iconClass} aria-hidden="true" />, link: "/academics/sports/#basketball-court" },
  { id: 2, title: "Badminton Court", description: "Indoor badminton court with guided daily practice sessions.", icon: <Trophy className={iconClass} aria-hidden="true" />, link: "/academics/sports/#badminton-court" },
  { id: 3, title: "Cricket Practice Turf", description: "A closed-net cricket practice area for future cricketers.", icon: <Target className={iconClass} aria-hidden="true" />, link: "/academics/sports/#cricket-turf" },
  { id: 4, title: "Gymnasium", description: "An elementary gym for students who want to put in extra hours of training.", icon: <Dumbbell className={iconClass} aria-hidden="true" />, link: "/academics/sports/#gymnasium-strength-and-fitness" },
  { id: 5, title: "Lawn Tennis Court", description: "A newly-added hard-court tennis facility.", icon: <Trophy className={iconClass} aria-hidden="true" />, link: "/academics/sports/#table-tennis-spin-to-win" },
];

const coCurricular = [
  { id: 1, title: "Vocal & Instrumental Music", description: "Dedicated coach for singing and musical instruments.", icon: <Music className={iconClass} aria-hidden="true" /> },
  { id: 2, title: "Painting Workshops", description: "Regular painting classes to explore different styles of art.", icon: <Palette className={iconClass} aria-hidden="true" /> },
  { id: 3, title: "Kathak Chapter", description: "Special Kathak classes by a Jaipur Kathak Gharana tutor.", icon: <Drama className={iconClass} aria-hidden="true" /> },
  { id: 4, title: "Textile & Embroidery", description: "Textile education & embroidery masterclasses by resident tutors.", icon: <Paintbrush className={iconClass} aria-hidden="true" /> },
];

const Academics = () => {
  return (
    <motion.section 
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
      <DynamicBreadcrumb />
        {/* Page Title */}
        <motion.div 
          className="text-center mb-12 mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-4xl font-bold text-[#1D3557]">
            Academics at St. Vivekanand School
          </h1>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Our institution follows the NCERT curriculum under CBSE guidelines, providing modern learning experiences with a legacy of excellence since 1977.
          </p>
        </motion.div>

        {/* History Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-4">
              Our Journey Since 1977
            </h3>
            <p className="text-gray-700">
              St. Vivekanand Sr. Sec. School started as a primary school in 1977, and has grown into one of Bikaner&apos;s finest learning institutions. We provide education from Kindergarten to Class 12, following CBSE & NEP guidelines in a modern, technology-enabled environment.
            </p>
          </div>
          <Image
            src="/assets/background/campus-bg.webp"
            alt="St. Vivekanand School building in Bikaner"
            width={500}
            height={350}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Facilities Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {facilities.map((sport: Facility) => (
            <Link href={sport.link} key={sport.id} className="bg-[#0D3658] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4">
                {sport.icon}
                <h4 className="text-xl font-semibold">{sport.title}</h4>
              </div>
              <p className="mt-2 text-gray-300">{sport.description}</p>
            </Link>
          ))}
        </motion.div>

        {/* Image Gallery */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1D3557] mb-6">A Glimpse Into Our Campus</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Image src="/assets/academics/science.webp" alt="Science lab" width={300} height={200} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-lg shadow-md" />
            <Image src="/assets/academics/computer.webp" alt="Computer lab" width={300} height={200} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-lg shadow-md" />
            <Image src="/assets/academics/experiential.webp" alt="Experiential learning activity" width={300} height={200} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-lg shadow-md" />
            <Image src="/assets/academics/library.webp" alt="School library" width={300} height={200} sizes="(max-width: 768px) 50vw, 25vw" className="rounded-lg shadow-md" />
          </div>
        </motion.div>

        {/* Sports Facilities */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
          <Image src="/assets/sports/cricket.webp" alt="Cricket practice at the school sports facilities" width={500} height={350} sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg shadow-lg" />
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-4">Sports Facilities</h3>
            <p className="text-gray-700">
            Our school takes immense pride in offering one of the largest in-house sports infrastructures in the city, designed to provide students with world-class courts and facilities. From state-of-the-art basketball and badminton courts to professional-grade cricket practice turfs, we ensure that every aspiring athlete gets the best training environment. Our indoor and outdoor sports complexes cater to a wide range of activities, including table tennis, lawn tennis, football, and athletics, helping students develop physical strength, teamwork, and sportsmanship. With trained coaches and structured programs, we prepare students not just for inter-school competitions but also for state and national-level championships, nurturing their potential to excel in the world of sports.
            </p>
            <Button asChild className="bg-[#85193C] w-fit my-5 font-semibold">
              <Link href="/academics/sports">Learn More</Link>
            </Button>
          </div>
        </motion.div>

        {/* Sports Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {sportsFacilities.map((sport) => (
            <Link key={sport.id} href={sport.link} className="bg-[#1D3557] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4">
                {sport.icon}
                <h4 className="text-xl font-semibold">{sport.title}</h4>
              </div>
              <p className="mt-2 text-gray-300">{sport.description}</p>
            </Link>
          ))}
        </motion.div>

        {/* Co-Curricular Activities */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-4">Co-Curricular Activities</h3>
            <p className="text-gray-700">
            At our school, we believe that education extends beyond textbooks, which is why we have dedicated arts, music, and cultural programs to help students explore and refine their creative talents. Whether it&apos;s vocal and instrumental music, theater and dance, or painting and textile embroidery, we provide a platform for students to express themselves artistically. Our expert mentors guide students in mastering their craft, fostering confidence, creativity, and self-discipline. Through annual cultural events, art exhibitions, and music recitals, we encourage students to showcase their skills, giving them opportunities to shine on local, national, and international stages. These programs ensure a holistic development approach, making learning a joyful and enriching experience.
            </p>
          </div>
          <Image src="/assets/co-curricular/paintings.webp" alt="Student paintings from co-curricular art classes" width={500} height={350} sizes="(max-width: 768px) 100vw, 50vw" className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Co-Curricular Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coCurricular.map((activity) => (
            <div key={activity.id} className="bg-[#85193C] text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-105">
              <div className="flex items-center gap-4">
                {activity.icon}
                <h4 className="text-xl font-semibold">{activity.title}</h4>
              </div>
              <p className="mt-2 text-gray-300">{activity.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Academics;
