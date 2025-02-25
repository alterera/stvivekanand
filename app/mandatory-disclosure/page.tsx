"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";

const documents = [
  { id: 1, info: "Affiliation Letter", file: "/assets/docx/ca.pdf" },
  { id: 2, info: "NOC from State Govt.", file: "/documents/noc.pdf" },
  { id: 3, info: "Recognition Certificate", file: "/documents/recognition.pdf" },
];

const MandatoryDisclosure = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

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
              <BreadcrumbPage>Mandatory Disclosure</BreadcrumbPage>
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
            Mandatory Disclosure
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Below are the mandatory documents and disclosures as per CBSE guidelines.
          </p>
        </motion.div>

        {/* Documents Table */}
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-[#1D3557] mb-4">Documents & Information</h3>
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-[#457B9D] text-white">
              <tr>
                <th className="p-3">SR No.</th>
                <th className="p-3">Information</th>
                <th className="p-3">Documents</th>
              </tr>
            </thead>
            <tbody>
              {documents.map((doc) => (
                <tr key={doc.id} className="border-b border-gray-300">
                  <td className="p-3">{doc.id}</td>
                  <td className="p-3">{doc.info}</td>
                  <td className="p-3">
                    <button
                      onClick={() => setSelectedDoc(doc.file)}
                      className="flex items-center gap-2 bg-[#E63946] text-white px-4 py-2 rounded-lg hover:bg-[#C02C3D]"
                    >
                      <FaEye /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>

      {/* PDF Modal (No Third-Party Library) */}
      {selectedDoc && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white w-[90%] md:w-[70%] lg:w-[50%] p-5 rounded-lg shadow-lg relative">
            <button
              onClick={() => setSelectedDoc(null)}
              className="absolute top-3 right-4 text-lg font-bold text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <embed
              src={`${selectedDoc}#toolbar=0&navpanes=0&scrollbar=0`}
              type="application/pdf"
              className="w-full h-[500px]"
              onContextMenu={(e) => e.preventDefault()} // Prevents right-click
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default MandatoryDisclosure;
