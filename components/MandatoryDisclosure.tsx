"use client";

import React, { useState } from "react";
import { MandatoryDisclosureData } from "@/types";
import Modal from "@/components/Modal"; // Modal for file and link preview
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  data: MandatoryDisclosureData;
}

const MandatoryDisclosure: React.FC<Props> = ({ data }) => {
  const [modalContent, setModalContent] = useState<string | null>(null);

  const handleOpenModal = (content: string) => setModalContent(content);
  const handleCloseModal = () => setModalContent(null);

  return (
    <section className="py-20 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">{data.title}</h1>
      <p className="text-center text-gray-600 mb-10">{data.description}</p>
      <div className="flex gap-5 px-6 md:px-12">
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
                            <button
                              onClick={() =>
                                handleOpenModal(item.file!.asset!.url)
                              }
                              className="text-blue-500 underline"
                            >
                              View File
                            </button>
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
        <div className="hidden md:block md:w-1/3 relative">
          <div className="sticky top-5 flex flex-col gap-5">
            <div className="bg-[#0D3658] py-4 px-2 uppercase text-4xl font-bold  text-center text-white">
              <h3 className=" mb-6">Admission Open</h3>

              <h2 className="text-yellow-300 mb-5">nursery to class xii</h2>
              <p className="mb-5">2025-26 session</p>
              <p className="text-3xl font-semibold ">apply now</p>
            </div>
            <div className="bg-gray-200 p-5 rounded-md">
              <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
                Admission Open for 2025-26
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="tel"
                      placeholder="Mobile No."
                      className="bg-gray-50"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="City"
                      className="bg-gray-50"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Academic Year
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your academic year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2024-2025">2024 - 2025</SelectItem>
                        <SelectItem value="2023-2024">2023 - 2024</SelectItem>
                        <SelectItem value="2022-2023">2022 - 2023</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Class
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="null">Choose your class</SelectItem>
                        <SelectItem value="nursery">Nursery</SelectItem>
                        <SelectItem value="lkg">LKG</SelectItem>
                        <SelectItem value="ukg">UKG</SelectItem>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i} value={`class${i + 1}`}>
                            Class {i + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      School Type
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose school type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Day Scholar</SelectItem>
                        <SelectItem value="boarding">Boarding</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#85193C] hover:bg-[#85193C]/90 text-white"
                >
                  Submit
                </Button>
              </form>
            </div>
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
