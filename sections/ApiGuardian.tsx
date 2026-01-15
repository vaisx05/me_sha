"use client";

import { motion } from "framer-motion";

export default function ApiGuardianFlow() {
  return (
    <div className="mt-24 flex flex-col items-center">

      {/* FLOW ROW */}
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* CLIENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-4 rounded-xl border border-neutral-700
          bg-neutral-900 text-neutral-300"
        >
          Client App
        </motion.div>

        {/* FLOW */}
        <FlowLine />

        {/* API GUARDIAN (HERO) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative px-10 py-6 rounded-2xl
          bg-gradient-to-br from-neutral-900 to-black
          border border-accent shadow-[0_0_60px_rgba(59,130,246,0.25)]
          text-white"
        >
          <div className="text-lg font-semibold tracking-wide">
            API Guardian
          </div>

          <div className="mt-2 text-xs text-neutral-400">
            Auth · Rate Limits · Key Protection · Logging
          </div>

          {/* Glow ring */}
          <div className="absolute -inset-1 rounded-2xl
            border border-accent opacity-30 blur-md pointer-events-none" />
        </motion.div>

        {/* FLOW */}
        <FlowLine />

        {/* EXTERNAL API */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-4 rounded-xl border border-neutral-700
          bg-neutral-900 text-neutral-300"
        >
          External API
        </motion.div>

      </div>
    </div>
  );
}

/* FLOW COMPONENT */
function FlowLine() {
  return (
    <div className="relative w-32 h-[2px] bg-neutral-700 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-accent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
          ease: "linear",
        }}
      />
    </div>
  );
}
