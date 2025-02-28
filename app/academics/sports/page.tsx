"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Button } from "@/components/ui/button";

const sportsData = [
  {
    id: 1,
    title: "Basketball: A Brief Introduction",
    intro:
      "Basketball is one of the most thrilling and widely played sports in the world. It is a high-energy game that requires speed, agility, teamwork, and strategy. Played between two teams, the objective is to score points by shooting the ball through the opponent's hoop. The game enhances coordination, endurance, and mental resilience, making it a great choice for overall fitness and personal development.",
    atSchoolTitle: "Basketball at St. Vivekanand",
    atSchoolIntro:
      "Our **state-of-the-art basketball court** is home to one of the finest basketball communities in the town. With expert coaching and structured practice sessions, we encourage students to master dribbling, shooting, and defensive strategies. Our school regularly hosts **inter-house and inter-school basketball tournaments**, providing students with the opportunity to showcase their skills and compete at a higher level.",
    imageUrl: "/assets/sports/basketball.png",
    faqs: [
      {
        id: 1,
        faq: "What facilities does the basketball court offer?",
        answer:
          "Our basketball court is designed with professional-grade flooring, high-quality hoops, and ample lighting, ensuring a world-class training experience for students.",
      },
      {
        id: 2,
        faq: "Is coaching available for beginners?",
        answer:
          "Yes! We have specialized training programs for beginners, focusing on fundamentals like dribbling, passing, and shooting to build confidence and skill.",
      },
      {
        id: 3,
        faq: "Do students get opportunities to play in competitions?",
        answer:
          "Absolutely! Our school participates in district, state, and national-level basketball tournaments, providing students with the platform to compete and excel.",
      },
    ],
  },
  {
    id: 2,
    title: "Badminton: A Brief Introduction",
    intro:
      "Badminton is a fast-paced sport that requires agility, precision, and quick reflexes. Played with a shuttlecock and racquets, the objective is to score points by hitting the shuttle over the net into the opponent’s court. It is a sport that enhances cardiovascular fitness, hand-eye coordination, and strategic thinking.",
    atSchoolTitle: "Badminton at St. Vivekanand",
    atSchoolIntro:
      "Our **indoor badminton court** is well-maintained and equipped with professional flooring and net systems. Students receive **daily guided practice sessions** under the mentorship of expert coaches. With a structured curriculum, students at all levels—beginners to advanced—get the right training to refine their techniques and participate in school, district, and national tournaments.",
    imageUrl: "/assets/sports/cric.png",
    faqs: [
      {
        id: 1,
        faq: "What makes our badminton court special?",
        answer:
          "Our indoor badminton court is designed with high-quality synthetic flooring, ensuring a safe and professional playing experience for students.",
      },
      {
        id: 2,
        faq: "Are there structured coaching programs?",
        answer:
          "Yes, we offer expert coaching tailored to different skill levels, helping students enhance their strokes, footwork, and gameplay strategies.",
      },
      {
        id: 3,
        faq: "Can students compete in tournaments?",
        answer:
          "Yes, students have the opportunity to compete in inter-school, district, and state-level tournaments, building confidence and competitive spirit.",
      },
    ],
  },
  {
    id: 3,
    title: "Cricket: A Brief Introduction",
    intro:
      "Cricket is one of the most celebrated sports worldwide, requiring a unique blend of skill, strategy, and endurance. Played between two teams, the game involves batting, bowling, and fielding, with the ultimate goal of scoring more runs than the opposition.",
    atSchoolTitle: "Cricket at St. Vivekanand",
    atSchoolIntro:
      "Our **closed-net cricket practice turf** provides students with the perfect environment to refine their batting, bowling, and fielding skills. With structured training programs, regular matches, and expert coaching, students develop the discipline and technical expertise needed to perform at the highest level. We also prepare students for **competitive cricket tournaments** at the district and state levels.",
    imageUrl: "/assets/sports/cricket.png",
    faqs: [
      {
        id: 1,
        faq: "What are the benefits of our closed-net practice turf?",
        answer:
          "Our practice turf is designed to help students develop batting and bowling techniques in a focused, controlled environment.",
      },
      {
        id: 2,
        faq: "Do students get professional cricket coaching?",
        answer:
          "Yes, we have experienced cricket coaches who provide structured training programs, preparing students for professional-level competitions.",
      },
      {
        id: 3,
        faq: "Are students given match exposure?",
        answer:
          "Yes, we organize intra-school and inter-school matches, ensuring students get ample real-game experience.",
      },
    ],
  },
  {
    id: 4,
    title: "Table Tennis: A Brief Introduction",
    intro:
      "Table Tennis is a fast-paced indoor sport that tests reflexes, hand-eye coordination, and precision. Played with paddles and a lightweight ball on a compact table, it demands quick decision-making and strategic play.",
    atSchoolTitle: "Table Tennis at St. Vivekanand",
    atSchoolIntro:
      "Our **fully-equipped Table Tennis room** features high-quality tables and professional coaching for students at all skill levels. The sport not only enhances reaction speed but also helps improve focus and mental agility. We actively encourage participation in school and external table tennis tournaments.",
    imageUrl: "/assets/sports/tennis.png",
    faqs: [
      {
        id: 1,
        faq: "How many tables are available for practice?",
        answer:
          "We have multiple table tennis setups, allowing students to train effectively in a competitive and structured environment.",
      },
      {
        id: 2,
        faq: "Is coaching available for all skill levels?",
        answer:
          "Yes, our coaching programs are designed to help beginners, intermediate, and advanced players improve their technique and gameplay strategies.",
      },
      {
        id: 3,
        faq: "Are there tournament opportunities?",
        answer:
          "Yes, students are encouraged to participate in various table tennis tournaments at the school and district levels.",
      },
    ],
  },
  {
    id: 5,
    title: "Gymnasium: A Brief Introduction",
    intro:
      "A gymnasium is an essential facility for students aiming to enhance their physical fitness, endurance, and strength. It provides an environment where students can engage in weight training, cardio exercises, and body conditioning.",
    atSchoolTitle: "Gymnasium at St. Vivekanand",
    atSchoolIntro:
      "Our **school gymnasium** is designed for students who want to put in the extra hours to build their stamina and overall fitness. It features a range of fitness equipment, including treadmills, weights, and training machines, ensuring a well-rounded physical development approach.",
    imageUrl: "/assets/sports/football.png",
    faqs: [
      {
        id: 1,
        faq: "What equipment is available in the gym?",
        answer:
          "Our gym is equipped with cardio machines, free weights, resistance training machines, and other fitness essentials.",
      },
      {
        id: 2,
        faq: "Can all students access the gym?",
        answer:
          "Yes, but students must follow a structured fitness program under the supervision of certified trainers.",
      },
      {
        id: 3,
        faq: "Does the school offer guided fitness programs?",
        answer:
          "Yes, our trainers help students develop personalized fitness routines based on their individual goals.",
      },
    ],
  },
  {
    id: 6,
    title: "Lawn Tennis: A Brief Introduction",
    intro:
      "A gymnasium is an essential facility for students aiming to enhance their physical fitness, endurance, and strength. It provides an environment where students can engage in weight training, cardio exercises, and body conditioning.",
    atSchoolTitle: "Gymnasium at St. Vivekanand",
    atSchoolIntro:
      "Our **school gymnasium** is designed for students who want to put in the ‘extra hours’ to build their stamina and overall fitness. It features a range of fitness equipment, including treadmills, weights, and training machines, ensuring a well-rounded physical development approach.",
    imageUrl: "/assets/sports/tennis.png",
    faqs: [
      {
        id: 1,
        faq: "What equipment is available in the gym?",
        answer:
          "Our gym is equipped with cardio machines, free weights, resistance training machines, and other fitness essentials.",
      },
      {
        id: 2,
        faq: "Can all students access the gym?",
        answer:
          "Yes, but students must follow a structured fitness program under the supervision of certified trainers.",
      },
      {
        id: 3,
        faq: "Does the school offer guided fitness programs?",
        answer:
          "Yes, our trainers help students develop personalized fitness routines based on their individual goals.",
      },
    ],
  },
];



