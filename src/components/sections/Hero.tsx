"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { selfData } from "@/constant";

import { quentine, mono } from "@/app/fonts";

export const Hero = () => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-start px-6 relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="max-w-full sm:max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          className="max-w-4xl space-y-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="space-y-6">
            <motion.h1
              className={`${quentine.className} text-5xl md:text-7xl lg:text-8xl font-bold`}
              style={{ color: "hsl(var(--primary))" }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {selfData.name}
            </motion.h1>

            <motion.p
              className={`${mono.className} text-lg md:text-xl`}
              style={{ color: "hsl(var(--secondary))" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {selfData.roles[0]}
            </motion.p>

            <motion.p
              className="text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ color: "hsl(var(--foreground) / 0.8)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              {selfData.bio}
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            {/* Voir CV */}
            <motion.div
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                className="relative group overflow-hidden btn-primary shadow-lg hover:shadow-xl transition-all duration-300 h-12 px-6 text-sm"
              >
                <Link href="/resume">
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-30"
                    style={{ background: "var(--glass-shimmer)" }}
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <span className="relative z-10 font-medium">Voir CV</span>
                </Link>
              </Button>
            </motion.div>

            {/* Raccourcis */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.95 }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="h-12 px-6 text-sm bg-card/30 border border-white/15 text-foreground/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-md"
                >
                  {/* ⚠️ Parcours = section Experience dans ce template */}
                  <a href="#experience" className="font-medium">
                    Parcours
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="h-12 px-6 text-sm bg-card/30 border border-white/15 text-foreground/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-md"
                >
                  <a href="#projects" className="font-medium">
                    Projets
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button
                  asChild
                  className="h-12 px-6 text-sm bg-card/30 border border-white/15 text-foreground/90 hover:bg-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-md"
                >
                  <a href="#contact" className="font-medium">
                    Contact
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
