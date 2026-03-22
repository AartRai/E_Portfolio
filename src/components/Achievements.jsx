import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { Trophy, Code, Star, Medal } from "lucide-react";

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const achievements = [
    {
      title: "5-Star in C++ & Problem Solving",
      organization: "HackerRank",
      description: "Earned a 5-Star rating for exceptional proficiency in C++ and algorithmic problem solving.",
      icon: Code,
      color: "text-blue-500",
      links: [
        { label: "View Profile", url: "https://www.hackerrank.com/profile/aartirai991" }
      ],
    },
    {
      title: "400+ Problems Solved",
      organization: "LeetCode & GeeksforGeeks",
      description: "Solved a diverse range of 400+ coding challenges focusing on data structures and algorithms.",
      icon: Trophy,
      color: "text-yellow-500",
      links: [
        { label: "LeetCode", url: "https://leetcode.com/u/AartiRai/" },
        { label: "GFG", url: "https://www.geeksforgeeks.org/profile/aartirrgah" }
      ],
    },
    {
      title: "Shortlisted for Flipkart Grid 7.0",
      organization: "Flipkart",
      description: "Among top students nationwide for national-level technical competition.",
      icon: Star,
      color: "text-purple-500",
    },
    {
      title: "Infosys STEM Scholarship",
      organization: "Infosys",
      description: "Awarded for outstanding contribution and pursuit of STEM education.",
      icon: Medal,
      color: "text-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 dark:bg-dark-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Achievements & Recognition
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((ach, index) => {
            const Icon = ach.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="card text-center group"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gray-100 dark:bg-dark-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${ach.color}`} size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {ach.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold mb-3">
                  {ach.organization}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {ach.description}
                </p>
                {ach.links && (
                  <div className="flex justify-center gap-3">
                    {ach.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
