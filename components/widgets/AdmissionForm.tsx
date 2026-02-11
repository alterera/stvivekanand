'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';

const AdmissionForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    academicYear: '',
    class: '',
    schoolType: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/admission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: 'Success',
          description: 'Your admission form has been submitted successfully.',
        });
        setFormData({
          name: '',
          email: '',
          mobile: '',
          city: '',
          academicYear: '',
          class: '',
          schoolType: '',
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to submit the form. Please try again.';
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
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
    <section className="w-full">
      <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">
        Admission Open for 2026-27
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input
              type="tel"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
          <div>
            <Input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="bg-gray-50"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Academic Year
            </label>
            <Select
              value={formData.academicYear}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, academicYear: value }))
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select your academic year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025-2026">2026 - 2027</SelectItem>
                <SelectItem value="2024-2025">2025 - 2026</SelectItem>
                <SelectItem value="2023-2024">2024 - 2025</SelectItem>
                <SelectItem value="2022-2023">2023 - 2024</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Class
            </label>
            <Select
              value={formData.class}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, class: value }))
              }
            >
              <SelectTrigger className="w-full">
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
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              School Type
            </label>
            <Select
              value={formData.schoolType}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, schoolType: value }))
              }
            >
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
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </section>
  );
};

export default AdmissionForm;
