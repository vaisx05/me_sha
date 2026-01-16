'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Reveal from '../../animations/Reveal'

export default function ApiGuardianPage () {
  return (
    <main className='relative min-h-screen text-white overflow-hidden'>
      {/* ================= BACKGROUND (EXACT HERO MATCH) ================= */}
      <div
        className='
          absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_20%_20%,#1f2937,transparent_40%),
              radial-gradient(circle_at_80%_80%,#020617,transparent_40%)]
        '
      />

      {/* Glow bloom */}
      <div className='absolute inset-0 -z-10 pointer-events-none'>
        <div
          className='
            absolute -top-1/2 -left-1/2
            w-[200%] h-[200%]
            bg-[radial-gradient(circle,#3b82f680,transparent_45%)]
            opacity-20
          '
        />
      </div>
      {/* ================================================================ */}

      {/* HERO */}
      <section className='pt-40 pb-32 px-6'>
        <div className='max-w-5xl mx-auto text-center'>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='text-4xl md:text-6xl font-grotesk font-extrabold tracking-tight'
          >
            <h1 className='text-4xl md:text-6xl font-grotesk font-extrabold tracking-tight'>
              <span className='text-white'>API</span>{' '}
              <span className='text-accent'>Guardian</span>
            </h1>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className='mt-6 text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto'
          >
            A security-first API gateway that protects external API usage,
            enforces policy at the edge, and gives teams full visibility into
            how their systems are actually used.
          </motion.p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className='py-24 px-6'>
        <div className='max-w-4xl mx-auto'>
          <Reveal>
            <h2 className='text-2xl md:text-3xl font-semibold'>
              Why this exists
            </h2>
          </Reveal>

          <Reveal>
            <p className='mt-6 text-neutral-400 leading-relaxed'>
              In most systems, client applications talk directly to third-party
              APIs. This exposes API keys, makes rate limits unreliable, and
              provides no clear way to detect abuse or failures.
            </p>
          </Reveal>

          <Reveal>
            <p className='mt-4 text-neutral-400 leading-relaxed'>
              As traffic grows, small issues become outages. One leaked key, one
              misbehaving client, or one spike can take the entire system down.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SOLUTION */}
      <section className='py-24 px-6 border-y border-neutral-900/60'>
        <div className='max-w-4xl mx-auto'>
          <Reveal>
            <h2 className='text-2xl md:text-3xl font-semibold'>
              What API Guardian does
            </h2>
          </Reveal>

          <Reveal>
            <p className='mt-6 text-neutral-400 leading-relaxed'>
              API Guardian introduces a dedicated gateway layer between
              applications and external APIs. It centralizes authentication,
              rate limiting, key isolation, and logging — without changing how
              clients behave.
            </p>
          </Reveal>

          <div className='mt-10 space-y-4'>
            {[
              'Prevents client-side API key exposure',
              'Enforces rate limits consistently',
              'Isolates misbehaving consumers',
              'Provides structured usage and failure logs'
            ].map((item, i) => (
              <Reveal key={i}>
                <div className='flex items-start gap-3 text-neutral-300'>
                  <span className='mt-1 h-2 w-2 rounded-full bg-accent' />
                  <span>{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* DEPLOYMENT */}
      <section className='py-24 px-6'>
        <div className='max-w-4xl mx-auto'>
          <Reveal>
            <h2 className='text-2xl md:text-3xl font-semibold'>Deployment</h2>
          </Reveal>

          <Reveal>
            <p className='mt-6 text-neutral-400 leading-relaxed'>
              API Guardian is designed to run close to your infrastructure,
              giving you full control over security boundaries and performance.
            </p>
          </Reveal>

          <div className='mt-10 grid gap-6 md:grid-cols-2'>
            {[
              {
                title: 'Self-hosted (Docker)',
                desc: 'Run as a container alongside your backend services.'
              },
              {
                title: 'VPS / Cloud VM',
                desc: 'Deploy as a dedicated gateway in front of external APIs.'
              }
            ].map((item, i) => (
              <Reveal key={i}>
                <div className='rounded-xl border border-neutral-800 bg-neutral-900/60 p-6'>
                  <h3 className='font-medium'>{item.title}</h3>
                  <p className='mt-2 text-sm text-neutral-400'>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TECHNICAL DOCS ENTRY ================= */}
      <section className='py-24 px-6 border-t border-neutral-900/60'>
        <div className='max-w-4xl mx-auto text-center'>
          <Reveal>
            <h2 className='text-2xl md:text-3xl font-semibold'>
              Technical Documentation
            </h2>
          </Reveal>

          <Reveal>
            <p className='mt-6 text-neutral-400 max-w-2xl mx-auto'>
              Detailed documentation for developers who want to integrate,
              configure, and extend API Guardian in production environments.
            </p>
          </Reveal>

          <Reveal>
            <div className='mt-10 flex justify-center'>
              <Link
                href='/api-guardian/docs'
                className='
                  px-6 py-3 rounded-xl
                  border border-neutral-700
                  hover:border-neutral-500
                  transition
                '
              >
                Read technical docs →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      {/* ========================================================= */}

      {/* CTA */}
      <section className='py-32 px-6'>
        <div className='max-w-4xl mx-auto text-center'>
          <Reveal>
            <h2 className='text-3xl md:text-4xl font-bold'>
              Built for real systems.
            </h2>
          </Reveal>

          <Reveal>
            <p className='mt-6 text-neutral-400'>
              Designed for teams that care about security, reliability, and
              long-term scalability.
            </p>
          </Reveal>

          <Reveal>
            <div className='mt-10 flex justify-center'>
              <Link
                href='/#projects'
                className='
                  px-6 py-3 rounded-xl
                  border border-neutral-700
                  hover:border-neutral-500 transition
                '
              >
                Back to projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
