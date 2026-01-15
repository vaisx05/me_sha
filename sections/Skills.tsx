import Reveal from '@/animations/Reveal'

const skills = [
  {
    title: 'AI & Voice Systems',
    items: [
      'OpenAI API',
      'LLM Integration',
      'Prompt Engineering',
      'STT / TTS Pipelines',
      'LiveKit Voice Agents',
      'RAG (Basics)'
    ]
  },
  {
    title: 'Security & Systems',
    items: [
      'API Security',
      'Linux Internals',
      'Networking',
      'Malware Analysis',
      'Burp Suite',
      'Wireshark'
    ]
  },
  {
    title: 'App & Backend',
    items: [
      'Flutter',
      'Node.js',
      'REST APIs',
      'PostgreSQL',
      'Firebase',
      'Deployment Pipelines'
    ]
  },
  {
    title: 'Creative & Tools',
    items: [
      'Adobe Photoshop',
      'Illustrator',
      'After Effects',
      'Figma (Intermediate)',
      'Git & GitHub'
    ]
  }
]

export default function Skills () {
  return (
    <section className='min-h-screen py-32 px-6 flex items-center'>
      <div className='max-w-6xl mx-auto w-full'>
        <Reveal>
          <h2 className='text-3xl md:text-4xl font-semibold text-center'>
            Skills & Expertise
          </h2>
        </Reveal>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8'>
          {skills.map((group, index) => (
            <Reveal key={index}>
              <div
                className='
rounded-2xl
bg-neutral-900/70
backdrop-blur
border border-neutral-800
p-8
hover:border-accent
hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]
transition-all duration-300
'
              >
                <h3 className='text-xl font-medium mb-4'>{group.title}</h3>

                <ul className='space-y-2 text-neutral-400'>
                  {group.items.map((skill, i) => (
                    <li key={i} className='flex items-center gap-2'>
                      <span className='w-1.5 h-1.5 rounded-full bg-neutral-500' />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
