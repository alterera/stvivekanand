import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/lib/sanity";
import { CURRICULAR_QUERY, getSlugs } from "@/lib/queries";
import { notFoundMetadata, pageMetadata, truncate } from "@/lib/seo";
import { articleJsonLd } from "@/lib/jsonld";
import AdmissionForm from "@/components/widgets/AdmissionForm";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import JsonLd from "@/components/JsonLd";

interface CurricularData {
  title: string;
  subtitle?: string;
  description?: string;
  image?: { asset?: { url: string } };
}

type Props = { params: Promise<{ slug: string }> };

function getActivity(slug: string) {
  return sanityFetch<CurricularData | null>({
    query: CURRICULAR_QUERY,
    params: { slug },
    tags: ["curricular"],
  });
}

function describe(activity: CurricularData) {
  return truncate(activity.subtitle || activity.description || activity.title);
}

export async function generateStaticParams() {
  const slugs = await getSlugs("curricular");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const activity = await getActivity(slug);

  if (!activity) {
    return notFoundMetadata(
      "Activity Not Found",
      "The requested co-curricular activity could not be found.",
    );
  }

  return pageMetadata({
    title: activity.title,
    description: describe(activity),
    path: `/co-curricular/${slug}`,
    image: activity.image?.asset?.url,
    imageAlt: activity.title,
    type: "article",
  });
}

export default async function CoCurricularPage({ params }: Props) {
  const { slug } = await params;
  const activity = await getActivity(slug);

  if (!activity) {
    notFound();
  }

  const imageUrl = activity.image?.asset?.url;

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <JsonLd
        data={articleJsonLd({
          headline: activity.title,
          description: describe(activity),
          path: `/co-curricular/${slug}`,
          image: imageUrl,
        })}
      />
      <DynamicBreadcrumb currentLabel={activity.title} />
      <h1 className="text-3xl font-bold text-center pb-2">{activity.title}</h1>
      {activity.subtitle && (
        <p className="text-center text-sm px-6 md:px-0">{activity.subtitle}</p>
      )}

      <div className="flex flex-col md:flex-row gap-10 mt-10 relative px-6 md:px-0">
        <div className="w-full md:w-2/3">
          {imageUrl && (
            <Image
              src={imageUrl}
              width={1000}
              height={625}
              fetchPriority="high"
              sizes="(max-width: 768px) 100vw, 66vw"
              alt={activity.title}
              className="w-full h-auto"
            />
          )}
          <p className="py-5 whitespace-pre-line">{activity.description}</p>
        </div>
        <div className="w-full md:w-1/3 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
          <AdmissionForm />
        </div>
      </div>
    </section>
  );
}
