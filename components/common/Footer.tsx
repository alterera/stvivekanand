"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Headset, Mail, Phone } from "lucide-react";

const footerLinks = [
  {
    section: "Links",
    links: [
      { title: "FAQs", href: "#" },
      { title: "Calendar", href: "#" },
      { title: "Notice Board", href: "#" },
      { title: "Fee Structure", href: "/admissions/fee-structure" },
      { title: "E-Prospectus", href: "#" },
      { title: "Admissions", href: "/admissions/admission-process" },
    ],
  },
  {
    section: "About Us",
    links: [
      { title: "Our History", href: "/about-us/our-history" },
      { title: "Why Choose Us", href: "/about-us/why-choose-us" },
      { title: "CBSE Affiliation", href: "/academics/cbse-affiliation" },
      { title: "Careers", href: "#" },
    ],
  },
];

const Footer = () => {
  return (
    <motion.footer
      className="w-full bg-[#002147] text-white xl:px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-gray-700">
          {/* School Info */}
          <div className="space-y-6">
            <Image
              src="/assets/logo/stlogo.png"
              alt="St. Vivekanand School"
              width={200}
              height={80}
              className="object-contain"
            />
            <div className="space-y-4">
              <p className="text-gray-300">
                Statue Circle, JNV Main Rd, Sector 3 <br />
                Jai Narayan Vyas Colony, Bikaner <br />
                Rajasthan - 334001 IN
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Headset size={20} />
                  <a href="tel:01512231906" className="hover:text-[#E63946]">
                    0151-223-1906
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={20} />
                  <a href="tel:+919571665859" className="hover:text-[#E63946]">
                    +91 957-166-5859
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={20} />
                  <a
                    href="mailto:st.vivekanand@yahoo.com"
                    className="hover:text-[#E63946]"
                  >
                    st.vivekanand@yahoo.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 h-[300px] md:h-full min-h-[300px] relative rounded overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.470173855172!2d73.3491114!3d28.010102000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe7cbaba58535%3A0x794a41abc1764543!2sSaint%20Vivekanand%20School%2C%20Bikaner!5e0!3m2!1sen!2sin!4v1740501588780!5m2!1sen!2sin"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full md:w-[60%]"
            />
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8">
            {footerLinks.map((category, index) => (
              <div key={index}>
                <h3 className="text-xl font-bold mb-4">{category.section}</h3>
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.title}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h3 className="text-xl font-bold mb-4">
            Why Choose St. Vivekanand School, Bikaner?
          </h3>
          <p className="text-gray-300">
            St. Vivekanand School is recognized as one of the best schools in
            Bikaner, offering a nurturing environment focused on academic
            excellence and moral development. As a top CBSE school in Bikaner,
            we combine modern teaching methods with strong values to help
            students grow intellectually, emotionally, and socially. With
            experienced teachers, advanced facilities, and a commitment to
            holistic education, St. Vivekanand School stands as the ideal choice
            for parents seeking quality education and overall development for
            their children.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">Popular Searches</h3>
          {[
            { title: "Best School in Bikaner", href: "/about-us/why-choose-us" },
            { title: "Best School in Bikaner City", href: "/about-us/mission-vision" },
            { title: "Top Schools in Bikaner", href: "/about-us/our-history" },
            { title: "Bikaner School", href: "/" },
            { title: "CBSE Schools in Bikaner Rajasthan", href: "/about-us/our-history" },
            { title: "Top 10 CBSE Schools in Bikaner", href: "/about-us/why-choose-us" },
          ].map((item, index, arr) => (
            <React.Fragment key={item.title}>
              <Link
                href={item.href}
                className="inline-block text-gray-300 leading-7 hover:text-white transition-colors"
              >
                {item.title}
              </Link>
              {index < arr.length - 1 && (
                <span className="text-white mx-2">|</span>
              )}
            </React.Fragment>
          ))}
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
            <p className="text-gray-400 text-sm">
              © St. Vivekanand School, 2026. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/terms-of-use" className="hover:text-white">
                Terms of Use
              </Link>
              <span>|</span>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Developed by{" "}
              <a
                href="https://alterera.net"
                className="text-white hover:text-[#E63946]"
              >
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
