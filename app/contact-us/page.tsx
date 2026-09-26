import * as motion from "motion/react-client";
import { Mail, MapPin, Phone } from "lucide-react";
import DynamicBreadcrumb from "@/components/DynamicBreadcrumb";
import ContactForm from "@/components/widgets/ContactForm";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3522.470173855172!2d73.3491114!3d28.010102000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe7cbaba58535%3A0x794a41abc1764543!2sSaint%20Vivekanand%20School%2C%20Bikaner!5e0!3m2!1sen!2sin!4v1740501588780!5m2!1sen!2sin";

const Contact = () => {
  return (
    <motion.section
      className="w-full bg-white py-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <DynamicBreadcrumb />
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557]">Contact Us</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or assistance.
          </p>
        </div>

        <address className="not-italic grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#002147] p-6 rounded-lg text-white text-center shadow-md">
            <MapPin className="size-10 mb-4 mx-auto" aria-hidden="true" />
            <h2 className="text-xl font-bold">Address</h2>
            <p className="text-gray-300 mt-2">
              Statue Circle, JNV Main Rd, Sector 3 <br />
              Jai Narayan Vyas Colony, Bikaner, Rajasthan - 334001
            </p>
          </div>

          <div className="bg-[#002147] p-6 rounded-lg text-white text-center shadow-md">
            <Phone className="size-10 mb-4 mx-auto" aria-hidden="true" />
            <h2 className="text-xl font-bold">Phone</h2>
            <p className="text-gray-300 mt-2">
              <a href="tel:01512231906" className="hover:text-[#E63946]">
                (0151) 223 1906
              </a>
            </p>
            <p className="text-gray-300 mt-2">
              <a href="tel:+919571665859" className="hover:text-[#E63946]">
                +91 9571665859
              </a>
            </p>
          </div>

          <div className="bg-[#002147] p-6 rounded-lg text-white text-center shadow-md">
            <Mail className="size-10 mb-4 mx-auto" aria-hidden="true" />
            <h2 className="text-xl font-bold">Email</h2>
            <p className="text-gray-300 mt-2">
              <a href="mailto:st.vivekanand@yahoo.com" className="hover:text-[#E63946]">
                st.vivekanand@yahoo.com
              </a>
            </p>
          </div>
        </address>

        <div className="h-[300px] rounded-lg overflow-hidden mb-12">
          <iframe
            src={MAP_EMBED_URL}
            title="Map showing St. Vivekanand School, Bikaner"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-[#F1EEE9] p-10 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-[#1D3557] mb-4">We&apos;re Here to Help</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions regarding admissions, curriculum, or school facilities, feel
              free to reach out to us. We are happy to assist you in every possible way!
            </p>
            <p className="text-gray-700">
              You can also visit our administration office between 9 AM to 4 PM, Monday to Saturday.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1D3557] mb-6 text-center">Send Us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
