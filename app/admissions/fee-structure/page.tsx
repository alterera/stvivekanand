"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";
import { sanityClient } from "@/lib/sanity";
import { FEE_STRUCTURE_QUERY } from "@/lib/queries";
import AdmissionForm from "@/components/widgets/AdmissionForm";
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
  fees: FeeDetail[];
};

const FeeStructure = () => {
  const [feeStructures, setFeeStructures] = useState<FeeStructureType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await sanityClient.fetch(FEE_STRUCTURE_QUERY);
      setFeeStructures(data);
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
            {feeStructures.map((structure, index) => (
              <motion.div 
                key={structure._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="mb-12 pt-2"
              >
                <h1 className="text-2xl font-semibold text-center pb-4 text-[#1D3557]">
                  {structure.title}
                </h1>
                <Table className="border">
                  <TableHeader>
                    <TableRow className="bg-[#85193C] text-white">
                      <TableHead>Class</TableHead>
                      <TableHead>1st Instalment</TableHead>
                      <TableHead>2nd Instalment</TableHead>
                      <TableHead>3rd Instalment</TableHead>
                      <TableHead className="text-right">Yearly Total</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody style={{fontFamily: 'arial'}}>
                    {structure.fees.map((fee, i) => (
                      <TableRow key={i}>
                        <TableCell className="font-bold">
                          {fee.class}
                        </TableCell>
                        <TableCell>₹{fee.emi1}</TableCell>
                        <TableCell>₹{fee.emi2}</TableCell>
                        <TableCell>₹{fee.emi3}</TableCell>
                        <TableCell className="text-right font-bold">
                        ₹{fee.yearly}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            ))}

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
