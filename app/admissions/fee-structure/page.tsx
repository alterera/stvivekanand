"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaSchool, FaBook, FaUserGraduate } from "react-icons/fa";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";
import { sanityClient } from "@/lib/sanity";
import { FEE_STRUCTURE_QUERY } from "@/lib/queries";
import AdmissionForm from "@/components/widgets/AdmissionForm";

const iconMap: Record<string, React.JSX.Element> = {
  FaSchool: <FaSchool className="text-4xl text-[#E63946]" />,
  FaBook: <FaBook className="text-4xl text-[#E63946]" />,
  FaUserGraduate: <FaUserGraduate className="text-4xl text-[#E63946]" />,
  FaRupeeSign: <FaRupeeSign className="text-4xl text-[#E63946]" />,
};

type FeeStructureType = {
  _id: string;
  category: string;
  annualFee: string;
  tuitionFee: string;
  otherCharges: string;
  icon: string;
};

const FeeStructure = () => {
  const [feeStructure, setFeeStructure] = useState<FeeStructureType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityClient.fetch(FEE_STRUCTURE_QUERY);
      setFeeStructure(data);
    };
    fetchData();
  }, []);

  return (
    <motion.section
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-0 xl:px-4">
        <DynamicBreadcrumb />

        <motion.div
          className="text-center mb-12 mt-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Fee Structure 2025-26
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our school provides a transparent and structured fee system to
            ensure accessibility and affordability for all students.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row relative gap-5">
          <div className="w-full md:w-2/3">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {feeStructure.map((fee, index) => (
                <motion.div
                  key={fee._id}
                  className="bg-[#002147] p-6 rounded-lg shadow-lg hover:shadow-xl 
              transition-transform hover:scale-105 duration-300 text-gray-100 flex flex-col gap-4"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4">
                    {iconMap[fee.icon]}
                    <h3 className="text-xl font-bold">{fee.category}</h3>
                  </div>

                  <div className="text-gray-300 font-sans space-y-2">
                    <p>
                      Annual Fee:{" "}
                      <span className="font-semibold text-white">
                        ₹{fee.annualFee}
                      </span>
                    </p>
                    <p>
                      Tuition Fee:{" "}
                      <span className="font-semibold text-white">
                        ₹{fee.tuitionFee}
                      </span>
                    </p>
                    <p>
                      Other Charges:{" "}
                      <span className="font-semibold text-white">
                        ₹{fee.otherCharges}
                      </span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-16 bg-[#F1EEE9] p-10 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-[#1D3557] mb-6">
                Additional Information
              </h3>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>
                  One-Time Admission Fee (Non-refundable) is included in the
                  other charges.
                </li>
                <li>
                  Mode of Payment: Fees can be paid monthly/quarterly/annually.
                </li>
                <li>
                  Payment Methods: Online Payment, Bank Transfer, Cheque, or
                  Cash at the School Office.
                </li>
                <li>
                  Late Fee Policy: Late payments will incur an additional charge
                  of <span className="font-sans font-semibold">₹500</span> after
                  the due date.
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="w-full md:w-1/3 p-5 bg-gray-200 h-fit rounded-md sticky top-5">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default FeeStructure;
