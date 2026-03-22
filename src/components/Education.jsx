import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const education = [
    {
      degree: "Bachelor of Technology - Computer Science and Engineering",
      university: "Lovely Professional University",
      year: "Aug '23 - Present",
      achievements: [
        "Current CGPA: 8.69",
        "Punjab, India",
      ],
    },
    {
      degree: "Intermediate",
      university: "Arwachin Bharti Bhawan Senior Secondary School",
      year: "Aug '21 - May '22",
      achievements: [
        "Percentage: 82.2%",
        "Delhi, India",
      ],
    },
    {
      degree: "Matriculation",
      university: "Arwachin Bharti Bhawan Senior Secondary School",
      year: "Aug '19 - May '20",
      achievements: [
        "Percentage: 86%",
        "Delhi, India",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Education
        </motion.h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative pl-8 border-l-2 border-blue-600 dark:border-blue-400"
            >
              <div className="absolute -left-[11px] top-0 w-5 h-5 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-dark-800" />
              
              <div className="card hover:shadow-xl transition-shadow">
                <div className="flex flex-wrap justify-between items-start mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <GraduationCap className="text-blue-600" />
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">{edu.university}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-dark-700 px-3 py-1 rounded-full text-sm">
                    <Calendar size={14} />
                    {edu.year}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <Award size={16} className="mt-1 text-purple-500 shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
