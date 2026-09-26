import * as motion from "motion/react-client";
import { CalendarCheck, FileText, School, UserCheck } from "lucide-react";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import AdmissionForm from "@/components/widgets/AdmissionForm";

const iconClass = "size-12 shrink-0 text-[#E63946]";

const admissionSteps = [
  {
    id: 1,
    title: "Step 1: Registration",
    description: "Fill out the online or offline admission form and submit it with the required details.",
    icon: <FileText className={iconClass} aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Step 2: Document Submission",
    description: "Submit required documents, including Birth Certificate or Transfer Certificate.",
    icon: <UserCheck className={iconClass} aria-hidden="true" />,
  },
  {
    id: 3,
    title: "Step 3: Interaction & Assessment",
    description: "For certain classes, an interaction session with the student and parents may be required.",
    icon: <CalendarCheck className={iconClass} aria-hidden="true" />,
  },
  {
    id: 4,
    title: "Step 4: Confirmation of Admission",
    description: "Once selected, complete the fee payment process to secure admission.",
    icon: <School className={iconClass} aria-hidden="true" />,
  },
];

const Admissions = () => {
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
        {/* Page Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Admission Procedure
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Enroll your child in a nurturing environment that promotes academic excellence, discipline, and holistic development.
          </p>
        </motion.div>

        {/* Admission Steps Section */}
        <div className="flex flex-col md:flex-row gap-5">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full md:w-2/3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {admissionSteps.map((step, index) => (
            <motion.div
              key={step.id}
              className="bg-[#002147] p-8 rounded-lg shadow-lg hover:shadow-xl 
              transition-transform hover:scale-105 duration-300 text-white flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                {step.icon}
                <h2 className="text-2xl font-bold">{step.title}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-200">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="w-full md:w-1/3 p-5 bg-gray-200 h-fit rounded-md">
          <AdmissionForm />
        </div>
        </div>

        {/* Admission Guidelines Section */}
        <motion.div 
          className="mt-16 bg-[#F1EEE9] p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#1D3557] mb-6">General Guidelines for Parents</h2>
          <ul className="space-y-4 text-gray-700 list-disc pl-4 marker:text-[#85193C]">
            <li>Parents should not enter classrooms during school hours.</li>
            <li>Meetings with teachers should be arranged through the Principal.</li>
            <li>Ensure regularity, punctuality, and discipline in your child&apos;s school life.</li>
            <li>Check the student&apos;s diary daily for homework and school notices.</li>
            <li>Inform the school about any address changes.</li>
            <li>Children who are sick should not be sent to school.</li>
            <li>Avoid criticizing teachers or the school in front of children.</li>
            <li>All communication should be addressed to the Principal.</li>
          </ul>
        </motion.div>

        {/* Admission Document Requirements */}
        <motion.div 
          className="mt-16 bg-[#457B9D] text-white p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold mb-6">Required Documents</h2>
          <ul className="space-y-4 text-gray-200 list-disc pl-4 marker:text-[#85193C]">
            <li>Transfer Certificate (TC) for students transferring from another school.</li>
            <li>Birth Certificate for students enrolling in school for the first time.</li>
            <li>Previous Academic Records (for classes above Grade 1).</li>
            <li>Recent Passport-Size Photographs of the student.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Admissions;
