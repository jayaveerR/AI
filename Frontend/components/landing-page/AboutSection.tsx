"use client";

import { motion } from "framer-motion";
import { FileText, Search, Target, Upload, Scan, Map } from "lucide-react";

export default function AboutSection() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Resume",
      description:
        "Simply drag and drop your resume file. Our system accepts PDF, DOCX, or plain text formats and processes it instantly.",
      tag: "Input",
    },
    {
      icon: Search,
      title: "AI Analysis & Matching",
      description:
        "Our advanced AI engine analyzes your skills and experience. It compares them with job requirements using semantic understanding.",
      tag: "Processing",
    },
    {
      icon: Target,
      title: "Get Your Career Roadmap",
      description:
        "Receive a detailed match score and personalized recommendations. See exactly what skills you need to land your target role.",
      tag: "Results",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-50 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
          >
            Simple Process
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight"
          >
            How It Works
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Three simple steps to transform your career journey
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gray-200 origin-left"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white border border-gray-200 rounded-xl p-8 transition-all duration-300 hover:border-blue-500 hover:shadow-xl relative overflow-hidden">
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 transition-all duration-500" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 bg-black rounded-lg flex items-center justify-center mb-6 shadow-md relative z-10 group-hover:bg-blue-600 transition-colors"
                  >
                    <step.icon className="text-white" size={24} />
                  </motion.div>

                  {/* Tag */}
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-semibold uppercase mb-3 relative z-10">
                    {step.tag}
                  </span>

                  <h3 className="text-xl font-bold text-black mb-3 relative z-10">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                    {step.description}
                  </p>

                  {/* Arrow for mobile */}
                  {index < 2 && (
                    <div className="md:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-gray-300">
                      ↓
                    </div>
                  )}
                </div>

                {/* Connector dot */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow-md z-20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-6 py-3">
            <FileText size={16} className="text-blue-500" />
            <span>Supports PDF, DOCX, and TXT formats</span>
            <span className="hidden sm:block mx-2">•</span>
            <span>Free to start</span>
            <span className="hidden sm:block mx-2">•</span>
            <span>Results in seconds</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}