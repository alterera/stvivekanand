"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface EventCard {
  id: number;
  title: string;
  imageUrl: string;
}

const eventsContent: EventCard[] = [
  { id: 1, title: "Annual Sports Meet", imageUrl: "/assets/events/event-1.png" },
  { id: 2, title: "Science Exhibition", imageUrl: "/assets/events/event-2.png" },
  { id: 3, title: "Cultural Festival", imageUrl: "/assets/events/event-3.png" },
  { id: 4, title: "Independence Day", imageUrl: "/assets/events/event-1.png" },
  { id: 5, title: "Annual Function", imageUrl: "/assets/events/event-2.png" },
  { id: 6, title: "Teachers Day", imageUrl: "/assets/events/event-3.png" },
  { id: 7, title: "Art Exhibition", imageUrl: "/assets/events/event-1.png" },
  { id: 8, title: "Sports Tournament", imageUrl: "/assets/events/event-2.png" },
];

const Events = () => {
  return (
    <motion.section 
      className="w-full bg-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Section Title */}
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Events & Activities
        </motion.h2>

        {/* Events Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {eventsContent.map((event, index) => (
            <motion.div
              key={event.id}
              className="relative h-[200px] md:h-[300px] overflow-hidden group rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Image */}
              <Image
                src={event.imageUrl}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              {/* Overlay */}
              <motion.div 
                className="absolute inset-0 bg-black/40 transition-opacity duration-300 
                group-hover:bg-black/60"
                whileHover={{ opacity: 0.8 }}
              />

              {/* Content */}
              <motion.div 
                className="absolute inset-0 p-4 flex flex-col justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg md:text-2xl font-bold text-white mb-3 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  {event.title}
                </h4>
                <Button 
                  variant="outline"
                  className="w-fit bg-transparent text-white border-white hover:bg-white hover:text-[#1D3557]"
                >
                  Read More
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="destructive"
            className="text-white bg-[#E63946] hover:bg-[#E63946]/90 px-6 py-2 text-base"
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Events;
