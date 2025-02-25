"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links: { title: string; href: string } [] = [
  { title: "FAQs", href: "/faqs" },
  { title: "Calendar", href: "/calendar" },
  { title: "Notice Board", href: "/notices" },
  { title: "Fee Structure", href: "/fees" },
  { title: "E-Prospectus", href: "/prospectus" },
  { title: "Admissions", href: "/admissions" },
];

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#002147] text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* School Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Image
                src="/assets/logo/stlogo.png"
                alt="St. Vivekanand School"
                width={200}
                height={80}
                className="object-contain"
              />
            </motion.div>
            <div className="space-y-4">
              <p className="text-gray-300">
                Statue Circle, JNV Main Rd, Sector 3 <br />
                Jai Narayan Vyas Colony, Bikaner <br />
                Rajasthan - 334001 IN
              </p>
              <div className="space-y-2">
                <p>
                  Phone:{" "}
                  <a href="tel:+919571665859" className="hover:text-[#E63946]">
                    +91 9571665859
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:contact@school.com" className="hover:text-[#E63946]">
                    contact@school.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="lg:col-span-2 h-[300px] md:h-full min-h-[300px] relative rounded overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.470173855172!2d73.3491114!3d28.010102000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe7cbaba58535%3A0x794a41abc1764543!2sSaint%20Vivekanand%20School%2C%20Bikaner!5e0!3m2!1sen!2sin!4v1740501588780!5m2!1sen!2sin"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full md:w-[60%]"
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {Array(2)
              .fill(links)
              .map((col: { title: string; href: string }[], index: number) => (
                <div key={index}>
                  <h3 className="text-xl font-bold mb-4">Links</h3>
                  <ul className="space-y-2">
                    {col.map((link) => (
                      <motion.li key={link.title} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                          {link.title}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© St. Vivekanand School, 2025. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/terms" className="hover:text-white">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Designed & Developed by{" "}
              <a href="#" className="text-white hover:text-[#E63946]">
                Alterera
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
