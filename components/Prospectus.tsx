import Image from "next/image";
import React from "react";

const Prospectus = () => {
  return (
    <section className="w-full py-4 bg-[#85193C] text-white">
      <div className="flex max-w-7xl mx-auto px-6 md:px-12">
  {/* Text Section - 50% */}
  <div className="w-1/2 pr-6 flex flex-col justify-center">
    <h2 className="text-2xl font-bold mb-2">Explore Our Vision</h2>
    <h3 className="text-xl font-semibold mb-4">Download the Delhi Public School, Nagaon Prospectus</h3>
    <p className="mb-6">
      Discover everything you need to know about Delhi Public School
      Nagaon, from our curriculum and values to our facilities and
      extracurricular activities. Download our detailed prospectus by
      filling out the form below with your name, email, and phone number,
      and gain insight into how we nurture excellence in every student.
    </p>
    <button className="bg-green-600 text-white px-6 py-2 rounded">Download Prospectus</button>
  </div>

  {/* Image Section - 50% */}
  <div className="w-1/2">
    <Image 
      src="/assets/background/dps.png" 
      alt="DPS Banner"
      width={800}
      height={200}
      className="w-full h-full object-cover rounded"
    />
  </div>
</div>
    </section>
  );
};

export default Prospectus;
