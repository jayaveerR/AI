"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Brain, TrendingUp, Rocket } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Abstract Background - Subtle Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 xmlns=http://www.w3.org/2000/svg%3E%3Cdefs%3E%3Cpattern id=grid width=60 height=60 patternUnits=userSpaceOnUse%3E%3Cpath d=M 60 0 L 0 0 0 60 fill=none stroke=%23e5e7eb stroke-width=1/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=100%25 height=100%25 fill=url(%23grid)/%3E%3C/svg%3E')] opacity-40" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-purple-100/50 to-transparent rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-pink-50/30 via-transparent to-cyan-50/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm mb-8"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={14} className="text-blue-600" />
          </motion.span>
          <span className="text-xs font-semibold text-black tracking-wide">
            AI-Powered Career Intelligence
          </span>
          <motion.span
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-green-500 rounded-full"
          />
        </motion.div>

        {/* Main Heading - Unique Font */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-black tracking-tight leading-[1.15] mb-6 max-w-4xl"
          style={{ 
            fontFamily: "'Noto Sans Mende Kikakui', sans-serif",
            letterSpacing: '-0.01em',
            fontWeight: '400'
          }}
        >
          Turn your resume into an{" "}
          <span className="relative inline-block">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              style={{ 
                fontFamily: "'Noto Sans Mende Kikakui', sans-serif",
                backgroundSize: '200% 100%',
                animation: 'gradient-shift 3s ease infinite'
              }}
            >
              Intelligent Profile
            </motion.span>
            <motion.span
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              style={{ transformOrigin: "left" }}
            />
            {/* Subtle glow effect */}
            <motion.span
              className="absolute -inset-2 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-xl -z-10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-gray-600 max-w-2xl mb-10 leading-relaxed font-light"
          style={{ fontFamily: "'Inter', 'Helvetica', sans-serif" }}
        >
          Stop guessing your job fit. Our AI analyzes your skills, detects gaps,
          and generates a{" "}
          <span className="font-semibold text-black border-b-2 border-blue-500">
            personalized roadmap
          </span>{" "}
          to land your dream role.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.03, y: -2, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto group relative flex items-center justify-center gap-2 bg-black hover:bg-gray-900 text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <span className="relative flex items-center gap-2">
              Analyze My Resume
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm text-black border-2 border-gray-300 hover:border-black px-8 py-3.5 rounded-lg font-semibold text-sm transition-all"
          >
            View Sample Match
          </motion.button>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 w-full max-w-4xl"
        >
          {[
            { 
              icon: Brain, 
              title: "Precision Matching", 
              desc: "NLP-driven job match scoring with semantic understanding." 
            },
            { 
              icon: TrendingUp, 
              title: "Skill Gap Analysis", 
              desc: "Instantly see what you're missing and prioritize learning." 
            },
            { 
              icon: Rocket, 
              title: "Custom Roadmaps", 
              desc: "AI-generated learning paths tailored to your goals." 
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.15 }}
              whileHover={{ y: -5 }}
              className="group bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-6 text-left hover:border-black hover:shadow-xl transition-all cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-2.5 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-md inline-block mb-4 group-hover:from-black group-hover:to-gray-800 group-hover:border-black transition-all"
              >
                <feature.icon size={20} className="text-black group-hover:text-white transition-colors" />
              </motion.div>
              <h3 className="font-bold text-black text-base mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-10 mt-16"
        >
          {[
            { value: "95%", label: "Match Accuracy" },
            { value: "10K+", label: "Users Analyzed" },
            { value: "500+", label: "Career Paths" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.15, type: "spring", stiffness: 200 }}
              className="text-center"
            >
              <div 
                className="text-3xl font-black text-black mb-1"
                style={{ fontFamily: "'Noto Sans Mende Kikakui', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Add gradient animation keyframes */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}