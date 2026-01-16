'use client'

import Link from 'next/link'

export default function Footer () {
  return (
    <footer className="border-t border-neutral-900/60 mt-32">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left */}
        <div className="text-sm text-neutral-500">
          © {new Date().getFullYear()} Vaishak T. All rights reserved.
        </div>

        {/* Right */}
        <div className="flex items-center gap-6 text-sm text-neutral-500">
          <Link
            href="/api-guardian"
            className="hover:text-white transition"
          >
            API Guardian
          </Link>

          <Link
            href="/api-guardian/docs"
            className="hover:text-white transition"
          >
            Docs
          </Link>

          <a
            href="https://github.com/vaisx05"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
        </div>

      </div>
    </footer>
  )
}
