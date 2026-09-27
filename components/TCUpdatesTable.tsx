"use client";

import { useMemo, useState } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export type TransferCertificate = {
  serialNo: number;
  studentName: string;
  pdfUrl: string;
  fileName?: string;
};

export default function TCUpdatesTable({ records }: { records: TransferCertificate[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return records;
    return records.filter((record) => record.studentName.toLowerCase().includes(term));
  }, [query, records]);

  return (
    <div className="space-y-6">
      <div className="max-w-md">
        <label htmlFor="tc-search" className="block text-sm font-semibold text-gray-700 mb-2">
          Search by student name
        </label>
        <Input
          id="tc-search"
          type="search"
          placeholder="Enter student name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-white"
        />
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full min-w-[480px] border-collapse text-sm">
          <thead>
            <tr className="bg-[#0D3658] text-white">
              <th className="px-4 py-3 text-left font-semibold w-24">Sl No</th>
              <th className="px-4 py-3 text-left font-semibold">Name</th>
              <th className="px-4 py-3 text-center font-semibold w-36">Action</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((record) => (
              <tr key={`${record.serialNo}-${record.studentName}`} className="border-t border-gray-200 bg-white">
                <td className="px-4 py-3 text-gray-700">{record.serialNo}</td>
                <td className="px-4 py-3 font-medium text-gray-900">{record.studentName}</td>
                <td className="px-4 py-3 text-center">
                  <Button
                    asChild
                    size="sm"
                    className="bg-[#85193C] font-semibold hover:bg-[#0D3658]"
                  >
                    <a
                      href={record.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={record.fileName || `${record.studentName}-tc.pdf`}
                    >
                      <Download className="mr-1.5 h-4 w-4" aria-hidden="true" />
                      Download
                    </a>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-8">
          {query.trim()
            ? "No transfer certificates found for that name."
            : "No transfer certificates have been published yet."}
        </p>
      )}
    </div>
  );
}
