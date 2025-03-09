// app/news/[slug]/page.tsx
import Image from "next/image";
import { sanityClient } from "@/lib/sanity";
import { BLOG_QUERY } from "@/lib/queries";
import { BlogPostDetails } from "@/types/index";
import { PortableText } from "@portabletext/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blogPost: BlogPostDetails = await sanityClient.fetch(BLOG_QUERY, {
    slug,
  });

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0 flex gap-5">
        <div className="flex flex-col md:flex-row gap-10 md:w-2/3">
          <div className="w-full">
            <Image
              src={blogPost.featuredImage.asset.url}
              alt={blogPost.title}
              width={800}
              height={400}
              className="w-full h-auto rounded-lg"
            />

            <h1 className="text-3xl font-bold py-4">{blogPost.title}</h1>
            <p className="text-sm">
              Published on {new Date(blogPost.publishedAt).toLocaleDateString()}
            </p>

            <div className="prose max-w-none mt-6">
              {/* Render rich text content using PortableText */}
              <PortableText
                value={blogPost.article}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="my-4">{children}</p>
                    ),
                  },
                }}
              />
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/3 relative">
          <div className="sticky top-5 flex flex-col gap-5">
          <div className="bg-[#0D3658] py-4 px-2 uppercase text-4xl font-bold  text-center text-white">
              <h3 className=" mb-6">
                Admission Open
              </h3>

              <h2 className="text-yellow-300 mb-5">nursery to class xii</h2>
              <p className="mb-5">2025-26 session</p>
              <p className="text-3xl font-semibold ">apply now</p>
            </div>
            <div className="bg-gray-200 p-5 rounded-md">
              <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
                Admission Open for 2025-26
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="Mobile No."
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="City"
                      className="bg-gray-50"
                    />
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
        </div>
      </div>
    </section>
  );
}
