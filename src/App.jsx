import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Causes from "./components/Causes";
import GetInvolved from "./components/GetInvolved";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans text-dark bg-white">
      <Header />
      <Hero />
      <About />
      <Causes />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default App;
