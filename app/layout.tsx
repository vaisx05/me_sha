import './globals.css'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

const grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk'
})

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={`${inter.variable} ${grotesk.variable}`}>
      <body className='bg-black text-white font-inter relative min-h-screen'>
        {/* Global cinematic background */}
        <div className='fixed inset-0 -z-10 bg-gradient-to-br from-neutral-950 via-black to-neutral-900' />
        {children}
      </body>
    </html>
  )
}
