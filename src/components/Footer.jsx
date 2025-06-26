import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-6 py-10 mt-20">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h3 className="text-lg font-bold">NaijaCare Foundation</h3>
          <p className="mt-2 text-sm">
            Contact us: +234 812 345 6789 <br />
            Email: support@naijacare.org
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-4 text-lg">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </motion.div>
      <p className="text-center text-sm mt-6">&copy; 2025 NaijaCare. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
