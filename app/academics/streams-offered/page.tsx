import * as motion from "motion/react-client";
import { Atom, Calculator, GraduationCap } from "lucide-react";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import AdmissionFormSidebar from "@/components/widgets/AdmissionFormSidebar";

const streams = [
  {
    id: 1,
    title: "Science Group",
    description: "A strong foundation in scientific principles and analytical skills.",
    icon: <Atom className="size-12 shrink-0 text-[#E63946]" aria-hidden="true" />,
    subjects: ["English", "Physics", "Chemistry", "Mathematics", "Biology"],
    optional: ["Physical Education", "Informatics", "Hindi"],
  },
  {
    id: 2,
    title: "Commerce Group",
    description: "Comprehensive business education with financial and economic insights.",
    icon: <Calculator className="size-12 shrink-0 text-[#E63946]" aria-hidden="true" />,
    subjects: ["English", "Accountancy", "Business Organization", "Economics"],
    optional: ["Hindi", "Physical Education", "Informatics"],
  },
];

const Streams = () => {
  return (
    <motion.section 
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <DynamicBreadcrumb />

        <motion.div
          className="my-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold text-[#1D3557] md:text-4xl">
            Streams Offered at St. Vivekanand School
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Our school provides a structured academic journey from UKG to Class XII, offering
            specialized streams in Science and Commerce for senior secondary students.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          <div className="w-full min-w-0 lg:w-2/3">
            <motion.div
              className="mb-16 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg bg-[#457B9D] px-6 py-10 text-white shadow-lg">
                <GraduationCap className="mx-auto mb-4 size-12 text-white" aria-hidden="true" />
                <h2 className="text-2xl font-bold">Complete Academic Journey</h2>
                <p className="mx-auto mt-3 max-w-3xl text-gray-200">
                  At St. Vivekanand School, we nurture students from UKG to Class XII with a
                  balanced curriculum focusing on academic excellence, leadership, and personal growth.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 gap-8 md:grid-cols-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {streams.map((stream, index) => (
                <motion.div
                  key={stream.id}
                  className="flex flex-col gap-4 rounded-lg bg-[#002147] p-8 text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    {stream.icon}
                    <h2 className="text-2xl font-bold">{stream.title}</h2>
                  </div>

                  <p className="text-gray-200">{stream.description}</p>

                  <div>
                    <h3 className="text-lg font-semibold underline">Core Subjects:</h3>
                    <ul className="mt-2 list-disc pl-6 text-gray-300">
                      {stream.subjects.map((subject) => (
                        <li key={subject}>{subject}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold underline">Optional Subjects:</h3>
                    <ul className="mt-2 list-disc pl-6 text-gray-300">
                      {stream.optional.map((subject) => (
                        <li key={subject}>{subject}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <aside className="w-full lg:w-1/3">
            <AdmissionFormSidebar />
          </aside>
        </div>
      </div>
    </motion.section>
  );
};

export default Streams;
