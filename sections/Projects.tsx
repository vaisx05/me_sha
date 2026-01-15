import Reveal from '@/animations/Reveal'

const projects = [
  {
    title: 'blockvault',
    description:
      'A ZKP-based decentralized wallet designed for secure and private blockchain transactions.',
    tech: ['Flutter', 'Node.js', 'Solidity', 'Ethereum', 'ZKP'],
    highlight:
      'Implemented zero-knowledge proofs to ensure transaction privacy on the Ethereum testnet.'
  },
  {
    title: 'GPS College Bus Tracking System',
    description:
      'A real-time GPS-based bus tracking system with QR verification to improve student safety and efficiency.',
    tech: ['Flutter', 'MapBox', 'Firebase', 'Arduino', 'GPS'],
    highlight:
      'Reduced student wait times and improved real-time communication between transport and students.'
  },
  {
    title: 'AI Voice Automation Platform',
    description:
      'AI-powered voice automation using LLMs and real-time voice agents for intelligent workflows.',
    tech: ['OpenAI API', 'LiveKit', 'Python', 'STT', 'TTS'],
    highlight:
      'Built reliable, low-latency voice pipelines integrated into production workflows.'
  },
  {
    title: 'API Guardian',
    description:
      'A secure API gateway and protection layer that sits between clients and external APIs to prevent abuse, leaks, and unauthorized usage.',
    tech: [
      'Docker',
      'Reverse Proxy',
      'API Security',
      'Rate Limiting',
      'Auth Middleware',
      'Nginx'
    ],
    highlight:
      'Designed to protect third-party API keys, enforce request limits, and provide a sellable self-hosted or VPS-deployed API security solution.'
  }
]

export default function Projects () {
  return (
    <section className='min-h-screen py-32 px-6 flex items-center'>
      <div className='max-w-6xl mx-auto w-full'>
        <Reveal>
          <h2 className='text-3xl md:text-4xl font-semibold text-center'>
            Selected Projects
          </h2>
        </Reveal>

        <div className='mt-16 space-y-12'>
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div
                className='border border-neutral-800 rounded-2xl p-8
                hover:border-neutral-600 hover:-translate-y-1
                transition-all duration-300'
              >
                <h3 className='text-2xl font-medium'>{project.title}</h3>

                <p className='mt-4 text-neutral-400'>{project.description}</p>

                <p className='mt-4 text-sm text-neutral-500'>
                  {project.highlight}
                </p>

                <div className='mt-6 flex flex-wrap gap-2'>
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className='text-xs px-3 py-1 rounded-full
                      border border-neutral-700 text-neutral-300'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
