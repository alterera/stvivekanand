import { getAcademicSections } from "@/app/academics/all-facilities/fetchSection";
import AcademicFacilitiesPage from "@/components/AcademicFacilitiesPage";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

export default async function Page() {
  const sections = await getAcademicSections();
  return (
    <>
      <section className="w-full px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <DynamicBreadcrumb />
          <div className="mt-5">
            <h1 className="text-center text-4xl font-semibold text-[#0D3658]">
              Academic Facilities
            </h1>
            <p className="text-center text-sm mb-10 text-gray-800">
              The central Building Consists of 50+ well-lit, fully equipped
              classrooms, a majority of them have been transformed into digital
              learning classrooms.
            </p>
          </div>
          <div className="flex flex-col md:flex-row relative gap-5">
            <div className="w-full">
              <AcademicFacilitiesPage sections={sections} />;
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
