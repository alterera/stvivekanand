import { sanityClient } from "@/lib/sanity";
import { EVENT_QUERY } from "@/lib/queries";
import { notFound } from "next/navigation";
import SwiperComponent from "@/components/SwiperComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Rss } from "lucide-react";

// Define a type for the image object
type ImageAsset = {
  asset: {
    url: string;
  };
};

// Define a type for the post object
type RelatedPost = {
  slug: {
    current: string;
  };
  title: string;
};

// Define the correct type for PageProps
type PageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: PageProps) {
  // Get the slug directly from params (no need to await)
  const { slug } = await params;

  // Fetch the event data using the slug
  const event = await sanityClient.fetch(EVENT_QUERY, { slug });

  // If the event is not found, return a 404 page
  if (!event) {
    notFound();
  }

  // Extract image URLs from the event
  const imageUrls = event.images.map((image: ImageAsset) => image.asset.url);

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h1 className="text-center text-3xl font-semibold mb-2">
          {event.title}
        </h1>
        <p className="text-sm text-center mb-8">{event.subtitle}</p>

        <div className="flex gap-5 flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <SwiperComponent images={imageUrls} />
            <p className="py-5">{event.description}</p>
          </div>

          <div className="w-full md:w-1/3 h-fit sticky top-5">
            <div className="flex flex-col gap-5">
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
                          <SelectItem value="null">
                            Choose your class
                          </SelectItem>
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

              <div className="bg-gray-200 p-5">
                {/* Display related posts */}
                {event.relatedPosts && (
                  <div>
                    <h3 className="text-2xl font-semibold mb-5 flex items-center gap-2">
                      <Rss />
                      Related Blog Posts
                    </h3>
                    <ul className="list-disc pl-4 text-lg font-semibold ">
                      {event.relatedPosts.map((post: RelatedPost) => (
                        <li key={post.slug.current}>
                          <a
                            href={`/blog/${post.slug.current}`}
                            className="hover:text-[#85193C]"
                          >
                            {post.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}