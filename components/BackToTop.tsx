"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 bg-[#85193C] text-white p-2 md:p-3 rounded-full shadow-md transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default BackToTop;
