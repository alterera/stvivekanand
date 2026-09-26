import Image from "next/image";
import Link from "next/link";
import { Headset, Mail, MapPin, Phone } from "lucide-react";

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Saint+Vivekanand+School+Bikaner";

const footerLinks = [
  {
    section: "Admissions",
    links: [
      { title: "Admission Process", href: "/admissions/admission-process" },
      { title: "Fee Structure", href: "/admissions/fee-structure" },
      { title: "Schedule a Call", href: "/schedule-a-call" },
      { title: "Mandatory Disclosure", href: "/mandatory-disclosure" },
    ],
  },
  {
    section: "About Us",
    links: [
      { title: "Our History", href: "/about-us/our-history" },
      { title: "Why Choose Us", href: "/about-us/why-choose-us" },
      { title: "CBSE Affiliation", href: "/academics/cbse-affiliation" },
      { title: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    section: "School Life",
    links: [
      { title: "News", href: "/news" },
      { title: "Events", href: "/events" },
      { title: "Gallery", href: "/gallery" },
      { title: "Sports", href: "/academics/sports" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full bg-[#002147] text-white xl:px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-0 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-gray-700">
          <div className="space-y-6">
            <Image
              src="/assets/logo/stlogo.png"
              alt="St. Vivekanand School"
              width={200}
              height={80}
              className="object-contain"
            />
            <address className="not-italic space-y-4">
              <p className="text-gray-300">
                Statue Circle, JNV Main Rd, Sector 3 <br />
                Jai Narayan Vyas Colony, Bikaner <br />
                Rajasthan - 334001 IN
              </p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Headset size={20} aria-hidden="true" />
                  <a href="tel:01512231906" className="hover:text-[#E63946]">
                    0151-223-1906
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={20} aria-hidden="true" />
                  <a href="tel:+919571665859" className="hover:text-[#E63946]">
                    +91 957-166-5859
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={20} aria-hidden="true" />
                  <a href="mailto:st.vivekanand@yahoo.com" className="hover:text-[#E63946]">
                    st.vivekanand@yahoo.com
                  </a>
                </p>
              </div>
            </address>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold">Visit Us</h2>
            <p className="flex items-start gap-2 text-gray-300">
              <MapPin size={20} className="mt-1 shrink-0" aria-hidden="true" />
              Near Statue Circle, on JNV Main Road, in the centre of Bikaner.
            </p>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-[#85193C] px-4 py-2 text-sm font-semibold hover:bg-[#E63946]"
            >
              Get Directions
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {footerLinks.map((category) => (
              <nav key={category.section} aria-label={category.section}>
                <h2 className="text-xl font-bold mb-4">{category.section}</h2>
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
              </nav>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h2 className="text-xl font-bold mb-4">Why Choose St. Vivekanand School, Bikaner?</h2>
          <p className="text-gray-300">
            St. Vivekanand School is recognized as one of the best schools in Bikaner, offering a
            nurturing environment focused on academic excellence and moral development. As a CBSE
            school in Bikaner, we combine modern teaching methods with strong values to help students
            grow intellectually, emotionally, and socially. With experienced teachers, advanced
            facilities, and a commitment to holistic education, St. Vivekanand School stands as the
            ideal choice for parents seeking quality education and overall development for their
            children.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © St. Vivekanand School, {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <Link href="/terms-of-use" className="hover:text-white">
                Terms of Use
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/disclaimer" className="hover:text-white">
                Disclaimer
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Developed by{" "}
              <a
                href="https://alterera.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#E63946]"
              >
                Alterera
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
