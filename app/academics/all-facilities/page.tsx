
import { getAcademicSections } from "@/app/academics/all-facilities/fetchSection";
import AcademicFacilitiesPage from "@/components/AcademicFacilitiesPage";

export default async function Page() {
  const sections = await getAcademicSections();
  return <AcademicFacilitiesPage sections={sections} />;
}
