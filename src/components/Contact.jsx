import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to YOU (Aruna)
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_TO_ME,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Aruna Giri",
          to_email: "ag8876@nyu.edu",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      // Send Auto-Reply to THEM
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_TO_SENDER,
        {
          from_name: form.name,
          to_name: form.name,
          to_email: form.email,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      alert("Thank you! Your message has been sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-gray-100 dark:bg-gray-700 p-8 rounded-2xl shadow-lg"
          >
            <h1 className="text-center font-extrabold text-4xl md:text-5xl text-gray-900 dark:text-white">
              Contact 
            </h1>

            <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
              <label className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-medium mb-4">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="bg-white dark:bg-gray-600 py-4 px-6 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-medium mb-4">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="bg-white dark:bg-gray-600 py-4 px-6 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors"
                />
              </label>

              <label className="flex flex-col">
                <span className="text-gray-800 dark:text-white font-medium mb-4">Your Message</span>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  className="bg-white dark:bg-gray-600 py-4 px-6 text-gray-900 dark:text-white rounded-lg border border-gray-300 dark:border-gray-500 focus:border-blue-500 dark:focus:border-blue-400 outline-none transition-colors resize-none"
                />
              </label>

              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 py-3 px-8 rounded-xl text-white font-bold shadow-lg transition-colors"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
