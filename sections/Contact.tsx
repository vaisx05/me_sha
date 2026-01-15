import Reveal from '@/animations/Reveal'

export default function Contact () {
  return (
    <section className='min-h-screen py-32 px-6 flex items-center'>
      <div className='max-w-6xl mx-auto w-full'>
        <Reveal>
          <h2 className='text-4xl md:text-5xl font-grotesk font-bold tracking-tight'>
            Let’s build something
            <span className='text-accent'> serious</span>.
          </h2>
        </Reveal>

        <Reveal>
          <p className='mt-6 text-lg text-neutral-400 max-w-2xl mx-auto'>
            I’m interested in system-level problems, security-first products,
            and ideas that need thoughtful engineering.
          </p>
        </Reveal>

        <Reveal>
          <div className='mt-12 flex flex-col sm:flex-row gap-6 justify-center'>
            <a
              href='mailto:thangarajk178@email.com'
              className='
              px-8 py-4 rounded-xl
              border border-neutral-700
              bg-neutral-900/60 backdrop-blur
              hover:border-accent
              hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]
              transition-all duration-300
              '
            >
              Start a conversation
            </a>

            <a
              href='https://github.com/vaisx05'
              target='_blank'
              className='px-8 py-4 rounded-xl text-neutral-400
              hover:text-white transition'
            >
              View GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
