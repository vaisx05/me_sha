import Reveal from "../animations/Reveal"

const projects = [
  {
    title: "API Guardian",
    flagship: true,
    problem:
      "Client applications were directly consuming third-party APIs, exposing keys, making rate limits unenforceable, and offering no visibility into abuse or failures.",
    decision:
      "Designed a dedicated API gateway layer between clients and external APIs, enforcing authentication, rate limits, key isolation, and structured logging at the edge.",
    outcome: [
      "API keys fully isolated from client-side exposure",
      "Abuse and traffic spikes controlled at the gateway",
      "Clear observability into usage and failure patterns",
      "Deployable as self-hosted Docker or VPS-based system"
    ],
    tech: [
      "Docker",
      "Reverse Proxy",
      "Nginx",
      "API Security",
      "Rate Limiting",
      "Auth Middleware"
    ]
  },
  // {
  //   title: "AI Voice Automation Platform",
  //   problem:
  //     "Traditional voice bots suffer from high latency, rigid flows, and poor coordination between speech recognition, reasoning, and response generation.",
  //   decision:
  //     "Built a low-latency, streaming voice pipeline using real-time STT/TTS and LLM-based reasoning instead of blocking request–response flows.",
  //   outcome: [
  //     "Natural, real-time conversational latency",
  //     "Modular pipeline separating STT, reasoning, and TTS",
  //     "Production-ready voice agents for intelligent workflows"
  //   ],
  //   tech: ["OpenAI API", "Python", "STT", "TTS"]
  // },
  {
    title: "blockvault",
    problem:
      "Public blockchain transparency conflicts with user privacy for sensitive transactions.",
    decision:
      "Implemented zero-knowledge proofs to validate transactions without exposing sensitive data on-chain.",
    outcome: [
      "Transaction privacy preserved on Ethereum testnet",
      "Proof-based validation without revealing state",
      "Hands-on exploration of ZKP performance trade-offs"
    ],
    tech: ["Flutter", "Node.js", "Solidity", "Ethereum", "ZKP"]
  },
  {
    title: "GPS College Bus Tracking System",
    problem:
      "Students lacked reliable visibility into bus arrival times, causing delays and safety concerns.",
    decision:
      "Built a real-time GPS tracking system with QR-based access verification and live updates.",
    outcome: [
      "Reduced student wait times",
      "Improved real-time communication",
      "Reliable tracking under real-world conditions"
    ],
    tech: ["Flutter", "MapBox", "Firebase", "Arduino", "GPS"]
  }
];

export default function Projects() {
  return (
    <section className="min-h-screen py-32 px-6 flex items-center">
      <div className="max-w-6xl mx-auto w-full">

        <Reveal>
          <h2 className="text-3xl md:text-4xl font-grotesk font-bold text-center">
            Selected Projects
          </h2>
        </Reveal>

        <div className="mt-20 space-y-16">
          {projects.map((project, index) => (
            <Reveal key={index}>
              <div
                className={`
                  group
                  rounded-2xl border
                  p-10 md:p-10
                  ${project.flagship ? "md:p-12" : ""}
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  ${
                    project.flagship
                      ? "border-accent bg-neutral-900/80 shadow-[0_0_80px_rgba(59,130,246,0.15)] hover:shadow-[0_0_120px_rgba(59,130,246,0.25)]"
                      : "border-neutral-800 bg-neutral-900/60 hover:border-neutral-600 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                  }
                `}
              >
                {/* Header */}
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {project.flagship && (
                    <span className="text-xs px-3 py-1 rounded-full border border-accent text-accent">
                      Flagship
                    </span>
                  )}
                </div>

                {/* Problem */}
                <p className="mt-6 text-neutral-400">
                  <span className="text-neutral-200 font-medium">Problem:</span>{" "}
                  {project.problem}
                </p>

                {/* Decision */}
                <p className="mt-4 text-neutral-400">
                  <span className="text-neutral-200 font-medium">Decision:</span>{" "}
                  {project.decision}
                </p>

                {/* Outcome (semantic fix) */}
                <div className="mt-4">
                  <p className="text-neutral-200 font-medium mb-2">Outcome:</p>
                  <ul className="space-y-2 text-neutral-400">
                    {project.outcome.map((item, i) => (
                      <li key={i} className="ml-4 list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        text-xs px-3 py-1 rounded-full
                        border border-neutral-700
                        text-neutral-400
                        group-hover:border-neutral-600
                        transition-colors
                      "
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
  );
}
