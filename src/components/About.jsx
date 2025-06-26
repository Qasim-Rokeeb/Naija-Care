import React, { useState } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [open, setOpen] = useState("");

  const toggle = (section) => {
    setOpen(open === section ? "" : section);
  };

  return (
    <section id="about" className="bg-light py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-primary mb-6">About Us</h2>
        <p className="text-gray-700 text-lg">
          At <span className="font-bold">NaijaCare</span>, we believe in a better Nigeria. We support underserved communities with food, healthcare, education, and tools for sustainable living.
        </p>

        <div className="mt-10 space-y-4 text-left">
          {/* Mission */}
          <div className="bg-white rounded-lg p-4 shadow">
            <button
              className="w-full text-left font-semibold text-dark"
              onClick={() => toggle("mission")}
            >
              Our Mission
            </button>
            {open === "mission" && (
              <motion.p
                className="mt-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                To uplift Nigerian communities by providing access to basic needs and empowering individuals to thrive.
              </motion.p>
            )}
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg p-4 shadow">
            <button
              className="w-full text-left font-semibold text-dark"
              onClick={() => toggle("vision")}
            >
              Our Vision
            </button>
            {open === "vision" && (
              <motion.p
                className="mt-2 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                A Nigeria where every person has the opportunity to live with dignity, access quality care, and contribute meaningfully to society.
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
