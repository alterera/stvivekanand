// app/curricular/[slug]/page.tsx
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { CURRICULAR_QUERY } from "@/lib/queries";
import { CurricularData } from "@/types/index";

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
        <div className="w-full md:w-1/3 p-5 bg-gray-200 h-fit rounded-md sticky top-0">
          <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
            Admission Open for 2025-26
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input type="text" placeholder="Name" className="bg-gray-50" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input type="tel" placeholder="Mobile No." className="bg-gray-50" />
              </div>
              <div>
                <Input type="text" placeholder="City" className="bg-gray-50" />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Academic Year
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select your academic year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024-2025">2024 - 2025</SelectItem>
                    <SelectItem value="2023-2024">2023 - 2024</SelectItem>
                    <SelectItem value="2022-2023">2022 - 2023</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Class
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose your class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="null">Choose your class</SelectItem>
                    <SelectItem value="nursery">Nursery</SelectItem>
                    <SelectItem value="lkg">LKG</SelectItem>
                    <SelectItem value="ukg">UKG</SelectItem>
                    {[...Array(12)].map((_, i) => (
                      <SelectItem key={i} value={`class${i + 1}`}>
                        Class {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  School Type
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose school type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="day">Day Scholar</SelectItem>
                    <SelectItem value="boarding">Boarding</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-[#85193C] hover:bg-[#85193C]/90 text-white"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;