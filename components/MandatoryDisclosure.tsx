"use client";

import React, { useState } from "react";
import { MandatoryDisclosureData } from "@/types";
import Modal from "@/components/Modal"; // Modal for file and link preview
import Link from "next/link";
import { Button } from "@/components/ui/button";
import OpenSession from "./widgets/OpenSession";
import AdmissionForm from "./widgets/AdmissionForm";
import DynamicBreadcrumb from "./DynamicBreadcumb";

interface Props {
  data: MandatoryDisclosureData;
}

const documentsAndInfo = [
  { slNo: 1, information: "COPIES OF AFFILIATION", href: "/documents/affiliation-letter.pdf" },
  { slNo: 2, information: "COPIES OF SOCIETIES", href: "/documents/trust-certificate.pdf" },
  { slNo: 3, information: "NO OBJECTION CERTIFICATE", href: "/documents/NOC.pdf" },
  { slNo: 4, information: "BUILDING SAFETY CERTIFICATE", href: "/documents/building-certificate.pdf" },
  { slNo: 5, information: "VALID FIRE SAFETY CERTIFICATE", href: "/documents/fire-certificate.pdf" },
  { slNo: 6, information: "WATER TEST CERTIFICATE", href: "/documents/water-health-certificate.pdf" },
  {slNo: 7, information: "COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL", href: "/documents/Self Certificate.pdf" },
] as const;

const resultAndAcademics = [
  { slNo: 1, information: "FEE STRUCTURE OF THE SCHOOL", href: "/documents/fee-structure-2026-27.pdf" },
  { slNo: 2, information: "ANNUAL ACADEMIC CALENDER", href: "/documents/svs-calender.pdf" },
  { slNo: 3, information: "LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)", href: "/documents/List of SMC.pdf" },
  { slNo: 4, information: "LIST OF PARENTS TEACHERS ASSOCIATION (PTA)", href: "/documents/list_of_PTA.pdf" },
  { slNo: 5, information: "LAST THREE YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLE", href: "/documents/Last Three Year Board Result.pdf" },
] as const;

const facultyDetails = [
  { slNo: 1, information: "FACULTY DETAILS", href: "/documents/5_6068714086881829020.pdf" },
] as const;

function LocalDocTable({ title, items }: { title: string; items: ReadonlyArray<{ slNo: number; information: string; href: string }> }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">{title}</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-[#0D3658] text-white">
            <th className="border px-4 py-2">Sl No</th>
            <th className="border px-4 py-2">Information</th>
            <th className="border px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((doc) => (
            <tr key={doc.href} className="border border-gray-300 text-center">
              <td className="border px-4 py-2">{doc.slNo}</td>
              <td className="border px-4 py-2">{doc.information}</td>
              <td className="border px-4 py-2">
                <Button asChild className="bg-[#85193C] font-semibold hover:bg-[#0D3658]">
                  <Link href={doc.href} target="_blank" rel="noopener noreferrer">View</Link>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SanityTable({ table, onViewFile, tableTitle }: {
  table: MandatoryDisclosureData["tables"][number];
  onViewFile: (url: string) => void;
  tableTitle?: string;
}) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold">{tableTitle ?? table.tableName}</h2>
      <table className="w-full border-collapse border border-gray-300 mt-4">
        <thead>
          <tr className="bg-[#0D3658] text-white">
            <th className="border px-4 py-2">Sr No</th>
            <th className="border px-4 py-2">Information</th>
            <th className="border px-4 py-2">Details</th>
          </tr>
        </thead>
        <tbody>
          {table.content.map((item, i) => (
            <tr key={i} className="border border-gray-300 text-center">
              <td className="border px-4 py-2">{item.srNo}</td>
              <td className="border px-4 py-2">{item.information}</td>
              {table.tableType === "text" && (
                <td className="border px-4 py-2">{item.detail}</td>
              )}
              {table.tableType === "file" && (
                <td className="border px-4 py-2">
                  {item.file?.asset?.url ? (
                    <Button
                      className="bg-[#85193C] font-semibold hover:bg-[#0D3658]"
                      onClick={() => onViewFile(item.file!.asset!.url)}
                    >
                      View
                    </Button>
                  ) : (
                    "No File Available"
                  )}
                </td>
              )}
              {table.tableType === "link" && (
                <td className="border px-4 py-2">
                  {item.link && <Link href={item.link}>Learn More</Link>}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const MandatoryDisclosure: React.FC<Props> = ({ data }) => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleOpenModal = (content: string) => setModalContent(content);
  const handleCloseModal = () => setModalContent(null);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 md:px-0 xl:px-4">
      <DynamicBreadcrumb />
      <div className="py-5">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#0D3658]">
          {data.title}
        </h1>
        <p className="text-center text-gray-600 text-sm">{data.description}</p>
      </div>

      <div className="flex flex-col md:flex-row relative gap-5">
        <div className="w-full md:w-2/3">
          {data.tables.slice(0, 1).map((table, index) => (
            <SanityTable key={index} table={table} onViewFile={handleOpenModal} />
          ))}

          <LocalDocTable title="Documents and Information" items={documentsAndInfo} />
          <LocalDocTable title="Result and Academics" items={resultAndAcademics} />
          <LocalDocTable title="Faculty Details" items={facultyDetails} />
        </div>

        <div className="w-full md:w-1/3 h-fit rounded-md sticky top-5">
          <div>
            <OpenSession />
          </div>

          <div className="bg-gray-200 mt-5 p-5 rounded-b-md">
            <AdmissionForm />
          </div>
        </div>
      </div>

      {modalContent && (
        <Modal content={modalContent} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default MandatoryDisclosure;
