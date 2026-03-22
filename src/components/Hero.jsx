import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Eye, X } from "lucide-react";
import { useState } from "react";
import Background3D from "./Background3D";
import headshot from "../assets/headshot.png";

const Hero = () => {
  const [showCVPreview, setShowCVPreview] = useState(false);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden dark:bg-dark-950"
    >
      <Background3D />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-8 relative inline-block"
        >
          <div className="w-32 h-32 sm:w-40 h-40 rounded-full border-4 border-blue-600 p-1 bg-white dark:bg-dark-800 mx-auto overflow-hidden shadow-2xl">
            <img
              src={headshot}
              alt="Professional Headshot"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white dark:border-dark-900 rounded-full"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="mb-4">
          <span className="text-lg text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider">
            Available for Internships
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Aarti Rai
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-2xl sm:text-3xl font-medium text-gray-700 dark:text-gray-200 mb-4 italic"
        >
          "Transforming Problems into Code Solutions"
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Computer Science Student | MERN Developer | Problem Solver
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="btn-primary flex items-center gap-2 group px-8 py-3"
          >
            Explore Projects
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <button
            onClick={() => setShowCVPreview(true)}
            className="btn-secondary flex items-center gap-2 px-8 py-3"
          >
            <Eye size={20} />
            Preview CV
          </button>
          <a
            href="/resume.pdf"
            download
            className="btn-secondary flex items-center gap-2 px-8 py-3"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>

        {/* CV Preview Modal */}
        {showCVPreview && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl h-[90vh] bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="p-4 flex justify-between items-center border-b border-gray-100 dark:border-dark-700">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Resume Preview</h3>
                <button
                  onClick={() => setShowCVPreview(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full transition-colors"
                >
                  <X size={24} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
              <div className="flex-1 w-full h-full">
                <iframe
                  src="/resume.pdf"
                  className="w-full h-full border-none"
                  title="Resume Preview"
                />
              </div>
              <div className="p-4 bg-gray-50 dark:bg-dark-900 flex justify-end gap-3">
                <button
                  onClick={() => setShowCVPreview(false)}
                  className="px-6 py-2 rounded-lg border border-gray-300 dark:border-dark-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800 transition-colors"
                >
                  Close
                </button>
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary px-6 py-2 flex items-center gap-2"
                >
                  <Download size={18} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-16 flex justify-center"
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
