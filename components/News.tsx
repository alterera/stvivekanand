import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import NewsSlider from "./NewsSlider";
import { sanityFetch } from "@/lib/sanity";
import { HOME_BLOGS_QUERY } from "@/lib/queries";
import { BlogPost } from "@/types/index";

const formatNewsDate = (value: string) =>
  new Date(value).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" });

const News = async () => {
  const blogPosts = await sanityFetch<BlogPost[]>({ query: HOME_BLOGS_QUERY, tags: ["blog"] }).catch(
    () => [] as BlogPost[],
  );

  return (
    <motion.section
      className="relative w-full bg-[#457B9D] pt-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      style={{
        backgroundImage: `url('/assets/background/stvivek.png')`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Image
        src="/assets/patterns/line-circle-half.png"
        alt=""
        aria-hidden="true"
        height={100}
        width={180}
        className="hidden md:flex absolute bottom-5 right-10"
      />
      <div className="max-w-7xl mx-auto md:px-8 z-10">
        <h2 className="relative text-3xl md:text-4xl font-bold text-center text-white mb-2">
          News & Updates
        </h2>
        <p className="text-center text-white mb-10">
          Achievements, announcements, and stories from our students and teachers.
        </p>

        <div className="md:hidden">
          <NewsSlider posts={blogPosts} />
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 xl:px-4">
          {blogPosts.map((post) => (
            <div key={post.slug.current} className="bg-[#0D3658] overflow-hidden shadow-md rounded-sm">
              <div className="relative h-48 w-full">
                {post.featuredImage?.asset?.url && (
                  <Image
                    src={post.featuredImage.asset.url}
                    alt={post.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <p className="text-xs text-gray-200 font-medium mb-2">{formatNewsDate(post.publishedAt)}</p>
                <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
                <Button
                  asChild
                  className="w-full text-white font-semibold bg-[#85193C] hover:bg-[#E63946]/90 transition-all duration-300"
                >
                  <Link href={`/news/${post.slug.current}`} aria-label={`Read more: ${post.title}`}>
                    Read More
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-5">
          <Button
            asChild
            variant="destructive"
            className="text-white bg-[#85193C] hover:bg-[#E63946]/90 p-4 text-sm mb-10"
          >
            <Link href="/news">View All Updates</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default News;
