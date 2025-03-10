import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AdmissionForm = () => {
  return (
    <section className="w-full">
      <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
        Admission Open for 2025-26
      </h3>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input type="text" placeholder="Name" className="bg-gray-50" />
          </div>
          <div>
            <Input type="email" placeholder="Email" className="bg-gray-50" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input type="tel" placeholder="Mobile No." className="bg-gray-50" />
          </div>
          <div>
            <Input type="text" placeholder="City" className="bg-gray-50" />
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
    </section>
  );
};

export default AdmissionForm;
