'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function Hero () {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2)
      mouseY.set(e.clientY - window.innerHeight / 2)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  const x = useTransform(mouseX, [-500, 500], [-20, 20])
  const y = useTransform(mouseY, [-500, 500], [-20, 20])

  return (
    <section
      id='hero-anchor'
      className='relative min-h-screen py-32 px-6 flex items-center justify-center overflow-hidden'
    >
      {' '}
      {/* Background gradient */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#1f2937,transparent_40%),radial-gradient(circle_at_80%_80%,#020617,transparent_40%)]' />
      {/* Subtle glow */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,#3b82f680,transparent_40%)] opacity-20' />
      </div>
      {/* Content */}
      <motion.div
        style={{ x, y }}
        className='relative z-10 text-center px-6 max-w-5xl'
      >
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='
            font-grotesk
            text-5xl sm:text-6xl md:text-7xl
            font-extrabold
            tracking-tight
            leading-tight
          '
        >
          Designing <span className='text-blue-500'>security-first</span>
          <br />
          systems that scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='mt-8 text-xl md:text-2xl text-neutral-400 tracking-wide'
        >
          AI agents • Mobile development • API security • Infrastructure
        </motion.p>
      </motion.div>
      
    </section>
  )
}
