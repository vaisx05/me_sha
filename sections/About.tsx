import Reveal from '@/animations/Reveal'

export default function About () {
  return (
    <section className='min-h-screen py-32 px-6 flex items-center'>
      <div className='max-w-6xl mx-auto w-full'>
        <Reveal>
          <h2 className='text-3xl md:text-4xl font-semibold'>About Me</h2>
        </Reveal>

        <Reveal>
          <p className='mt-6 text-lg text-neutral-400 leading-relaxed'>
            I’m a software and AI engineer focused on building secure,
            intelligent systems — from voice automation pipelines to
            security-aware applications and scalable products.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
