import React, { useState } from "react";
import { motion } from "framer-motion";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cause: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your interest!");
    setFormData({ name: "", email: "", cause: "" });
  };

  return (
    <section id="get-involved" className="bg-light py-20 px-6">
      <motion.div
        className="max-w-xl mx-auto bg-white rounded-lg shadow p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-primary text-center mb-6">
          Get Involved
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
          />
          <input
            className="w-full px-4 py-2 border rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
          <select
            className="w-full px-4 py-2 border rounded"
            name="cause"
            value={formData.cause}
            onChange={handleChange}
            required
          >
            <option value="">Select a Cause</option>
            <option value="food">Food Drive</option>
            <option value="health">Healthcare</option>
            <option value="education">Education</option>
            <option value="women">Women Empowerment</option>
          </select>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-accent transition"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default GetInvolved;
