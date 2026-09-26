import * as motion from "motion/react-client";
import AdmissionForm from "./widgets/AdmissionForm";

const Cta = () => {
  return (
    <motion.section
      className="relative w-full bg-[#002147] py-16 overflow-hidden xl:px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('/assets/background/campus-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[60%]">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Take a Video Tour</h2>
            <div className="relative w-full aspect-video bg-black/20 overflow-hidden rounded-lg shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/P2UkzIGUhTo"
                title="St. Vivekanand School video tour"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>

          <div className="lg:w-[40%] bg-white p-6 rounded-lg shadow-lg">
            <AdmissionForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;
