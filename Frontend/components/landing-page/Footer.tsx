"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, ArrowUp, Mail, MapPin, Phone, ChevronRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const platformLinks = [
    "How it works",
    "Resume Parsing",
    "Skill Gap Analysis",
    "Career Roadmaps",
    "Job Matching",
    "AI Insights",
  ];

  const companyLinks = [
    "About Us",
    "Contact",
    "Careers",
    "Blog",
    "Press Kit",
    "Partners",
  ];

  const resourceLinks = [
    "Documentation",
    "API Reference",
    "Community",
    "Support Center",
    "System Status",
    "Changelog",
  ];

  return (
    <footer className="bg-white border-t border-gray-200 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-50 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gray-50 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-black p-1.5 rounded-lg"
              >
                <Image
                  src="/Logo.png"
                  alt="CareerMind AI Logo"
                  width={32}
                  height={32}
                  className="rounded-lg object-contain"
                />
              </motion.div>
              <span className="font-bold text-xl text-black">
                CareerMind <span className="text-blue-600">AI</span>
              </span>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-sm mb-6">
              An intelligent career guidance and job-matching platform designed
              to help job seekers understand their suitability for specific
              opportunities and improve their employability.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h5 className="font-bold text-black mb-3 text-sm">
                Subscribe to our newsletter
              </h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3">
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center group"
              >
                <FaGithub size={18} className="text-gray-600 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center group"
              >
                <FaLinkedin size={18} className="text-gray-600 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center group"
              >
                <FaTwitter size={18} className="text-gray-600 group-hover:text-white transition-colors" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -3, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-10 h-10 bg-gray-100 hover:bg-black rounded-lg flex items-center justify-center group"
              >
                <FaYoutube size={18} className="text-gray-600 group-hover:text-white transition-colors" />
              </motion.a>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-bold text-black mb-6 text-sm uppercase tracking-wider">
              Platform
            </h4>
            <ul className="space-y-3">
              {platformLinks.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm inline-flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-black mb-6 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm inline-flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-bold text-black mb-6 text-sm uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors text-sm inline-flex items-center group"
                  >
                    <ChevronRight size={14} className="mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-200 py-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                <Mail size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Email Us</p>
                <p className="text-sm font-semibold text-black">ramanadhamjayaveer@mictech.edu.in</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                <Phone size={18} className="text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Call Us</p>
                <p className="text-sm font-semibold text-black">+91 8121016848</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                <MapPin size={18} className="text-green-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-0.5">Location</p>
                <p className="text-sm font-semibold text-black">Vijayawada , Andra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CareerMind AI. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm">
            <Link href="#" className="text-gray-500 hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-black transition-colors">
              Cookie Policy
            </Link>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 bg-black hover:bg-gray-800 rounded-lg flex items-center justify-center shadow-md transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} className="text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}