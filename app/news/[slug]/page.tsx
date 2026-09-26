import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toPlainText, type PortableTextBlock } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import { BLOG_QUERY, getSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import BlogPost from "@/components/BlogPost";
import AdmissionForm from "@/components/widgets/AdmissionForm";
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
    <section className="py-20 w-full px-4 md:px-12">
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
      <h1 className="text-3xl font-bold text-center">{blog.title}</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-10 relative">
        <div className="w-full md:w-3/4">
          <BlogPost
            title={blog.title}
            article={blog.article}
            featuredImage={blog.featuredImage?.asset?.url || ""}
            formattedDate={formattedDate}
          />
        </div>

        <div className="w-full md:w-1/3 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
}
