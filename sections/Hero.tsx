"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // subtle, premium parallax
  const x = useTransform(mouseX, [-500, 500], [-12, 12]);
  const y = useTransform(mouseY, [-500, 500], [-12, 12]);

  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        overflow-hidden
      "
    >
      {/* Focused hero glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="
            absolute
            top-1/3
            left-1/2
            -translate-x-1/2
            w-[600px]
            h-[600px]
            rounded-full
            bg-accent/20
            blur-[120px]
          "
        />
      </div>

      {/* Parallax content */}
      <motion.div
        style={{ x, y }}
        className="relative z-10 text-center max-w-5xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
            font-grotesk
            text-[clamp(3rem,6vw,5.5rem)]
            leading-[0.95]
            font-extrabold
            tracking-tight
          "
        >
          Building{" "}
          <span className="text-accent">security-first</span>
          <br />
          intelligent systems
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="
            mt-10
            text-lg
            md:text-xl
            text-neutral-400
            max-w-2xl
            mx-auto
          "
        >
          AI · Voice Automation · API Security · Product Engineering
        </motion.p>
      </motion.div>
    </section>
  );
}
