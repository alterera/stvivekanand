// app/news/page.tsx
import Image from "next/image";
import Link from "next/link";
import { sanityClient } from "@/lib/sanity";
import { ALL_BLOGS_QUERY } from "@/lib/queries";
import { BlogPost } from "@/types/index";

export default async function NewsPage() {
  const blogPosts: BlogPost[] = await sanityClient.fetch(ALL_BLOGS_QUERY);

  return (
    <section className="w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <h1 className="text-3xl font-bold text-center pb-2">News & Blog</h1>
        <p className="text-center text-sm">Stay updated with the latest news and blog posts.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {blogPosts.map((post) => (
            <Link key={post.slug.current} href={`/news/${post.slug.current}`}>
              <div className="rounded-lg shadow-md overflow-hidden cursor-pointer bg-[#0D3658] text-white">
                <Image
                  src={post.featuredImage.asset.url}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-200">
                    Published on {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}