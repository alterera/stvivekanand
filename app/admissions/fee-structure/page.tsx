"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRupeeSign, FaSchool, FaBook, FaUserGraduate } from "react-icons/fa";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const feeStructure = [
  {
    id: 1,
    category: "Nursery - Class 5",
    annualFee: "₹25,000",
    tuitionFee: "₹2,500/month",
    otherCharges: "₹5,000 (Admission + Misc.)",
    icon: <FaSchool className="text-4xl text-[#E63946]" />,
  },
  {
    id: 2,
    category: "Class 6 - Class 8",
    annualFee: "₹30,000",
    tuitionFee: "₹3,000/month",
    otherCharges: "₹5,500 (Admission + Misc.)",
    icon: <FaBook className="text-4xl text-[#E63946]" />,
  },
  {
    id: 3,
    category: "Class 9 - Class 10",
    annualFee: "₹35,000",
    tuitionFee: "₹3,500/month",
    otherCharges: "₹6,000 (Admission + Misc.)",
    icon: <FaUserGraduate className="text-4xl text-[#E63946]" />,
  },
  {
    id: 4,
    category: "Class 11 - Class 12 (Science)",
    annualFee: "₹40,000",
    tuitionFee: "₹4,000/month",
    otherCharges: "₹6,500 (Admission + Misc.)",
    icon: <FaRupeeSign className="text-4xl text-[#E63946]" />,
  },
  {
    id: 5,
    category: "Class 11 - Class 12 (Commerce)",
    annualFee: "₹38,000",
    tuitionFee: "₹3,800/month",
    otherCharges: "₹6,500 (Admission + Misc.)",
    icon: <FaRupeeSign className="text-4xl text-[#E63946]" />,
  },
];

const FeeStructure = () => {
  return (
    <motion.section 
      className="w-full bg-white py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="py-5">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Admissions</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Fee Structure</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        {/* Page Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
            Fee Structure 2025-26
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Our school provides a transparent and structured **fee system** to ensure accessibility 
            and affordability for all students.
          </p>
        </motion.div>

        {/* Fee Structure Table */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {feeStructure.map((fee, index) => (
            <motion.div
              key={fee.id}
              className="bg-[#002147] p-6 rounded-lg shadow-lg hover:shadow-xl 
              transition-transform hover:scale-105 duration-300 text-white flex flex-col gap-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4">
                {fee.icon}
                <h3 className="text-xl font-bold">{fee.category}</h3>
              </div>

              {/* Fee Breakdown */}
              <div className="text-gray-300">
                <p>📌 **Annual Fee:** {fee.annualFee}</p>
                <p>📌 **Tuition Fee:** {fee.tuitionFee}</p>
                <p>📌 **Other Charges:** {fee.otherCharges}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Information */}
        <motion.div 
          className="mt-16 bg-[#F1EEE9] p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1D3557] mb-6">Additional Information</h3>
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>📌 One-Time Admission Fee (Non-refundable) is included in the other charges.</li>
            <li>📌 Mode of Payment: Fees can be paid monthly/quarterly/annually.</li>
            <li>📌 Payment Methods: Online Payment, Bank Transfer, Cheque, or Cash at the School Office.</li>
            <li>📌 Late Fee Policy: Late payments will incur an additional charge of ₹500 after the due date.</li>
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeeStructure;
