"use client";

import { motion } from "framer-motion";

const box =
  "border border-neutral-700 rounded-xl px-6 py-4 text-center bg-black";

export default function ApiGuardianFlow() {
  return (
    <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-10">

      {/* Client */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={box}
      >
        Client
      </motion.div>

      {/* Flow */}
      <motion.div
        className="w-24 h-px bg-accent relative overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="absolute inset-0 bg-accent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </motion.div>

      {/* Guardian */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`${box} border-accent`}
      >
        API Guardian
        <div className="mt-2 text-xs text-neutral-400">
          Auth · Rate Limit · Key Shield
        </div>
      </motion.div>

      {/* Flow */}
      <motion.div
        className="w-24 h-px bg-accent relative overflow-hidden"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className="absolute inset-0 bg-accent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        />
      </motion.div>

      {/* External API */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={box}
      >
        External API
      </motion.div>
    </div>
  );
}
