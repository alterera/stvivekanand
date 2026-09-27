import { sanityFetch } from "@/lib/sanity";
import { TC_UPDATES_QUERY } from "@/lib/queries";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import TCUpdatesTable, { type TransferCertificate } from "@/components/TCUpdatesTable";

export default async function TCUpdatesPage() {
  const records = await sanityFetch<TransferCertificate[]>({
    query: TC_UPDATES_QUERY,
    tags: ["transferCertificate"],
  });

  return (
    <section className="w-full bg-[#F9F9F9] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />

        <div className="text-center mb-12 mt-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">TC Updates</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Search for your ward&apos;s name below to find and download their transfer certificate.
          </p>
        </div>

        <TCUpdatesTable records={records} />
      </div>
    </section>
  );
}
