"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import DynamicBreadcrumb from "@/components/DynamicBreadcumb";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <motion.section 
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
      <DynamicBreadcrumb />
        {/* Page Title */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">Contact Us</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or assistance.
          </p>
        </motion.div>

        {/* Contact Info Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Address */}
          <div className="bg-[#002147] p-6 rounded-lg text-white text-center shadow-md">
            <FaMapMarkerAlt className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Address</h3>
            <p className="text-gray-300 mt-2">
              Statue Circle, JNV Main Rd, Sector 3 <br />
              Jai Narayan Vyas Colony, Bikaner, Rajasthan - 334001
            </p>
          </div>

          {/* Phone Number */}
          <div className="bg-[#002147] p-6 rounded-lg text-white text-center shadow-md">
            <FaPhoneAlt className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-300 mt-2">
              <a href="tel:+919571665859" className="hover:text-[#E63946]">
                +91 9571665859
              </a>
            </p>
          </div>

          {/* Email */}
          <div className="bg-[#002147] p-6 rounded-lg text-white text-center shadow-md">
            <FaEnvelope className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-300 mt-2">
              <a href="mailto:contact@school.com" className="hover:text-[#E63946]">
                contact@school.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* Google Map Section */}
        <motion.div 
          className="h-[300px] rounded-lg overflow-hidden mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.470173855172!2d73.3491114!3d28.010102000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe7cbaba58535%3A0x794a41abc1764543!2sSaint%20Vivekanand%20School%2C%20Bikaner!5e0!3m2!1sen!2sin!4v1740501588780!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

        {/* Contact Form with Side Text */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F1EEE9] p-10 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Text Section */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#1D3557] mb-4">We&apos;re Here to Help</h3>
            <p className="text-gray-700 mb-6">
              If you have any questions regarding admissions, curriculum, or school facilities, 
              feel free to reach out to us. We are happy to assist you in every possible way!
            </p>
            <p className="text-gray-700">
              You can also visit our administration office between 9 AM to 4 PM, Monday to Saturday.
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-1">Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-1">Message</label>
                <textarea
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#E63946] text-white py-3 rounded-lg hover:bg-[#C02C3D] transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
