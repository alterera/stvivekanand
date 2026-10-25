import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { toPlainText, type PortableTextBlock } from "next-sanity";
import { sanityFetch } from "@/lib/sanity";
import { NOTICE_QUERY, getSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import BlogPost from "@/components/BlogPost";
import AdmissionFormSidebar from "@/components/widgets/AdmissionFormSidebar";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import JsonLd from "@/components/JsonLd";

interface NoticeData {
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

function getNotice(slug: string) {
  return sanityFetch<NoticeData | null>({ query: NOTICE_QUERY, params: { slug }, tags: ["notice"] });
}

function describe(notice: NoticeData) {
  const excerpt = notice.excerpt?.trim() ?? "";
  return truncate(excerpt.length >= 50 ? excerpt : toPlainText(notice.article ?? []) || excerpt);
}

export async function generateStaticParams() {
  const slugs = await getSlugs("notice");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const notice = await getNotice(slug);

  if (!notice) {
    return notFoundMetadata("Notice Not Found", "The requested notice could not be found.");
  }

  const metadata = pageMetadata({
    title: notice.title,
    description: describe(notice),
    path: `/notices/${slug}`,
    image: notice.featuredImage?.asset?.url,
    imageAlt: notice.title,
    type: "article",
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "article",
      publishedTime: notice.publishedAt,
      modifiedTime: notice._updatedAt,
    },
  };
}

export default async function NoticeArticlePage({ params }: Props) {
  const { slug } = await params;
  const notice = await getNotice(slug);

  if (!notice) {
    notFound();
  }

  const formattedDate = new Date(notice.publishedAt).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <JsonLd
          data={articleJsonLd({
            type: "Article",
            headline: notice.title,
            description: describe(notice),
            path: `/notices/${slug}`,
            image: notice.featuredImage?.asset?.url,
            datePublished: notice.publishedAt,
            dateModified: notice._updatedAt,
          })}
        />

        <DynamicBreadcrumb currentLabel={notice.title} />

        <header className="mb-10 mt-6 max-w-4xl">
          <p className="mb-3 text-sm text-gray-500">Published on {formattedDate}</p>
          <h1 className="text-3xl font-bold leading-tight text-[#1D3557] md:text-4xl">{notice.title}</h1>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <article className="min-w-0 w-full lg:w-2/3">
            <BlogPost
              title={notice.title}
              article={notice.article}
              featuredImage={notice.featuredImage?.asset?.url || ""}
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
