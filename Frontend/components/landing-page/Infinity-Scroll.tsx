"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Next.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Tailwind CSS", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Java", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "FastAPI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
  { name: "Docker", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
];

export default function InfinityScroll() {
  return (
    <section id="tech" className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-50 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-50 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
        >
          Our Stack
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight"
        >
          Powered by Modern Technology
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-500 max-w-2xl mx-auto"
        >
          Built with a robust, scalable technology stack
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Edge Fade Effects */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 via-gray-50/50 to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
        >
          {/* Double the array to make the infinite scroll seamless */}
          {[...technologies, ...technologies].map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center gap-3 px-6 py-4 mx-3 bg-white rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-10 h-10 relative flex-shrink-0 flex items-center justify-center">
                <Image 
                  src={tech.src} 
                  alt={`${tech.name} logo`} 
                  width={32} 
                  height={32} 
                  className="object-contain"
                />
              </div>
              <span className="text-black font-semibold text-base tracking-wide">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}