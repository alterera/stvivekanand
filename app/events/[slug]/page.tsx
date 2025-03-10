import React from "react";
import { sanityClient } from "@/lib/sanity";
import { EVENT_QUERY } from "@/lib/queries";
import EventPost from "@/components/EventPost";
import { notFound } from "next/navigation";
import AdmissionForm from "@/components/widgets/AdmissionForm";

interface EventData {
  title: string;
  subtitle: string;
  description: string;
  images: { asset: { url: string } }[];
}

type Params = Promise<{ slug: string }>;

const Page = async ({ params }: { params: Params }) => {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const eventData: EventData = await sanityClient.fetch(EVENT_QUERY, { slug });

  if (!eventData) {
    notFound();
  }

  return (
    <>
      <section className="w-full px-4 md:px-12 py-20">
        <h1 className="text-3xl font-bold text-center mb-2">
          {eventData.title}
        </h1>
        {eventData.subtitle && (
          <h2 className="text-sm text-gray-500 text-center mb-8">
            {eventData.subtitle}
          </h2>
        )}

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative gap-5">
          <div className="w-full md:w-3/4">
            <EventPost
              description={eventData.description}
              images={eventData.images}
            />
          </div>
          <div className="w-full md:w-1/4 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
