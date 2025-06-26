import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-center px-6"
      style={{
  backgroundImage:
    "url('/hm.jpg')",
}}

    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Empowering Communities, Changing Lives
        </h1>
        <p className="mt-4 text-lg">
          NaijaCare is a non-profit organization dedicated to improving the lives of Nigerians through education, food support, and healthcare.
        </p>
        <div className="mt-6 flex gap-4 justify-center">
          <a
            href="#causes"
            className="bg-accent text-white px-6 py-3 rounded hover:bg-primary"
          >
            Our Work
          </a>
          <a
            href="#get-involved"
            className="bg-white text-primary px-6 py-3 rounded hover:bg-accent hover:text-white"
          >
            Get Involved
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
