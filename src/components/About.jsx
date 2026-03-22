import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import headshot from "../assets/headshot.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800"
    >
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={headshot}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a dedicated Computer Science student with a deep passion for building robust and scalable web applications. My journey in technology is driven by a constant desire to solve complex problems and create impactful digital experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Specializing in the MERN stack, I enjoy turning intricate logic into elegant, user-centric solutions. Beyond web development, I am an active competitive coder, constantly sharpening my analytical skills through algorithmic challenges.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I thrive in collaborative environments and am always eager to learn and adapt to new technologies. My goal is to build software that not only works flawlessly but also provides a seamless and delightful user experience.
            </p>

            <div className="pt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Location: Phagwara, Punjab
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💼</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Focus: Full Stack Development & Competitive Programming
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎓</span>
                <span className="text-gray-700 dark:text-gray-300">
                  Education: B.Tech in Computer Science
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
