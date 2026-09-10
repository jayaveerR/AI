"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, User, LogOut, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

interface UserProfile {
  name: string;
  email: string;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    
    // Check local storage for user auth
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    
    if (token && name && email) {
      setUser({ name, email });
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setUser(null);
    setProfileOpen(false);
    setIsOpen(false);
  };

  const navLinks = [
    { href: "#about", label: "How it Works" },
    { href: "#features", label: "Features" },
    { href: "#tech", label: "Technology" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-white border-b ${
        scrolled ? "border-gray-200 shadow-lg" : "border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2.5 group">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            >
              <Image
                src="/Logo.png"
                alt="CareerMind AI Logo"
                width={32}
                height={32}
                className="rounded-md object-contain bg-black shadow-md"
              />
            </motion.div>
            <span className="font-bold text-lg text-black tracking-tight">
              CareerMind <span className="text-blue-600">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-black hover:text-blue-600 transition-colors group py-2"
              >
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                />
              </Link>
            ))}
            
            {user ? (
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2 bg-gray-50 border border-gray-200 hover:border-gray-300 px-4 py-2 rounded-full transition-all"
                >
                  <div className="bg-blue-100 text-blue-600 p-1.5 rounded-full">
                    <User size={16} />
                  </div>
                  <span className="text-sm font-semibold text-gray-800">{user.name.split(' ')[0]}</span>
                  <ChevronDown size={16} className={`text-gray-500 transition-transform ${profileOpen ? "rotate-180" : ""}`} />
                </motion.button>

                <AnimatePresence>
                  {profileOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 mt-3 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                    >
                      <div className="p-4 border-b border-gray-100 bg-gray-50/50">
                        <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate mt-0.5">{user.email}</p>
                      </div>
                      <div className="p-2">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-3 py-2.5 text-sm font-medium text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        >
                          <LogOut size={16} />
                          Sign out
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link href="/auth/login">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="bg-black hover:bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-xl transition-all"
                >
                  Login/Sign-in 
                </motion.button>
              </Link>
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-black hover:text-blue-600 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-2.5 text-sm font-medium text-black hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="pt-3 border-t border-gray-100 mt-3"
              >
                {user ? (
                  <div className="space-y-3">
                    <div className="px-3 py-2 bg-gray-50 rounded-xl">
                      <p className="text-sm font-bold text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </div>
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={handleLogout}
                      className="w-full flex justify-center items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                    >
                      <LogOut size={16} />
                      Sign out
                    </motion.button>
                  </div>
                ) : (
                  <Link href="/auth/login">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md"
                    >
                      Login/Sign-in
                    </motion.button>
                  </Link>
                )}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}