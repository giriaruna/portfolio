import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-800 scroll-smooth">
      {/* Navbar */}
      <Navbar />

      {/* Main content sections */}
      <main className="flex-grow">
        <section id="home" className="min-h-screen">
          <Home />
        </section>

        <section id="about" className="min-h-screen">
          <About />
        </section>

        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      <Analytics />
    </div>
  );
}

export default App;
