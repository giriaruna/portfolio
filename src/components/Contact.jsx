import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

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

    // 1. Send the Notification to YOU (Luna)
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_TO_ME, // This is template_u6kytjq
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Aruna Giri",
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // 2. Send the Auto-Reply to THEM (The Sender)
        return emailjs.send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID_TO_SENDER, // This is template_r0f4ydm
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
          setForm({ name: "", email: "", message: "" });
          setTimeout(() => setStatus(""), 6000);
        },
        (error) => {
          setLoading(false);
          setStatus("error");
          console.error("EmailJS Error Details:", error);
        }
      );
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
                {loading ? "Sending... ✨" : "Send 💌"}
              </button>

              {/* SWEET STATUS MESSAGES */}
              {status === "success" && (
                <p className="text-green-500 font-semibold text-center mt-4">
                  Yay! Your message is on its way to me! 🎀 I'll read it soon and get back to you. Have a lovely day! ✨
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 font-semibold text-center mt-4 leading-relaxed">
                  Oh no! There is a little glitch... 🤖💔 <br/>
                  Could you try again, or just message me directly at <span className="underline">ag8876@nyu.edu</span>? 🌷
                </p>
              )}
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
