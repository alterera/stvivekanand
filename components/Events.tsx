"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import useSWR from "swr";
import { sanityClient } from "@/lib/sanity";
import Link from "next/link";

// Define the type for an event
interface EventCard {
  _id: string;
  title: string;
  imageUrl: string;
  slug: string; // Add the slug field
}

// Define the Sanity query to fetch events
const EVENTS_QUERY = `*[_type == "event"] {
  _id,
  title,
  "imageUrl": images[0].asset->url,
  "slug": slug.current // Fetch the slug
}`;

// SWR fetcher function
const fetcher = (query: string) => sanityClient.fetch(query);

const Events = () => {
  // Fetch events data using SWR
  const { data: events, error, isLoading } = useSWR<EventCard[]>(EVENTS_QUERY, fetcher);

  // Show a loading state while data is being fetched
  if (isLoading) {
    return (
      <section className="relative w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-2">
            Events & Activities
          </h2>
          <p className="text-center mb-10">Loading events...</p>
        </div>
      </section>
    );
  }

  // Show an error message if data fetching fails
  if (error) {
    return (
      <section className="relative w-full bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-2">
            Events & Activities
          </h2>
          <p className="text-center mb-10">Failed to load events. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="relative w-full bg-white py-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Image src={'/assets/patterns/dots.png'} alt="pattern" height={100} width={100} className="hidden md:flex absolute top-16"/>
      <Image src={'/assets/patterns/hilly.png'} alt="pattern" height={100} width={100} className="absolute bottom-16 right-0"/>
      <Image src={'/assets/patterns/3-circle.png'} alt="pattern" height={100} width={180} className="absolute bottom-16 left-10 -rotate-12"/>
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        {/* Section Title */}
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold text-center text-[#1D3557] mb-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Events & Activities
          <Image src="/assets/patterns/curvy.png" alt="hilly" height={100} width={120} className="absolute top-10 left-[55%]"/>
        </motion.h2>
        <motion.p
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          The largest gamut of in-house sports facilities for any school, right
          in the city centre.
        </motion.p>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 xl:px-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {events?.map((event, index) => (
            <motion.div
              key={event._id} // Use the unique _id from Sanity as the key
              className="relative h-[200px] md:h-[250px] overflow-hidden group rounded-lg shadow-lg"
              // whileHover={{ scale: 1.05 }}
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
                <Link href={`/events/${event.slug}`}>
                  <Button
                    variant="outline"
                    className="w-fit bg-transparent text-white border-white hover:bg-white hover:text-[#1D3557]"
                  >
                    Read More
                  </Button>
                </Link>
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
            className="text-white bg-[#7B243D] hover:bg-[#E63946]/90 px-6 py-2 text-base z-10"
          >
            View All Events
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Events;