const firstSec = sportsData.slice(0, sportsData.length / 2);
const nextSec = sportsData.slice(sportsData.length / 2);

const Sports = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Academics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Sports</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Page Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Sports Facilities
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover a variety of sports programs designed to promote teamwork,
            fitness, and leadership.
          </p>
        </div>

        {/* Sports Sections */}
        <div className="flex flex-col gap-16">
          {firstSec.map((item, index) => (
            <div key={item.id} id={`item.id`}>
              {/* Sports Info Section */}
              <motion.div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold text-[#002147] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    {item.intro}
                  </p>
                  <h3 className="text-2xl font-semibold text-[#002147] mt-6 mb-4">
                    {item.atSchoolTitle}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    {item.atSchoolIntro}
                  </p>
                </div>
              </motion.div>

              {/* FAQ Section Below Each Sport (Full Width) */}
              <motion.section
                className="w-full mt-12 bg-[#1D3557] text-white p-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-5">
                  {item.faqs.map((faq) => (
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      key={faq.id}
                    >
                      <AccordionItem value={`${"item-" + faq.id}`}>
                        <AccordionTrigger className="font-bold">
                          + {faq.faq}
                        </AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </motion.section>
            </div>
          ))}
          <div className="flex justify-between items-center bg-gradient-to-l from-blue-700 via-blue-800 to-gray-900 text-white py-16 px-4">
            <div className="flex flex-col gap-10">
              <h1 className="text-2xl font-bold">Enroll Today!!</h1>
              <h1 className="text-4xl font-medium">Build Your Career In Sports</h1>
            </div>
            <Button variant={"outline"} className="bg-transparent">Contact Us</Button>
          </div>
          {nextSec.map((item, index) => (
            <div key={item.id}>
              {/* Sports Info Section */}
              <motion.div
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <div className="w-full md:w-1/2">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-semibold text-[#002147] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    {item.intro}
                  </p>
                  <h3 className="text-2xl font-semibold text-[#002147] mt-6 mb-4">
                    {item.atSchoolTitle}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg">
                    {item.atSchoolIntro}
                  </p>
                </div>
              </motion.div>

              {/* FAQ Section Below Each Sport (Full Width) */}
              <motion.section
                className="w-full mt-12 bg-[#002147] text-white p-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col gap-5">
                  {item.faqs.map((faq) => (
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      key={faq.id}
                    >
                      <AccordionItem value={`${"item-" + faq.id}`}>
                        <AccordionTrigger className="font-bold">
                          + {faq.faq}
                        </AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ))}
                </div>
              </motion.section>
            </div>
          ))}          
        </div>
      </div>
    </section>
  );
};

export default Sports;
