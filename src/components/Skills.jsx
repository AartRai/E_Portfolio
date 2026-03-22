import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { skillAPI } from "../utils/api";

const SkillBadge = ({ name, icon, level }) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group"
  >
    <span className="text-lg group-hover:scale-120 transition-transform">{icon || "⚡"}</span>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{name}</span>
    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
  </motion.div>
);

const BentoBox = ({ title, children, className, delay = 0, isInView }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -5 }}
    className={`glass rounded-3xl p-6 relative overflow-hidden group ${className}`}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      {title}
    </h3>
    <div className="relative z-10 flex flex-wrap gap-3">
      {children}
    </div>
  </motion.div>
);

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [skills, setSkills] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await skillAPI.getAll();
        const grouped = {};
        response.data.forEach((skill) => {
          if (!grouped[skill.category]) {
            grouped[skill.category] = [];
          }
          grouped[skill.category].push(skill);
        });
        setSkills(grouped);
      } catch (error) {
        setSkills({
          Languages: [
            { name: "C++", level: 90, icon: "💻" },
            { name: "C", level: 85, icon: "💻" },
            { name: "Java", level: 85, icon: "☕" },
            { name: "JavaScript", level: 95, icon: "✨" },
            { name: "Python", level: 90, icon: "🐍" },
          ],
          WebTechnologies: [
            { name: "HTML", level: 95, icon: "📄" },
            { name: "CSS", level: 90, icon: "🎨" },
            { name: "Tailwind", level: 95, icon: "🔥" },
          ],
          Frameworks: [
            { name: "React.js", level: 90, icon: "⚛️" },
            { name: "Node.js", level: 85, icon: "🚀" },
            { name: "Express", level: 85, icon: "🛠️" },
          ],
          Databases: [
            { name: "MySQL", level: 85, icon: "📊" },
            { name: "MongoDB", level: 85, icon: "🗄️" },
          ],
          Tools: [
            { name: "Git", level: 90, icon: "🌿" },
            { name: "Docker", level: 80, icon: "🐳" },
            { name: "Figma", level: 85, icon: "🎨" },
          ],
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" ref={ref}>
      {/* Background blobs for aesthetics */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight">
            Technical <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Arsenal</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            A specialized collection of technologies and tools I use to bring digital ideas to life.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
            {/* Languages - Large Box */}
            <BentoBox 
              title="Languages" 
              className="md:col-span-8 md:row-span-1" 
              delay={0.1} 
              isInView={isInView}
            >
              {skills.Languages?.map((s, i) => (
                <SkillBadge key={i} {...s} />
              ))}
            </BentoBox>

            {/* Databases - Medium Box */}
            <BentoBox 
              title="Databases" 
              className="md:col-span-4 md:row-span-1" 
              delay={0.2} 
              isInView={isInView}
            >
              {skills.Databases?.map((s, i) => (
                <SkillBadge key={i} {...s} />
              ))}
            </BentoBox>

            {/* Frameworks - Hero Box */}
            <BentoBox 
              title="Frameworks & Runtimes" 
              className="md:col-span-4 md:row-span-1" 
              delay={0.3} 
              isInView={isInView}
            >
              {skills.Frameworks?.map((s, i) => (
                <SkillBadge key={i} {...s} />
              ))}
            </BentoBox>

            {/* Web Technologies - Wide Box */}
            <BentoBox 
              title="Web Core" 
              className="md:col-span-5 md:row-span-1" 
              delay={0.4} 
              isInView={isInView}
            >
              {skills.WebTechnologies?.map((s, i) => (
                <SkillBadge key={i} {...s} />
              ))}
            </BentoBox>

            {/* Tools - Small Box */}
            <BentoBox 
              title="Tools" 
              className="md:col-span-3 md:row-span-1" 
              delay={0.5} 
              isInView={isInView}
            >
              {skills.Tools?.map((s, i) => (
                <SkillBadge key={i} {...s} />
              ))}
            </BentoBox>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
