import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { sendMessage } from "../services/api";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async () => {
    try {
      await sendMessage(form);
      alert("Message sent ✅");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-10"
    >

      <section id="contact" className="py-20 px-10"></section>

      {/* 🔥 Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          Let's <span className="text-red-500">Connect</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Have a project or just want to say hi?
        </p>
      </div>

      {/* 🔥 Main Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT → FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-6 border border-gray-700 rounded-xl bg-black/50 backdrop-blur-lg"
        >

          <h3 className="text-xl font-bold mb-4">Send a Message</h3>

          <div className="flex flex-col gap-4">

            <input
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />

            <input
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Email"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
            />

            <textarea
              className="p-3 rounded bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Your Message"
              rows="4"
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />

            <button
              onClick={handleSubmit}
              className="bg-red-500 py-3 rounded-lg hover:bg-red-600 hover:shadow-[0_0_20px_rgba(255,0,0,0.7)] transition"
            >
              Send Message
            </button>

          </div>
        </motion.div>

        {/* RIGHT → CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >

          {/* Sliding Cards */}
          <div className="space-y-4">

            <div className="p-4 border border-gray-700 rounded-xl bg-black/40 hover:translate-x-2 transition">
              <h4 className="text-red-400 flex items-center gap-2">
                <FaEnvelope /> Email
              </h4>
              <p className="text-gray-300">paladhisindhu258@gmail.com</p>
            </div>

            <div className="p-4 border border-gray-700 rounded-xl bg-black/40 hover:translate-x-2 transition">
              <h4 className="text-red-400 flex items-center gap-2">
                <FaPhone /> Phone
              </h4>
              <p className="text-gray-300">+91 9949526157</p>
            </div>

            <div className="p-4 border border-gray-700 rounded-xl bg-black/40 hover:translate-x-2 transition">
              <h4 className="text-red-400">📍 Location</h4>
              <p className="text-gray-300">India</p>
            </div>

          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Social Presence</h3>

            <div className="flex gap-4 text-xl">
              <a href="https://github.com/Sindhu2513" className="p-3 border rounded hover:text-red-500 hover:shadow-lg transition">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/sindhu-paladi-545002262" className="p-3 border rounded hover:text-red-500 hover:shadow-lg transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;