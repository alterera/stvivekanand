import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-[#85193C] border-t-transparent"></div>
    </div>
  );
};

export default Preloader;
