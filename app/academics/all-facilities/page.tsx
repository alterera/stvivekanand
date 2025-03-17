import DynamicBreadcrumb from "@/components/DynamicBreadcumb";
// import { motion } from "framer-motion";
import Image from "next/image";

// const fadeInVariant = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
// };

const Page = () => {
  return (
    <>
      <section className="w-full px-6 md:px-12 py-20">
        <div className="max-w-7xl mx-auto">
          <DynamicBreadcrumb />
          <div className="mt-5">
            <h1 className="text-center text-4xl font-semibold text-[#0D3658]">
              Academic Facilities
            </h1>
            <p className="text-center text-sm mb-10 text-gray-800">
              The central Building Consists of 50+ well-lit, fully equipped
              classrooms, a majority of them have been transformed into digital
              learning classrooms.
            </p>
          </div>
          <div className="flex flex-col md:flex-row relative gap-5">
            <div className="w-full">
              <div
                id="science"
                className={`flex flex-col md:flex-row gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/science.webp"}
                    alt={"science"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Science Laborities
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      At SVS, our Advanced Science Laboratories—Physics,
                      Chemistry, and Biology—are equipped with state-of-the-art
                      facilities, providing students with a dynamic, hands-on
                      learning environment. Designed to bridge theory with
                      practice, our labs serve as innovation hubs where students
                      experiment, explore, and discover.
                      <br />
                      <br />
                      From middle to secondary sections, students are actively
                      engaged in practical experiments that enhance their
                      scientific understanding and nurture a passion for
                      discovery. Our goal is to cultivate curiosity, develop
                      analytical skills, and inspire scientific thinking,
                      empowering young minds to become the innovators of
                      tomorrow.
                      <br />
                      <br />
                      Through experiential learning and guided exploration, we
                      ensure that science is not just a subject but an
                      experience that ignites curiosity and critical thinking.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="space"
                className={`flex flex-col md:flex-row-reverse gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/space.webp"}
                    alt={"science"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Space Lab
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      At SVS, we take pride in being a pioneer in experiential
                      learning, offering a cutting-edge Space Lab accredited by
                      ISRO under the prestigious Space Tutor Program. This
                      unique initiative integrates 80% practical learning,
                      allowing students to explore the wonders of space through
                      hands-on experiments and real-world applications.
                      <br />
                      <br />
                      As the first school to introduce the CBSE Skill Program
                      for Grades 6-8, we provide students with an exclusive
                      opportunity to learn how to operate a robotic satellite.
                      This program seamlessly integrates coding, machine
                      learning, and space technology applications, fostering a
                      deep understanding of STEM education and preparing
                      students for the evolving world of space science and
                      innovation.
                      <br />
                      <br />
                      Through this initiative, we reinforce our commitment to
                      experiential, future-ready education, ensuring that our
                      students are equipped with the skills and knowledge to
                      excel in the fields of space technology, artificial
                      intelligence, and robotics.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="robotics"
                className={`flex flex-col md:flex-row gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/ai-ml.webp"}
                    alt={"robotics-lab"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Robotics Lab: Where Innovation Meets Learning
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      At SVS, we believe that every child is unique and deserves
                      access to state-of-the-art facilities that align with the
                      demands of today&apos;s technologically advanced world.
                      With this vision, we introduce exclusive Space Robotics, a
                      program designed to ignite curiosity and foster hands-on
                      learning.
                      <br />
                      <br />
                      This initiative goes beyond theory, providing students
                      with the opportunity to apply their knowledge in
                      real-world scenarios. By learning Arduino, coding, and
                      robotics, students develop problem-solving skills and gain
                      a deeper understanding of technology and its applications
                      in space exploration.
                      <br />
                      <br />
                      At SVS, we are committed to shaping future innovators by
                      integrating experiential learning with cutting-edge
                      advancements, ensuring our students are future-ready and
                      equipped to excel in the ever-evolving world of
                      technology.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="computer"
                className={`flex flex-col md:flex-row-reverse gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/computer.webp"}
                    alt={"computer"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Computer Lab
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      At SVS, our specialized Computer Lab is designed to ignite
                      students passion for technology and innovation. Equipped
                      with cutting-edge systems and software, it provides a
                      dynamic environment where students explore coding,
                      software applications, and digital design.
                      <br />
                      <br />
                      Beyond learning the fundamentals, students engage in
                      multi-level projects, gaining hands-on experience in
                      real-world problem-solving and advanced computing. This
                      exposure prepares them to utilize high-performance systems
                      effectively, fostering critical thinking, creativity, and
                      technical expertise.
                      <br />
                      <br />
                      With a focus on practical learning and technological
                      advancement, our Computer Lab ensures students are
                      future-ready, equipped with the skills needed to excel in
                      the digital era.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="experiential-learning"
                className={`flex flex-col md:flex-row gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/experiential.webp"}
                    alt={"experiential"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Best School for Experiential Learning
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      At SVS, we don&apos;t just claim to be the best school for
                      experiential learning—we prove it every day. Our
                      skill-based pedagogy, spanning language, numeracy, and
                      life sciences, goes beyond theory to ensure hands-on,
                      practical learning.
                      <br />
                      <br />
                      What sets us apart? A fully equipped learning environment
                      where students engage with touch-and-feel physical tools,
                      making education an immersive experience. Our Eco Garden
                      fosters environmental awareness and life skills, allowing
                      students to connect with Mother Nature while learning EVS
                      in a real-world setting.
                      <br />
                      <br />
                      Aligning with the latest curriculum framework, we are
                      proud to be the first school to introduce CBSE Skill-Based
                      Programs, offering students official CBSE skill
                      certification. By integrating practical learning with
                      innovation, we ensure our students are future-ready,
                      confident, and equipped for success.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="library"
                className={`flex flex-col md:flex-row-reverse gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/library.webp"}
                    alt={"library"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Library
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      Our library is a treasure trove of knowledge with
                      thousands of books, periodicals, research papers, and
                      digital resources. It features a dedicated IIT-JEE and
                      NEET section, ensuring students preparing for competitive
                      exams have access to the best study materials. Students
                      can also access e-books, digital archives, and online
                      journals, making learning accessible beyond physical
                      books. A peaceful and inspiring reading space fosters a
                      love for literature and knowledge.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="ai-ml-lab"
                className={`flex flex-col md:flex-row gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/ai-ml.webp"}
                    alt={"ai-ml"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Artificial Intelligence & Machine Learning Lab
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      This lab is dedicated to AI & ML technologies, where
                      students learn about data science, neural networks, and
                      automation. They gain hands-on experience in coding AI
                      models, building machine-learning applications, and
                      understanding real-world AI use cases. The lab includes
                      AI-based projects, voice recognition software, and
                      automated systems, encouraging students to explore the
                      future of intelligent technology.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="phonic-lab"
                className={`flex flex-col md:flex-row-reverse gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/phonic.webp"}
                    alt={"phonic"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    Phonic Lab: A Revolutionary Approach to Early Language
                    Learning
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      At SVS, our commitment to experiential learning begins in
                      the early years. Our exclusive Phonics Lab, specially
                      designed for toddlers, redefines language learning by
                      focusing on sound recognition, blending, and segmenting,
                      ensuring a strong foundation in English from the start.
                      <br />
                      <br />
                      We break away from traditional rote learning—no more just
                      “A for Apple, B for Ball.” Instead, our young learners
                      dynamically engage with language, mastering phonics
                      through an interactive, hands-on approach. This method not
                      only enhances their reading and speaking abilities but
                      also builds confidence in language acquisition.
                      <br />
                      <br />
                      With our innovative phonics program, we ensure that
                      language is never a barrier for our students. At SVS, we
                      prepare Alpha Kids for a future where they communicate
                      effortlessly and effectively.
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="stem"
                className={`flex flex-col md:flex-row gap-10 my-10 pb-10 scroll-mt-44`}
              >
                <div className="w-full md:w-1/2">
                  <Image
                    src={"/assets/academics/stem.webp"}
                    alt={"science"}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                </div>
                <div className="relative flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-4xl font-bold text-[#1D3557] mb-4">
                    STEM Skill Program: Hands-On Learning for Future Innovators
                  </h3>
                  <div className="prose max-w-none text-gray-700">
                    <p>
                      At SVS, we proudly introduce STEM as a skill program for
                      students in Grades 3 to 8, featuring a U.S.-based
                      curriculum that is entirely practical and
                      application-driven—no theory, just real-world learning.
                      <br />
                      <br />
                      In this program, students collaborate, create, and
                      innovate, working on hands-on projects that integrate
                      science, technology, engineering, and mathematics. Each
                      task challenges them to think critically, solve problems,
                      and build physical models with a strong technical and
                      scientific foundation.
                      <br />
                      <br />
                      By making STEM an experiential journey, we ensure that our
                      students develop the skills, confidence, and curiosity
                      needed to become the thinkers and problem-solvers of
                      tomorrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
