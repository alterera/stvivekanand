import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toPlainText, type PortableTextBlock } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import { BLOG_QUERY, getSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import BlogPost from "@/components/BlogPost";
import AdmissionFormSidebar from "@/components/widgets/AdmissionFormSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import JsonLd from "@/components/JsonLd";

interface BlogData {
  title: string;
  excerpt?: string;
  article: PortableTextBlock[];
  featuredImage?: {
    asset?: {
      url: string;
    };
  };
  publishedAt: string;
  _updatedAt?: string;
}

type Props = { params: Promise<{ slug: string }> };

function getBlog(slug: string) {
  return sanityFetch<BlogData | null>({ query: BLOG_QUERY, params: { slug }, tags: ["blog"] });
}

/** Short excerpts (keyword-only text entered in Sanity) fall back to the article body. */
function describe(blog: BlogData) {
  const excerpt = blog.excerpt?.trim() ?? "";
  return truncate(excerpt.length >= 50 ? excerpt : toPlainText(blog.article ?? []) || excerpt);
}

export async function generateStaticParams() {
  const slugs = await getSlugs("blog");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    return notFoundMetadata("News Not Found", "The requested news article could not be found.");
  }

  const metadata = pageMetadata({
    title: blog.title,
    description: describe(blog),
    path: `/news/${slug}`,
    image: blog.featuredImage?.asset?.url,
    imageAlt: blog.title,
    type: "article",
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: blog.publishedAt,
      modifiedTime: blog._updatedAt,
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) {
    notFound();
  }

  const formattedDate = new Date(blog.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <JsonLd
          data={articleJsonLd({
            type: "NewsArticle",
            headline: blog.title,
            description: describe(blog),
            path: `/news/${slug}`,
            image: blog.featuredImage?.asset?.url,
            datePublished: blog.publishedAt,
            dateModified: blog._updatedAt,
          })}
        />

        <DynamicBreadcrumb currentLabel={blog.title} />

        <header className="mt-6 mb-10 max-w-4xl">
          <p className="text-sm text-gray-500 mb-3">Published on {formattedDate}</p>
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557] leading-tight">
            {blog.title}
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <article className="w-full lg:w-2/3 min-w-0">
            <BlogPost
              title={blog.title}
              article={blog.article}
              featuredImage={blog.featuredImage?.asset?.url || ""}
            />
          </article>

          <aside className="w-full lg:w-1/3">
            <AdmissionFormSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}
