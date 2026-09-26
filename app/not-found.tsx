import Link from "next/link";
import { notFoundMetadata } from "@/lib/seo";

export const metadata = notFoundMetadata(
  "Page Not Found",
  "The page you are looking for could not be found.",
);

const links = [
  { href: "/", label: "Home" },
  { href: "/admissions/admission-process", label: "Admissions" },
  { href: "/news", label: "News" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function NotFound() {
  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-6 py-32">
      <div className="max-w-lg text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#85193C]">Error 404</p>
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#1D3557]">Page not found</h1>
        <p className="mt-4 text-gray-600">
          The page you are looking for may have moved or no longer exists. These pages might help:
        </p>
        <nav aria-label="Helpful links" className="mt-8 flex flex-wrap justify-center gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-[#0D3658] px-4 py-2 font-semibold text-[#0D3658] hover:bg-[#0D3658] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
