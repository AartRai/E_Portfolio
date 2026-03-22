import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ExternalLink, X, BookOpen } from "lucide-react";
import deloitteImg from "../assets/certificates/deloitte.png";
import csePathshalaImg from "../assets/certificates/cse_pathshala.png";

const Training = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selectedTraining, setSelectedTraining] = useState(null);

  const trainings = [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "Sep '25",
      image: deloitteImg,
      link: "https://drive.google.com/file/d/13PcrqkdYdfMKJTJB1jsIOW5fyoC-POCd/view",
      description: "Completed a practical job simulation focusing on data analysis tasks, including data cleaning, visualization, and strategic insights for Deloitte.",
    },
    {
      title: "Advanced Python for ML & AI",
      issuer: "CSE Pathshala",
      date: "Aug '24",
      image: csePathshalaImg,
      link: "https://drive.google.com/file/d/1kIKIwsk8tYvLhBCkOEeYKNdWOfXcGaCp/view",
      description: "Intensive training on advanced Python programming specifically tailored for Machine Learning and Artificial Intelligence applications.",
    },
  ];

  return (
    <section id="training" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Industry Training & Simulations
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trainings.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-dark-700 cursor-pointer group"
              onClick={() => setSelectedTraining(training)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={training.image}
                  alt={training.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">
                    View Details <ExternalLink size={16} />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {training.title}
                  </h3>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{training.issuer}</span>
                  <span>{training.date}</span>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  {training.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedTraining && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTraining(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full z-10 transition-colors text-gray-800 dark:text-white"
                onClick={() => setSelectedTraining(null)}
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-gray-100 dark:bg-dark-900">
                  <img
                    src={selectedTraining.image}
                    alt={selectedTraining.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={20} className="text-blue-600" />
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider">
                      Training Program
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {selectedTraining.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 dark:text-gray-300">
                      Completed an intensive training program with <span className="font-bold text-gray-900 dark:text-white">{selectedTraining.issuer}</span>.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      {selectedTraining.description}
                    </p>
                  </div>
                  <a
                    href={selectedTraining.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 w-full text-center"
                  >
                    View Completion Certificate
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Training;
