import * as motion from "motion/react-client";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import { sanityFetch } from "@/lib/sanity";
import { FEE_STRUCTURE_QUERY } from "@/lib/queries";
import AdmissionFormSidebar from "@/components/widgets/AdmissionFormSidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type FeeDetail = {
  class: string;
  emi1: string;
  emi2: string;
  emi3: string;
  yearly: string;
};

type FeeStructureType = {
  _id: string;
  title: string;
  fees?: FeeDetail[];
};

const FeeStructure = async () => {
  const feeStructures = await sanityFetch<FeeStructureType[]>({
    query: FEE_STRUCTURE_QUERY,
    tags: ["feeStructure"],
  });

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-0 xl:px-4">
        <DynamicBreadcrumb />

        <div className="text-center mb-12 mt-5">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">Fee Structure 2026-27</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our school provides a transparent and structured fee system to ensure accessibility and
            affordability for all students.
          </p>
        </div>

        <div className="flex flex-col md:flex-row relative gap-5">
          <div className="w-full md:w-2/3">
            {feeStructures.map((structure, index) => (
              <motion.div
                key={structure._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 pt-2"
              >
                <h2 className="text-2xl font-semibold text-center pb-4 text-[#1D3557]">
                  {structure.title}
                </h2>
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#85193C] hover:bg-[#85193C]">
                        <TableHead className="font-bold text-white">Class</TableHead>
                        <TableHead className="font-bold text-white">1st Instalment</TableHead>
                        <TableHead className="font-bold text-white">2nd Instalment</TableHead>
                        <TableHead className="font-bold text-white">3rd Instalment</TableHead>
                        <TableHead className="text-right font-bold text-white">Yearly Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody style={{ fontFamily: "arial" }}>
                      {(structure.fees ?? []).map((fee, i) => (
                        <TableRow
                          key={i}
                          className={`group ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                        >
                          <TableCell className="font-semibold text-[#1D3557] group-hover:text-white">
                            {fee.class}
                          </TableCell>
                          <TableCell className="group-hover:text-white">₹{fee.emi1}</TableCell>
                          <TableCell className="group-hover:text-white">₹{fee.emi2}</TableCell>
                          <TableCell className="group-hover:text-white">₹{fee.emi3}</TableCell>
                          <TableCell className="text-right font-semibold group-hover:text-white">
                            ₹{fee.yearly}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </motion.div>
            ))}

            <div className="mt-16 bg-[#F1EEE9] p-10 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#1D3557] mb-6">Additional Information</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>One-Time Admission Fee (Non-refundable) is included in the other charges.</li>
                <li>Mode of Payment: Fees can be paid monthly/quarterly/annually.</li>
                <li>
                  Payment Methods: Online Payment, Bank Transfer, Cheque, or Cash at the School Office.
                </li>
                <li>
                  Late Fee Policy: Late payments will incur an additional charge of{" "}
                  <span className="font-sans font-semibold">₹500</span> after the due date.
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <AdmissionFormSidebar />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeStructure;
