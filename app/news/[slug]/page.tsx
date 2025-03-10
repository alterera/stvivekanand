import React from "react";
import { sanityClient } from "@/lib/sanity";
import { BLOG_QUERY } from "@/lib/queries";
import BlogPost from "@/components/BlogPost";
import { notFound } from "next/navigation";
import { PortableTextBlock } from "next-sanity";
import AdmissionForm from "@/components/widgets/AdmissionForm";

interface BlogData {
  title: string;
  article: PortableTextBlock[];
  featuredImage?: {
    asset?: {
      url: string;
    };
  };
  publishedAt: string;
}

type Params = Promise<{ slug: string }>;

const Page = async ({ params }: { params: Params }) => {
  const resolvedParams = await params; // Await the params Promise
  const { slug } = resolvedParams;

  const blogData: BlogData = await sanityClient.fetch(BLOG_QUERY, { slug });

  if (!blogData) {
    notFound();
  }

  return (
    <>
      <section className="py-20 w-full px-4 md:px-12">
        <h1 className="text-3xl font-bold text-center">{blogData.title}</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-10 relative">
          <div className="w-full md:w-3/4">
            <BlogPost
              title={blogData.title}
              article={blogData.article}
              featuredImage={blogData.featuredImage?.asset?.url || ""}
              publishedAt={blogData.publishedAt}
            />
          </div>

          <div className="w-full md:w-1/3 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
