import { notFound } from "next/navigation";
import MandatoryDisclosure from "@/components/MandatoryDisclosure";
import { sanityFetch } from "@/lib/sanity";
import { MANDATORY_DISCLOSURE_QUERY } from "@/lib/queries";
import { MandatoryDisclosureData } from "@/types/index";

const Page = async () => {
  const data = await sanityFetch<MandatoryDisclosureData | null>({
    query: MANDATORY_DISCLOSURE_QUERY,
    tags: ["mandatoryDisclosure"],
  });

  if (!data) {
    notFound();
  }

  return <MandatoryDisclosure data={data} />;
};

export default Page;
