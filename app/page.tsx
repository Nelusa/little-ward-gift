"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import LoadingScreen from "@/components/LoadingScreen";
import MainInterface from "@/components/MainInterface";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="loading"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 z-50"
          >
            <LoadingScreen onFinished={() => setIsOpen(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MainInterface />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
