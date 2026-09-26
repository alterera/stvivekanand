"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      aria-hidden={!isVisible}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 bg-[#85193C] text-white p-2 md:p-3 rounded-full shadow-md transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
