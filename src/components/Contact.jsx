import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { contactAPI } from "../utils/api";
import { Send, Mail, MessageSquare, Github, Linkedin, Terminal } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await contactAPI.create(formData);
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError("Failed to send message. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-dark-900"
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12"
        >
          Have a question or want to collaborate? I'd love to hear from you!
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 mb-12">
          {[
            {
              icon: Mail,
              title: "Email",
              value: "aartirai991@gmail.com",
              href: "mailto:aartirai991@gmail.com",
            },
            {
              icon: MessageSquare,
              title: "Message",
              value: "Send me a message",
              href: "#contact",
            },
            {
              icon: Linkedin,
              title: "LinkedIn",
              value: "linkedin.com/in/aarti--rai",
              href: "https://www.linkedin.com/in/aarti--rai/",
            },
            {
              icon: Github,
              title: "GitHub",
              value: "github.com/AartRai",
              href: "https://github.com/AartRai/",
            },
            {
              icon: Terminal,
              title: "HackerRank",
              value: "hackerrank.com/aartirai991",
              href: "https://www.hackerrank.com/profile/aartirai991",
            },
          ].map((contact, i) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={i}
                href={contact.href}
                title={contact.title}
                variants={itemVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                whileHover={{ y: -5, scale: 1.1 }}
                className="card flex items-center justify-center hover:border-blue-500 border border-transparent p-8 sm:p-10 group transition-all duration-300"
              >
                <Icon
                  className="text-blue-600 dark:text-blue-400 group-hover:text-purple-600 transition-colors duration-300"
                  size={40}
                />
              </motion.a>
            );
          })}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="card space-y-6"
        >
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200 rounded-lg"
            >
              ✓ Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg dark:bg-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg dark:bg-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg dark:bg-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 dark:border-dark-700 rounded-lg dark:bg-dark-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
              placeholder="Tell me about your project or inquiry..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send size={20} />
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
