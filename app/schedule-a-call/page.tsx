"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Honeypot from "@/components/widgets/Honeypot";

const EMPTY_FORM = {
  studentName: "",
  class: "",
  currentSchool: "",
  guardianName: "",
  contactNumber: "",
  address: "",
  message: "",
};

const labelClass = "block text-sm font-medium text-gray-700 mb-1";

export default function ScheduleCallPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [website, setWebsite] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.class) {
      toast({ title: "Missing details", description: "Please choose a class.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/schedule-call", {
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
        description: "Your request has been submitted successfully. We will contact you shortly.",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto py-12 px-4 mt-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[#1D3557] mb-8 text-center">Schedule a Call with Us</h1>
        <div className="relative bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Honeypot value={website} onChange={setWebsite} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="studentName" className={labelClass}>
                  Student Name *
                </label>
                <Input
                  id="studentName"
                  type="text"
                  name="studentName"
                  maxLength={100}
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="bg-gray-50"
                />
              </div>
              <div>
                <label id="class-label" className={labelClass}>
                  Class *
                </label>
                <Select
                  value={formData.class}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, class: value }))}
                >
                  <SelectTrigger className="w-full" aria-labelledby="class-label">
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="currentSchool" className={labelClass}>
                  Current School Name *
                </label>
                <Input
                  id="currentSchool"
                  type="text"
                  name="currentSchool"
                  maxLength={150}
                  value={formData.currentSchool}
                  onChange={handleChange}
                  required
                  className="bg-gray-50"
                />
              </div>
              <div>
                <label htmlFor="guardianName" className={labelClass}>
                  Guardian Name *
                </label>
                <Input
                  id="guardianName"
                  type="text"
                  name="guardianName"
                  autoComplete="name"
                  maxLength={100}
                  value={formData.guardianName}
                  onChange={handleChange}
                  required
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactNumber" className={labelClass}>
                  Contact Number *
                </label>
                <Input
                  id="contactNumber"
                  type="tel"
                  name="contactNumber"
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={16}
                  placeholder="10-digit mobile number"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="bg-gray-50"
                />
              </div>
              <div>
                <label htmlFor="address" className={labelClass}>
                  Address *
                </label>
                <Input
                  id="address"
                  type="text"
                  name="address"
                  autoComplete="street-address"
                  maxLength={300}
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Your Enquiry
              </label>
              <Textarea
                id="message"
                name="message"
                maxLength={2000}
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-50 min-h-[100px]"
                placeholder="Please share any additional information or questions you may have..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#85193C] hover:bg-[#85193C]/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Schedule Call"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
