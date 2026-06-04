"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { quotes } from "@/lib/quotes";

export default function LoadingScreen({ onFinished }: { onFinished: () => void }) {
  const [progress, setProgress] = useState(0);
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 2;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center text-foreground overflow-hidden">
      <div className="absolute inset-0 bg-rune" />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div className="absolute top-0 left-0 w-full h-0.5 gold-strip opacity-60" />
      <div className="absolute bottom-0 left-0 w-full h-0.5 gold-strip opacity-60" />

      <div className="relative z-10 w-full max-w-3xl px-6 flex flex-col items-center justify-center gap-10 sm:gap-12 h-full py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-center text-shadow-gold"
        >
          <h1 className="font-cinzel font-black uppercase text-secondary text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
            A Gift<br />Awaits
          </h1>
          <p className="mt-3 text-foreground/70 italic font-serif-body text-base sm:text-lg">
            Forged in secret. Probably for you, honey.
          </p>
        </motion.div>

        <div className="w-full space-y-2">
          <div className="flex justify-between items-end text-secondary font-serif-body">
            <span className="text-lg sm:text-xl italic">Summoning…</span>
            <span className="text-3xl sm:text-4xl font-bold drop-shadow-[0_0_20px_rgba(200,170,110,0.7)]">
              {Math.min(progress, 100)}%
            </span>
          </div>

          <div className="h-3.5 w-full bg-black/60 border border-secondary/30 relative overflow-hidden rounded-sm">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-900 via-primary to-secondary shadow-[0_0_20px_rgba(168,85,247,0.5)]"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-secondary/80 font-serif-body italic text-base sm:text-lg mt-3 min-h-[1.5em]"
          >
            &ldquo;{quote}&rdquo;
          </motion.p>

          <AnimatePresence>
            {progress >= 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex justify-center mt-5"
              >
                <button
                  onClick={onFinished}
                  className="group relative px-10 py-3.5 bg-muted border-2 border-secondary text-foreground font-cinzel font-bold uppercase text-lg sm:text-xl tracking-widest hover:bg-muted/70 hover:shadow-gold-strong transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  Open the Gift
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
