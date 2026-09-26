"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center px-6 py-32">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">Something went wrong</h1>
        <p className="mt-4 text-gray-600">
          We could not load this page. Please try again, or call the school office on{" "}
          <a href="tel:01512231906" className="text-[#85193C] underline">
            0151-223-1906
          </a>
          .
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={() => retry()}
            className="rounded-md bg-[#85193C] px-5 py-2 font-semibold text-white hover:bg-[#0D3658]"
          >
            Try again
          </button>
          <Link
            href="/"
            className="rounded-md border border-[#0D3658] px-5 py-2 font-semibold text-[#0D3658] hover:bg-[#0D3658] hover:text-white"
          >
            Go to home page
          </Link>
        </div>
      </div>
    </section>
  );
}
