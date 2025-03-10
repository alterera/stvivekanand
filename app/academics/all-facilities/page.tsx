import { getAcademicSections } from "@/app/academics/all-facilities/fetchSection";
import AcademicFacilitiesPage from "@/components/AcademicFacilitiesPage";
import AdmissionForm from "@/components/widgets/AdmissionForm";

export default async function Page() {
  const sections = await getAcademicSections();
  return (
    <>
      <section className="w-full px-6 md:px-12 py-24">
        <h1 className="text-center text-4xl font-semibold">
          Academic Facilities
        </h1>
        <p className="text-center text-sm mb-10">
          The central Building Consists of 50+ well-lit, fully equipped
          classrooms, a majority of them have been transformed into digital
          learning classrooms.
        </p>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row relative gap-5">
          <div className="w-full md:w-4/4">
            <AcademicFacilitiesPage sections={sections} />;
          </div>

          <div className="w-full md:w-1/4 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
            <AdmissionForm />
          </div>
        </div>
      </section>
    </>
  );
}
