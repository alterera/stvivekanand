import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/lib/sanity";
import { ALL_BLOGS_QUERY } from "@/lib/queries";
import { BlogPost } from "@/types/index";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import AdmissionFormSidebar from "@/components/widgets/AdmissionFormSidebar";

export default async function NewsPage() {
  const blogPosts = await sanityFetch<BlogPost[]>({ query: ALL_BLOGS_QUERY, tags: ["blog"] });

  return (
    <section className="relative w-full overflow-hidden bg-[#F9F9F9] py-16 md:py-20">
      <Image
        src="/assets/patterns/dots.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={100}
        className="pointer-events-none absolute right-8 top-20 opacity-30"
      />
      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <DynamicBreadcrumb />

        <header className="mb-10 mt-6 text-center">
          <h1 className="text-3xl font-bold text-[#1D3557] md:text-4xl">News & Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Stay updated with the latest news, achievements, and stories from St. Vivekanand School.
          </p>
        </header>

        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-12">
          <div className="w-full min-w-0 lg:w-2/3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {blogPosts.map((post, index) => {
                const imageUrl = post.featuredImage?.asset?.url;
                return (
                  <Link
                    key={post.slug.current}
                    href={`/news/${post.slug.current}`}
                    className="group overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden bg-[#0D3658]">
                      {imageUrl ? (
                        <Image
                          src={imageUrl}
                          alt={post.title}
                          width={400}
                          height={250}
                          loading={index < 3 ? "eager" : "lazy"}
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-white/60 text-sm">
                          St. Vivekanand School
                        </div>
                      )}
                    </div>
                    <div className="p-5">
                      <h2 className="text-lg font-bold text-[#1D3557] group-hover:text-[#85193C] line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-gray-500">
                        {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {blogPosts.length === 0 && (
              <p className="py-16 text-center text-gray-500">No posts published yet.</p>
            )}
          </div>

          <aside className="w-full lg:w-1/3">
            <AdmissionFormSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}
