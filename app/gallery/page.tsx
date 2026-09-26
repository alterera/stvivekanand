import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import GalleryGrid from "@/components/GalleryGrid";
import { sanityFetch } from "@/lib/sanity";
import { GALLERY_QUERY } from "@/lib/queries";
import { GalleryData } from "@/types/index";

export default async function GalleryPage() {
  const galleryData = await sanityFetch<GalleryData[]>({ query: GALLERY_QUERY, tags: ["gallery"] });

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557] text-center mt-8 mb-2">
          School Gallery
        </h1>
        <p className="text-center text-sm mb-8">See the glimpses of our school</p>
        <GalleryGrid items={galleryData ?? []} />
      </div>
    </section>
  );
}
