"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Navbar from "@/components/landing-page/Navbar";

// Lazy loading components for improved performance and faster initial load
const HeroSection = dynamic(() => import("@/components/landing-page/Hero-Section"), { 
  loading: () => <div className="min-h-screen flex items-center justify-center animate-pulse bg-gray-50/50" /> 
});
const AboutSection = dynamic(() => import("@/components/landing-page/AboutSection"), {
  loading: () => <div className="min-h-[50vh] animate-pulse bg-gray-50/50" />
});
const InfinityScroll = dynamic(() => import("@/components/landing-page/Infinity-Scroll"), {
  loading: () => <div className="h-40 animate-pulse bg-gray-50/50" />
});
const Footer = dynamic(() => import("@/components/landing-page/Footer"), {
  loading: () => <div className="h-64 animate-pulse bg-gray-50/50" />
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* '#' Routing via ID and Framer Motion for smooth section entries */}
      <motion.section 
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.section>

      <motion.section 
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <AboutSection />
      </motion.section>

      <motion.section 
        id="features"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <InfinityScroll />
      </motion.section>

      <motion.section 
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Footer />
      </motion.section>
    </main>
  );
}
