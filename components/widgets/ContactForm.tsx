"use client";

import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Honeypot from "./Honeypot";

const EMPTY_FORM = { name: "", email: "", phone: "", message: "" };

const inputClass =
  "w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3557]";

export default function ContactForm() {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, website }),
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.errors) setErrors(data.errors);
        throw new Error(data.message || "Something went wrong");
      }

      toast({ title: "Message sent", description: "Thank you. We will get back to you soon." });
      setFormData(EMPTY_FORM);
    } catch (error: unknown) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send your message.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const errorFor = (field: string) =>
    errors[field] ? (
      <p id={`contact-${field}-error`} className="text-red-500 text-sm mt-1">
        {errors[field]}
      </p>
    ) : null;

  return (
    <form onSubmit={handleSubmit} className="relative space-y-6">
      <Honeypot value={website} onChange={setWebsite} />
      <div>
        <label htmlFor="contact-name" className="block text-gray-700 font-semibold mb-1">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          className={inputClass}
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errorFor("name")}
      </div>

      <div>
        <label htmlFor="contact-email" className="block text-gray-700 font-semibold mb-1">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={150}
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errorFor("email")}
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-gray-700 font-semibold mb-1">
          Phone <span className="font-normal text-gray-500">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          maxLength={16}
          className={inputClass}
          value={formData.phone}
          onChange={handleChange}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
        />
        {errorFor("phone")}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-gray-700 font-semibold mb-1">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          maxLength={2000}
          className={inputClass}
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
        />
        {errorFor("message")}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#E63946] text-white py-3 rounded-lg hover:bg-[#C02C3D] transition-all duration-300 disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
