// src/components/Causes.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import causes from "../data/causesData.js";

const Causes = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="causes" className="bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          Our Causes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {causes.map((cause, idx) => (
            <motion.div
              key={idx}
              className="bg-light rounded-lg overflow-hidden shadow hover:shadow-xl transition relative"
              whileHover={{ scale: 1.03 }}
            >
              <img src={cause.img} alt={cause.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{cause.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{cause.desc}</p>
                <button
                  className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-accent"
                  onClick={() => setActive(idx)}
                >
                  Learn More
                </button>
              </div>

              {/* Modal popup */}
              {active === idx && (
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
                    <h3 className="text-xl font-bold mb-2">{cause.title}</h3>
                    <p className="text-gray-700 text-sm mb-4">{cause.details}</p>
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-black"
                      onClick={() => setActive(null)}
                    >
                      &times;
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Causes;
