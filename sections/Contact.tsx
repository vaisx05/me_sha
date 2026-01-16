import Reveal from "../animations/Reveal"

export default function Contact() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold">
              Let’s build something that actually matters.
            </h2>

            <p className="mt-6 text-neutral-400 text-lg">
              I work with founders and technical teams on security-first systems,
              infrastructure, and AI products that need to hold up in the real world.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="mailto:your@email.com"
                className="
                  px-6 py-3 rounded-xl
                  bg-white text-black font-medium
                  hover:bg-neutral-200
                  transition
                "
              >
                Start a technical conversation
              </a>

              <a
                href="https://github.com/vaisx05"
                target="_blank"
                className="
                  text-neutral-400
                  hover:text-white
                  transition
                "
              >
                View GitHub →
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
