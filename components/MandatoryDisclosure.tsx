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

const MandatoryDisclosure: React.FC<Props> = ({ data }) => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleOpenModal = (content: string) => setModalContent(content);
  const handleCloseModal = () => setModalContent(null);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 md:px-0 xl:px-4">
      <DynamicBreadcrumb />
      <div className="py-5">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#0D3658]">{data.title}</h1>
        <p className="text-center text-gray-600 text-sm">{data.description}</p>
      </div>

      <div className="flex flex-col md:flex-row relative gap-5">
        <div className="w-full md:w-2/3">
          {data.tables.map((table, index) => (
            <div key={index} className="mt-8">
              <h2 className="text-2xl font-bold">{table.tableName}</h2>
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

                      {/* Text Table (Plain Text) */}
                      {table.tableType === "text" && (
                        <td className="border px-4 py-2">{item.detail}</td>
                      )}

                      {/* File Table (File in Modal) */}
                      {table.tableType === "file" && (
                        <td className="border px-4 py-2">
                          {item.file?.asset?.url ? (
                            <Button
                              className="bg-[#85193C] font-semibold hover:bg-[#0D3658]"
                              onClick={() =>
                                handleOpenModal(item.file!.asset!.url)
                              }
                            >
                              View
                            </Button>
                          ) : (
                            "No File Available"
                          )}
                        </td>
                      )}

                      {/* Link Table (Link in Modal) */}
                      {table.tableType === "link" && (
                        <td className="border px-4 py-2">
                          {item.link && (
                            <Link href={item.link}>Learn More</Link>
                          )}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
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
