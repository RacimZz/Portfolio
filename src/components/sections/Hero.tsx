"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import { selfData } from "@/constant";
import { nasalization, quentine } from "@/app/fonts";

import { LuGithub, LuLinkedin } from "react-icons/lu";

export const Hero = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 relative"
    >
      {/* léger voile */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Texte */}
          <div className="space-y-6">
            <motion.h1
              className={`${quentine.className} text-5xl md:text-7xl lg:text-8xl font-bold`}
              style={{ color: "hsl(var(--primary))" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {selfData.name}
            </motion.h1>

            <motion.p
              className={`${nasalization.className} text-lg md:text-xl`}
              style={{ color: "hsl(var(--secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {selfData.roles[0]}
            </motion.p>

            <motion.p
              className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {selfData.bio}
            </motion.p>
          </div>

          {/* Boutons sociaux (style contact) */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            {/* GitHub */}
            <motion.a
              href={`https://github.com/${selfData.socials_username.github}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-12 h-12
                flex items-center justify-center
                rounded-xl
                border border-primary/30
                bg-card/40
                backdrop-blur-md
                text-primary
                transition-all duration-300
                hover:bg-primary/10
                hover:border-primary/60
                hover:shadow-[0_0_25px_rgba(var(--primary-rgb)/0.4)]
              "
              aria-label="GitHub"
            >
              <LuGithub size={22} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={`https://linkedin.com/in/${selfData.socials_username.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="
                w-12 h-12
                flex items-center justify-center
                rounded-xl
                border border-primary/30
                bg-card/40
                backdrop-blur-md
                text-primary
                transition-all duration-300
                hover:bg-primary/10
                hover:border-primary/60
                hover:shadow-[0_0_25px_rgba(var(--primary-rgb)/0.4)]
              "
              aria-label="LinkedIn"
            >
              <LuLinkedin size={22} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
