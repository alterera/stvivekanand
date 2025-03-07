import { sanityClient } from "@/lib/sanity";

export async function getAcademicSections() {
  return await sanityClient.fetch(`*[_type == "section"] | order(_createdAt asc)`);
}
