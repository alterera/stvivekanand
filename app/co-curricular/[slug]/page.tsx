import Image from "next/image";
import React from "react";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { CURRICULAR_QUERY } from "@/lib/queries";
import { CurricularData } from "@/types/index";
import AdmissionForm from "@/components/widgets/AdmissionForm";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

const socialLinks = [
  {
    url: "#",
    icon: "/assets/icons/fb.png",
  },
  {
    url: "#",
    icon: "/assets/icons/insta.png",
  },
  {
    url: "#",
    icon: "/assets/icons/whatsapp.png",
  },
  {
    url: "#",
    icon: "/assets/icons/yt.png",
  },
];

const Page = async ({ params }: PageParams) => {
  // Await the params Promise
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  const curricularData: CurricularData = await sanityClient.fetch(CURRICULAR_QUERY, {
    slug, // Use the resolved slug
  });

  if (!curricularData) {
    return <div>Co-curricular activity not found.</div>;
  }

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <DynamicBreadcrumb />
      <h1 className="text-3xl font-bold text-center pb-2">{curricularData.title}</h1>
      <p className="text-center text-sm px-6 md:px-0">{curricularData.subtitle}</p>

      <div className="flex flex-col md:flex-row gap-10 mt-10 relative px-6 md:px-0">
        <div className="w-full md:w-2/3">
          <Image
            src={curricularData.image.asset.url}
            height={100}
            width={500}
            alt={curricularData.title}
            className="w-full"
          />
          <p className="py-5">{curricularData.description}</p>

          <div className="flex gap-2 items-center font-semibold">
            <p>Connect Now</p>
            {socialLinks.map((link, index) => (
              <Link key={index} href={link.url}>
                <Image
                  src={link.icon}
                  height={25}
                  width={25}
                  alt={link.url.slice(0, 3)}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
};

export default Page;