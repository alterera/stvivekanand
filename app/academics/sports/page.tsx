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
    title: "Badminton: A Brief Introduction",
    intro:
      "Badminton is a racquet game that can be played either in singles (one player per side) or doubles (two players per side) formats. It is known for its fast-paced rallies, agility, and precision. The game takes place on a rectangular court separated by a net, and the goal is to score points by striking the shuttlecock over the net and into the opponents side of the court. Players must exhibit quick reflexes, endurance, and strategy to outmaneuver their rivals.",
    atSchoolTitle: "Badminton at St. Vivekanand",
    atSchoolIntro:
      "Badminton is more than just a sport at St. Vivekanand School; it is a culture. We believe in the holistic development of our students, and badminton offers an avenue to instill essential life skills such as discipline, teamwork, and sportsmanship.",
    imageUrl: "/assets/background/bg-2.jpeg",
    faqs: [
      {
        id: 1,
        faq: "State-of-the-Art Facilities",
        answer:
          "We pride ourselves on our world-class badminton facilities. Our courts are equipped with the latest technology to ensure that students can train and compete at their best. Our proficient coaching staff is devoted to fostering young talent and providing guidance for players at all skill levels.",
      },
      {
        id: 2,
        faq: "Coaching and Training",
        answer:
          "We offer comprehensive coaching programs designed to cater to students of various skill levels. Our proficient trainers work closely with each player, focusing on skill development, physical fitness, and strategic play. Our training programs help students acquire the fundamental skills and knowledge needed to excel in this engaged sport.",
      },
      {
        id: 3,
        faq: "Competitive Opportunities",
        answer:
          "At St. Vivekanand School, we believe that competition is essential for personal growth. Our pupils have the chance to compete in various provincial, national, and international badminton tournaments. We have a robust convention of superiority in badminton, and our students regularly bring home trophies and accolades.",
      },
    ],
  },
  {
    id: 2,
    title: "Badminton: A Brief Introduction",
    intro:
      "Badminton is a racquet game that can be played either in singles (one player per side) or doubles (two players per side) formats. It is known for its fast-paced rallies, agility, and precision. The game takes place on a rectangular court separated by a net, and the goal is to score points by striking the shuttlecock over the net and into the opponents side of the court. Players must exhibit quick reflexes, endurance, and strategy to outmaneuver their rivals.",
    atSchoolTitle: "Badminton at St. Vivekanand",
    atSchoolIntro:
      "Badminton is more than just a sport at St. Vivekanand School; it is a culture. We believe in the holistic development of our students, and badminton offers an avenue to instill essential life skills such as discipline, teamwork, and sportsmanship.",
    imageUrl: "/assets/background/bg-2.jpeg",
    faqs: [
      {
        id: 1,
        faq: "Skill Development",
        answer:
          "Our experienced coaches are committed to honing the skills of young athletes, from dribbling and shooting to defensive tactics and teamwork. Our comprehensive training ensures that students become well-rounded players.",
      },
      {
        id: 2,
        faq: "Teamwork",
        answer:
          "Basketball is not just about individual prowess; it is about collaborating with teammates, understanding their strengths, and capitalizing on them. We instill the value of teamwork and sportsmanship in our students.",
      },
      {
        id: 3,
        faq: "Competitive Opportunities",
        answer:
          "At St. Vivekanand School, we believe that competition is essential for personal growth. Our pupils have the chance to compete in various provincial, national, and international badminton tournaments. We have a robust convention of superiority in badminton, and our students regularly bring home trophies and accolades.",
      },
    ],
  },
  {
    id: 3,
    title: "The Spirit of Basketball at St. Vivekanand School",
    intro:
      "Basketball is not just a sport at St. Vivekanand School; it is a way of life. We have created an environment where every child has the opportunity to thrive and express themselves on the court. Our basketball program embodies the following principles -",
    atSchoolTitle: "Life Skills Through Basketball",
    atSchoolIntro:
      "At St. Vivekanand School, basketball is more than just a game—its a powerful tool for personal growth and character development. Our basketball program goes beyond scoring points and making rebounds; it instills essential life skills that shape our students into well-rounded individuals. Through rigorous training, students develop discipline, mastering time management and dedication that extend beyond the court. They cultivate resilience, learning to overcome challenges and setbacks with determination.",
    imageUrl: "/assets/background/bg-2.jpeg",
    faqs: [
      {
        id: 1,
        faq: "How can students join the football team?",
        answer:
          "Students can try out during annual selections held in August...",
      },
      {
        id: 2,
        faq: "Are there competitions organized?",
        answer:
          "Yes, we participate in district and state-level football competitions...",
      },
    ],
  },
  {
    id: 4,
    title: "The Spirit of Basketball at St. Vivekanand School",
    intro:
      "Basketball is not just a sport at St. Vivekanand School; it is a way of life. We have created an environment where every child has the opportunity to thrive and express themselves on the court. Our basketball program embodies the following principles -",
    atSchoolTitle: "Life Skills Through Basketball",
    atSchoolIntro:
      "At St. Vivekanand School, basketball is more than just a game—its a powerful tool for personal growth and character development. Our basketball program goes beyond scoring points and making rebounds; it instills essential life skills that shape our students into well-rounded individuals. Through rigorous training, students develop discipline, mastering time management and dedication that extend beyond the court. They cultivate **resilience**, learning to overcome challenges and setbacks with determination. The sport also nurtures leadership, as players take on responsibilities, guide their teams, and make strategic decisions under pressure.",
    imageUrl: "/assets/background/bg-2.jpeg",
    faqs: [
      {
        id: 1,
        faq: "How can students join the football team?",
        answer:
          "Students can try out during annual selections held in August...",
      },
      {
        id: 2,
        faq: "Are there competitions organized?",
        answer:
          "Yes, we participate in district and state-level football competitions...",
      },
    ],
  },
];

const firstSec = sportsData.slice(0, sportsData.length / 2);
const nextSec = sportsData.slice(sportsData.length / 2);

const Sports = () => {
  return (
    <section className="w-full bg-[#F9F9F9] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="pb-5">
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
