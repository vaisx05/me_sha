'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * API Guardian Architecture Flow
 */
export default function ApiGuardianFlow () {
  return (
    <section className='py-32 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* SECTION DESCRIPTION */}
        <div className='text-center max-w-3xl mx-auto'>
          <h3 className='text-xl md:text-2xl font-semibold text-white'>
            API Guardian Architecture
          </h3>

          <p className='mt-4 text-neutral-400 text-sm md:text-base leading-relaxed'>
            A security-first gateway that sits between client applications and
            external APIs, enforcing authentication, rate limits, key isolation,
            and observability at the edge.
          </p>
        </div>

        {/* FLOW DIAGRAM */}
        <div className='mt-16 flex justify-center'>
          <div className='flex flex-col md:flex-row items-center justify-center gap-10'>
            {/* CLIENT */}
            <FlowNode label='Client App' delay={0} />

            <FlowLine />

            {/* API GUARDIAN (CLICKABLE + TOOLTIP) */}
            <div className='relative group'>
              <Link href='/api-guardian' aria-label='View API Guardian details'>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className='
                    relative px-10 py-6 rounded-2xl
                    bg-gradient-to-br from-neutral-900 to-black
                    border border-accent
                    shadow-[0_0_60px_rgba(59,130,246,0.25)]
                    text-white text-center
                    cursor-pointer
                    hover:shadow-[0_0_90px_rgba(59,130,246,0.35)]
                    transition
                  '
                >
                  <div className='text-lg font-semibold tracking-wide'>
                    API Guardian
                  </div>

                  <div className='mt-2 text-xs text-neutral-400'>
                    Auth · Rate Limits · Key Protection · Logging
                  </div>

                  <div className='mt-3 text-xs text-accent opacity-80'>
                    View details
                  </div>

                  {/* subtle glow ring */}
                  <div
                    className='
                      absolute -inset-1 rounded-2xl
                      border border-accent opacity-30 blur-md
                      pointer-events-none
                    '
                  />
                </motion.div>
              </Link>

              {/* TOOLTIP */}
              <div
                className='
                  pointer-events-none
                  absolute -top-12 left-1/2 -translate-x-1/2
                  whitespace-nowrap
                  rounded-md
                  bg-neutral-900 border border-neutral-700
                  px-3 py-1.5
                  text-xs text-neutral-300
                  opacity-0 translate-y-1
                  group-hover:opacity-100 group-hover:translate-y-0
                  transition-all duration-200
                '
              >
                View full API Guardian architecture →
              </div>
            </div>

            <FlowLine />

            {/* EXTERNAL API */}
            <FlowNode label='External API' delay={0.1} />
          </div>
        </div>
      </div>
    </section>
  )
}

/* -------------------------------- */
/* FLOW LINE */
/* -------------------------------- */
function FlowLine () {
  return (
    <div className='relative w-24 md:w-32 h-[2px] bg-neutral-800 overflow-hidden'>
      <motion.div
        className='absolute inset-0 bg-accent'
        animate={{ x: ['-100%', '100%'] }}
        transition={{
          repeat: Infinity,
          duration: 1.4,
          ease: 'linear'
        }}
      />
    </div>
  )
}

/* -------------------------------- */
/* SIDE NODES */
/* -------------------------------- */
function FlowNode ({ label, delay }: { label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className='
        px-6 py-4 rounded-xl
        border border-neutral-800
        bg-neutral-900/70
        text-neutral-400
        text-sm
        whitespace-nowrap
      '
    >
      {label}
    </motion.div>
  )
}
