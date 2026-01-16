'use client'

import Link from 'next/link'
import React from 'react'
import Reveal from '../../../animations/Reveal'

/* ================= PAGE ================= */

export default function ApiGuardianDocsPage () {
  return (
    <main className='relative min-h-screen text-white overflow-hidden'>
      {/* ================= BACKGROUND ================= */}
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
      {/* ============================================== */}

      {/* HEADER */}
      <section className='pt-28 pb-20 px-6'>
        <div className='max-w-3xl mx-auto'>
          <Reveal>
            <h1 className='text-3xl md:text-4xl font-grotesk font-extrabold tracking-tight leading-tight'>
              <span className='text-accent'>API Guardian</span>
              <span className='text-white'> — Technical Documentation</span>
            </h1>
          </Reveal>

          <Reveal>
            <p className='mt-6 text-neutral-400 leading-relaxed'>
              Step-by-step instructions for installing, running, and using{' '}
              <span className='text-neutral-200 font-medium'>API Guardian</span>
              , a self-hosted API proxy designed to prevent runaway API costs,
              retry storms, and rate-limit outages.
            </p>
          </Reveal>

          {/* divider */}
          <div className='mt-10 h-px w-full bg-neutral-800' />
        </div>
      </section>

      {/* CONTENT + TOC */}
      <section className='pb-32 px-6'>
        <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12'>
          {/* ================= MAIN CONTENT ================= */}
          <div className='space-y-20'>
            <DocSection id='prerequisites' title='1. Prerequisites'>
              <ul className='list-disc ml-6 space-y-2'>
                <li>Docker (latest version)</li>
                <li>Docker Compose (latest version)</li>
                <li>API keys for providers (OpenAI, Groq)</li>
              </ul>
            </DocSection>

            <DocSection id='installation' title='2. Installation'>
              <SubTitle>Step 1: Clone the Repository</SubTitle>
              <CodeBlock>{`git clone https://github.com/vaisx05/api-guardian.git
cd api-guardian`}</CodeBlock>

              <SubTitle>Step 2: Configure Environment Variables</SubTitle>
              <CodeBlock>{`cp .env.example .env`}</CodeBlock>

              <CodeBlock>{`REDIS_ADDR=redis:6379

OPENAI_RPM=60
GROQ_RPM=60

OPENAI_DAILY_BUDGET=2000
OPENAI_MONTHLY_BUDGET=30000

GROQ_DAILY_BUDGET=5000
GROQ_MONTHLY_BUDGET=100000

SLACK_WEBHOOK_URL=`}</CodeBlock>

              <SubTitle>Step 3: Start Services</SubTitle>
              <CodeBlock>{`docker compose up --build`}</CodeBlock>
            </DocSection>

            <DocSection id='usage' title='3. Usage'>
              <SubTitle>Health Check</SubTitle>
              <CodeBlock>{`curl http://127.0.0.1:8080/health`}</CodeBlock>

              <SubTitle>Proxying Requests (OpenAI)</SubTitle>
              <CodeBlock>{`curl http://127.0.0.1:8080/v1/models \\
  -H "Host: api.openai.com" \\
  -H "Authorization: Bearer YOUR_OPENAI_API_KEY"`}</CodeBlock>
            </DocSection>

            <DocSection id='rate-limiting' title='4. Rate Limiting Behavior'>
              <ul className='list-disc ml-6 space-y-2'>
                <li>Per-provider limits based on Host header</li>
                <li>Limits reset every minute</li>
                <li>Exceeding limits returns HTTP 429</li>
              </ul>
            </DocSection>

            <DocSection id='budget' title='5. Budget Enforcement'>
              <p>
                Daily and monthly budgets are enforced per provider. When
                exceeded, API Guardian returns:
              </p>
              <CodeBlock>{`HTTP 402 Payment Required`}</CodeBlock>
              <p className='text-neutral-400'>
                This indicates cost exhaustion, not a transient failure.
              </p>
            </DocSection>

            <DocSection id='alerts' title='6. Alerts (Optional)'>
              <ul className='list-disc ml-6 space-y-2'>
                <li>50%, 80%, 100% budget usage alerts</li>
                <li>Blocked request alerts</li>
                <li>Slack webhook integration</li>
              </ul>
            </DocSection>

            <DocSection id='redis' title='7. Redis Behavior'>
              <table className='w-full border border-neutral-800 text-sm'>
                <thead className='bg-neutral-900'>
                  <tr>
                    <th className='p-2 text-left'>Counter</th>
                    <th className='p-2 text-left'>TTL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-2'>Rate limit</td>
                    <td className='p-2'>~2 minutes</td>
                  </tr>
                  <tr>
                    <td className='p-2'>Daily budget</td>
                    <td className='p-2'>48 hours</td>
                  </tr>
                  <tr>
                    <td className='p-2'>Monthly budget</td>
                    <td className='p-2'>35 days</td>
                  </tr>
                </tbody>
              </table>
            </DocSection>

            <DocSection id='providers' title='8. Supported Providers'>
              <ul className='list-disc ml-6'>
                <li>OpenAI</li>
                <li>Groq</li>
              </ul>
            </DocSection>

            <DocSection id='security' title='9. Security Model'>
              <ul className='list-disc ml-6 space-y-2'>
                <li>No payload logging</li>
                <li>No API keys stored</li>
                <li>No PII collected</li>
                <li>Designed for self-hosted environments</li>
              </ul>
            </DocSection>

            <DocSection id='philosophy' title='10. Philosophy'>
              <blockquote className='border-l-4 border-accent pl-4 text-neutral-300 italic'>
                One blocked runaway request can pay for this tool for a year.
              </blockquote>
            </DocSection>

            <Reveal>
              <div className='pt-10'>
                <Link
                  href='/api-guardian'
                  className='text-sm text-neutral-400 hover:text-white transition'
                >
                  ← Back to API Guardian overview
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ================= TOC ================= */}
          <aside className='hidden lg:block sticky top-32 h-fit'>
            <div className='rounded-xl border border-neutral-800 bg-neutral-900/60 p-4'>
              <p className='text-sm font-medium text-neutral-300 mb-4'>
                On this page
              </p>

              <ul className='space-y-2 text-sm'>
                {[
                  ['Prerequisites', '#prerequisites'],
                  ['Installation', '#installation'],
                  ['Usage', '#usage'],
                  ['Rate Limiting', '#rate-limiting'],
                  ['Budget Enforcement', '#budget'],
                  ['Alerts', '#alerts'],
                  ['Redis Behavior', '#redis'],
                  ['Supported Providers', '#providers'],
                  ['Security Model', '#security'],
                  ['Philosophy', '#philosophy']
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className='text-neutral-400 hover:text-white transition block'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

/* ================= HELPERS ================= */

function DocSection ({
  id,
  title,
  children
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <Reveal>
      <section id={id} className='scroll-mt-32'>
        <h2 className='text-xl md:text-2xl font-semibold mb-4'>{title}</h2>
        <div className='text-neutral-400 leading-relaxed space-y-4'>
          {children}
        </div>
      </section>
    </Reveal>
  )
}

function SubTitle ({ children }: { children: React.ReactNode }) {
  return <h3 className='mt-6 mb-2 font-medium text-neutral-200'>{children}</h3>
}

function CodeBlock ({ children }: { children: string }) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className='relative group'>
      <button
        onClick={handleCopy}
        className='
          absolute top-2 right-2 z-10
          rounded-md border border-neutral-700
          bg-neutral-900 px-2 py-1
          text-xs text-neutral-300
          opacity-0 group-hover:opacity-100
          transition hover:border-neutral-500
        '
      >
        {copied ? 'Copied' : 'Copy'}
      </button>

      <pre className='mt-3 overflow-x-auto rounded-lg bg-neutral-950 border border-neutral-800 p-4 text-sm text-neutral-200'>
        <code>{children}</code>
      </pre>
    </div>
  )
}
