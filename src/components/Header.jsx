import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary">NaijaCare</h1>
      <nav className="hidden md:flex gap-6 text-sm font-medium text-dark">
        <a href="#about">About</a>
        <a href="#causes">Causes</a>
        <a href="#get-involved">Get Involved</a>
        <a href="#contact">Contact</a>
      </nav>
      <a
        href="#donate"
        className="bg-accent text-white px-4 py-2 rounded hover:bg-primary transition"
      >
        Donate
      </a>
    </header>
  );
};

export default Header;
