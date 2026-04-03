import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { projectAPI } from "../utils/api";
import { ExternalLink, Github } from "lucide-react";

// Re-rendered with CAR format
// Re-rendered with CAR format
const Projects = () => {
  const highlightKeywords = (text) => {
    const keywords = ["Challenge:", "Action:", "Result:"];
    let parts = [text];
    
    keywords.forEach(keyword => {
      let newParts = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          const split = part.split(keyword);
          for (let i = 0; i < split.length; i++) {
            newParts.push(split[i]);
            if (i < split.length - 1) {
              newParts.push(<span key={keyword + i} className="font-bold text-blue-600 dark:text-blue-400">{keyword}</span>);
            }
          }
        } else {
          newParts.push(part);
        }
      });
      parts = newParts;
    });
    
    return parts;
  };

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await projectAPI.getAll();
        setProjects(response.data);
      } catch (error) {
        console.log("Projects API not available, showing default projects");
        setProjects([
          {
            _id: "1",
            title: "Localift – E-Commerce Platform",
            description: "Challenge: Local business owners lacked a dedicated platform to manage online sales and product inventory efficiently.\nAction: Developed a full-stack platform specifically designed for local merchants and their direct customers, featuring secure authentication, role-based access control, and real-time order updates.\nResult: Delivered a responsive merchant dashboard and a seamless shopping experience, connecting local store owners with online buyers and increasing operational efficiency.",
            image: "/projects/ecommerce.png",
            technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Tailwind CSS"],
            link: "#",
            github: "https://github.com/AartRai/VirtualStorefront",
          },
          {
            _id: "2",
            title: "TechEvent – AI-Powered Event Finder",
            description: "Challenge: Tech enthusiasts and students struggled to find local tech events tailored to their specific interests and geographic location.\nAction: Engineered an AI-powered backend to dynamically generate and filter event listings for tech community members seeking networking opportunities.\nResult: Achieved 100% demo uptime with a resilient fallback mechanism and a highly responsive frontend experience, connecting users with relevant tech meetups.",
            image: "/projects/event_ai.png",
            technologies: ["Node.js", "Express.js", "React.js", "Google Gemini AI", "JavaScript"],
            link: "#",
            github: "https://github.com/AartRai/EventAI",
          },
          {
            _id: "3",
            title: "Quiz-Management System",
            description: "Challenge: Manual quiz administration and grading are time-consuming and prone to human error for teachers and educational institutions.\nAction: Developed a robust desktop application for educators and students, featuring automated grading logic and a persistent file-handling system for tracking student assessments.\nResult: Eliminated grading errors and provided students with instant performance feedback, saving educators hours of manual work and streamlining the testing process.",
            image: "/projects/quiz.png",
            technologies: ["Java", "Swing", "AWT", "File Handling"],
            link: "#",
            github: "https://github.com/AartRai/Quiz-Management",
          },
          {
            _id: "4",
            title: "PulseTrack – Health Monitoring",
            description: "Challenge: Tracking health metrics manually is inconsistent, making it difficult for individuals and patients to spot long-term vital trends.\nAction: Built a responsive web application and dashboard designed for health-conscious users and patients to log pulse rates and generate intuitive medical data visualizations.\nResult: Empowered users to proactively monitor their health and share accurate, long-term cardiovascular data with their personal healthcare providers.",
            image: "/projects/pulse.png",
            technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
            link: "#",
            github: "https://github.com/AartRai/PulseTrack",
          },
          {
            _id: "5",
            title: "Spotify Clone – Music Streamer",
            description: "Challenge: Creating a web-based music player that matches the performance and premium UI feel of high-end native apps for everyday music listeners.\nAction: Implemented high-fidelity playback controls and a sleek glassmorphic user interface tailored for audiophiles and casual stream consumers.\nResult: Delivered a seamless, immersive streaming experience with a professional-grade aesthetic across all devices, elevating the user's music discovery journey.",
            image: "/projects/spotify.png",
            technologies: ["JavaScript", "HTML5", "SCSS", "Responsive Design"],
            link: "#",
            github: "https://github.com/AartRai/GreenMarketing-Website",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-800"
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        {loading ? (
          <div className="text-center text-gray-600 dark:text-gray-400">
            Loading projects...
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                variants={itemVariants}
                className="group card overflow-hidden hover:shadow-2xl"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-blue-600 hover:text-white transition-all"
                      >
                        <ExternalLink size={24} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white rounded-full hover:bg-gray-800 hover:text-white transition-all"
                      >
                        <Github size={24} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 whitespace-pre-line">
                  {highlightKeywords(project.description)}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
