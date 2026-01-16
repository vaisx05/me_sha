import Reveal from "../animations/Reveal"

const principles = [
  {
    title: 'Design for Failure First',
    description:
      'I assume components will fail, APIs will timeout, and traffic will spike unexpectedly. Systems are designed to degrade gracefully, not collapse under stress.'
  },
  {
    title: 'Centralize Risk, Decentralize Features',
    description:
      'Security, rate limits, and policy enforcement belong in dedicated choke points. Product features should remain flexible without duplicating critical safeguards.'
  },
  {
    title: 'Latency Is a Product Feature',
    description:
      'Whether it’s APIs or voice systems, perceived intelligence drops when latency is unpredictable. I design pipelines to be streaming-first, not blocking.'
  },
  {
    title: 'Observability Over Assumptions',
    description:
      'If a system can’t explain what it’s doing, it can’t be trusted. Structured logs, metrics, and clear failure signals are built in from day one.'
  }
]

export default function SystemThinking () {
  return (
    <section className='min-h-screen py-32 px-6 flex items-center'>
      <div className='max-w-6xl mx-auto w-full'>
        <Reveal>
          <h2 className='text-3xl md:text-4xl font-grotesk font-bold'>
            How I Think About Systems
          </h2>
        </Reveal>

        <Reveal>
          <p className='mt-4 max-w-2xl text-neutral-400'>
            I approach engineering problems from a systems perspective, focusing
            on failure modes, scale constraints, and long-term maintainability —
            not just feature delivery.
          </p>
        </Reveal>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {principles.map((item, index) => (
            <Reveal key={index}>
              <div
                className='
  rounded-2xl
  bg-neutral-900/60
  border border-neutral-800
  p-8
  transition-all duration-300 ease-out
  hover:-translate-y-1
  hover:border-neutral-600
  hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]
'
              >
                <h3 className='text-xl font-semibold'>{item.title}</h3>

                <p className='mt-4 text-neutral-400'>{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
