import MandatoryDisclosure from "@/components/MandatoryDisclosure";
import { sanityClient } from "@/lib/sanity";
import { MANDATORY_DISCLOSURE_QUERY } from "@/lib/queries";

const Page = async () => {
  const data = await sanityClient.fetch(MANDATORY_DISCLOSURE_QUERY);

  if (!data) {
    return <div>Data not found.</div>;
  }

  return <MandatoryDisclosure data={data} />;
};

export default Page;
