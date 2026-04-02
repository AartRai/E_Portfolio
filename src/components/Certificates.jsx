import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "../hooks/useInView";
import { ExternalLink, X, FileText } from "lucide-react";
import oracleImg from "../assets/certificates/oracle.png";
import nptelImg from "../assets/certificates/nptel.png";
import googleAnalyticsImg from "../assets/certificates/google_analytics.png";
import digitalMarketingImg from "../assets/certificates/digital_marketing.png";

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [selectedCert, setSelectedCert] = useState(null);

  const certificates = [
    {
      title: "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
      issuer: "Oracle",
      date: "Sep '25",
      image: oracleImg,
      link: "https://drive.google.com/file/d/1BXrlY8Aj9Z25R-vJFMyjuh9_2ZebWEWX/view",
    },
    {
      title: "Cloud Computing (Elite Gold)",
      issuer: "NPTEL",
      date: "Apr '25",
      image: nptelImg,
      link: "https://drive.google.com/file/d/1yll9MwryCFB8EJ9OV8AGCX0y7U3j7M7q/view",
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      date: "Sep '25",
      image: googleAnalyticsImg,
      link: "https://drive.google.com/file/d/1bmPvVn3avwUW1a4GcLgg0kd68XkDZPbw/view",
    },
    {
      title: "Foundations of Digital Marketing and E-commerce",
      issuer: "Google (Coursera)",
      date: "Oct '23",
      image: digitalMarketingImg,
      link: "https://www.coursera.org/account/accomplishments/verify/UJTRCB3KEHRC",
    },
  ];

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-dark-900" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="card overflow-hidden cursor-pointer group"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/0 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="bg-white/90 dark:bg-dark-800/90 p-3 rounded-full shadow-lg">
                    <FileText className="text-blue-600" />
                  </span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 transition-colors">
                {cert.title}
              </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{cert.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative max-w-4xl w-full bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 rounded-full z-10 transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                <X size={24} />
              </button>
              
              <div className="grid md:grid-cols-2">
                <div className="aspect-[4/3] md:aspect-auto">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 rounded-full text-xs font-bold w-fit mb-4">
                    Official Certificate
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {selectedCert.title}
                  </h3>
                  <div className="space-y-4 mb-8">
                    <p className="text-gray-600 dark:text-gray-400">
                      Issued by <span className="font-bold text-gray-900 dark:text-white">{selectedCert.issuer}</span> in {selectedCert.date}.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Successfully completed intensive training focusing on industry best practices and practical implementation.
                    </p>
                  </div>
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 w-full text-center"
                  >
                    Verify Certificate
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

export default Certificates;
