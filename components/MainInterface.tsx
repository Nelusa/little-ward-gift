"use client";

import { motion } from "framer-motion";

import { config } from "@/lib/quotes";

export default function MainInterface() {
  return (
    <div className="relative min-h-screen bg-rune">
      <div className="absolute top-0 left-0 w-full h-0.5 gold-strip opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-0.5 gold-strip opacity-60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 flex flex-col items-center px-4 sm:px-6 pt-16 sm:pt-20 pb-10 sm:pb-12"
      >
        <header className="text-center max-w-2xl mb-10">
          <h2 className="font-cinzel font-bold uppercase text-secondary text-xl sm:text-2xl md:text-3xl text-shadow-gold leading-tight tracking-wider">
            {config.videoTitle}
          </h2>
          <div className="mt-2 text-foreground/60 italic font-serif-body text-base sm:text-lg">
            {config.videoSubtitle}
          </div>
        </header>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="frame-corner relative w-full max-w-4xl aspect-video border-2 border-secondary bg-black shadow-gold-glow"
        >
          <iframe
            src={config.videoUrl}
            title="Pendant Making"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 max-w-xl text-center border-t border-b border-secondary/30 py-8 px-3"
        >
          <div className="font-serif-body text-foreground/90 text-lg sm:text-xl leading-snug space-y-4">
            {config.dedication.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="mt-6 text-secondary font-cinzel uppercase tracking-widest text-lg sm:text-xl">
            Your {config.senderName}
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-6 text-secondary/60 font-serif-body italic text-sm sm:text-base"
        >
          Made by hand, 2026
        </motion.div>
      </motion.div>
    </div>
  );
}
