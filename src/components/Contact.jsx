import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!form.name || !form.email || !form.message) {
      alert("Oops! Please fill out all the fields so I can get your message! 🌸");
      setLoading(false);
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_TO_ME,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Aruna Giri",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        return emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_TO_SENDER,
          {
            from_name: form.name,
            from_email: form.email,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        );
      })
      .then(
        () => {
          setLoading(false);
          setStatus("success");

          confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ["#60a5fa", "#3b82f6", "#93c5fd", "#34d399"],
          });

          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 8000);
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("EmailJS Error Details:", error);
        }
      );
  };

  return (
    <section className="pt-4 pb-20 bg-white dark:bg-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 1. Centered Header - Tightened margins to eliminate gap */}
        <div className="text-center mb-2">
          <h1 className="font-black text-5xl md:text-6xl text-gray-900 dark:text-white">
            Contact
          </h1>
          <hr className="w-12 h-1 mx-auto my-2 bg-blue-500 border-0 rounded" />
          <p className="text-blue-500 font-bold uppercase tracking-widest text-xs">
            Get in touch
          </p>
        </div>

        {/* 2. Main Content Split - Pushed up significantly with mt-[-60px] */}
        <div className="flex flex-col lg:flex-row gap-10 items-center mt-[-60px]">
          
          {/* Contact Form Box (Left) */}
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.8] w-full bg-gray-50 dark:bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-gray-700 z-10"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-6">
              <label className="flex flex-col">
                <span className="text-gray-700 dark:text-white font-semibold mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="bg-white dark:bg-gray-800 py-4 px-6 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-gray-700 dark:text-white font-semibold mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email address?"
                  className="bg-white dark:bg-gray-800 py-4 px-6 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none transition-all"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-gray-700 dark:text-white font-semibold mb-2">Your Message</span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="bg-white dark:bg-gray-800 py-4 px-6 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-600 focus:ring-2 focus:ring-blue-400 outline-none transition-all resize-none"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 py-4 px-10 rounded-2xl text-white font-extrabold text-lg shadow-xl transition-all active:scale-95 mt-2"
              >
                {loading ? "Sending... ✨" : "Send Message 💌"}
              </button>

              {status === "success" && (
                <p className="text-blue-600 dark:text-blue-400 font-bold text-center mt-4">
                  Yay! Your message is on its way! 🎀
                </p>
              )}
            </form>
          </motion.div>

          {/* Massive Globe Section (Right) */}
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="flex-[1.2] w-full h-[500px] md:h-[700px] lg:h-[850px]"
          >
            <EarthCanvas />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
