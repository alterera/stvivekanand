"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import Honeypot from "./Honeypot";

const EMPTY_FORM = {
  name: "",
  email: "",
  mobile: "",
  city: "",
  academicYear: "",
  class: "",
  schoolType: "",
};

const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

const AdmissionForm = () => {
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.academicYear || !formData.class || !formData.schoolType) {
      toast({
        title: "Missing details",
        description: "Please choose the academic year, class, and school type.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast({
        title: "Success",
        description: "Your admission form has been submitted successfully.",
      });
      setFormData(EMPTY_FORM);
    } catch (error: unknown) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to submit the form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full relative" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
        Admission Open for 2026-27
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Honeypot value={website} onChange={setWebsite} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${id}-name`} className={labelClass}>
              Name
            </label>
            <Input
              id={`${id}-name`}
              type="text"
              name="name"
              placeholder="Student or parent name"
              autoComplete="name"
              maxLength={100}
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
          <div>
            <label htmlFor={`${id}-email`} className={labelClass}>
              Email
            </label>
            <Input
              id={`${id}-email`}
              type="email"
              name="email"
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={150}
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor={`${id}-mobile`} className={labelClass}>
              Mobile No.
            </label>
            <Input
              id={`${id}-mobile`}
              type="tel"
              name="mobile"
              placeholder="10-digit mobile number"
              autoComplete="tel"
              inputMode="tel"
              maxLength={16}
              value={formData.mobile}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
          <div>
            <label htmlFor={`${id}-city`} className={labelClass}>
              City
            </label>
            <Input
              id={`${id}-city`}
              type="text"
              name="city"
              placeholder="City"
              autoComplete="address-level2"
              maxLength={80}
              value={formData.city}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label id={`${id}-year-label`} className={labelClass}>
              Academic Year
            </label>
            <Select
              value={formData.academicYear}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, academicYear: value }))}
            >
              <SelectTrigger className="w-full" aria-labelledby={`${id}-year-label`}>
                <SelectValue placeholder="Select your academic year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2026-2027">2026 - 2027</SelectItem>
                <SelectItem value="2027-2028">2027 - 2028</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label id={`${id}-class-label`} className={labelClass}>
              Class
            </label>
            <Select
              value={formData.class}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, class: value }))}
            >
              <SelectTrigger className="w-full" aria-labelledby={`${id}-class-label`}>
                <SelectValue placeholder="Choose your class" />
              </SelectTrigger>
              <SelectContent>
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
            <label id={`${id}-type-label`} className={labelClass}>
              School Type
            </label>
            <Select
              value={formData.schoolType}
              onValueChange={(value) => setFormData((prev) => ({ ...prev, schoolType: value }))}
            >
              <SelectTrigger className="w-full" aria-labelledby={`${id}-type-label`}>
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
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
};

export default AdmissionForm;
