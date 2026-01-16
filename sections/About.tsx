import Image from "next/image";
import Reveal from "../animations/Reveal"

export default function About() {
  return (
    <section className="min-h-screen py-32 px-6 flex items-center">
      <div
        className="
          max-w-6xl mx-auto w-full
          grid grid-cols-1 md:grid-cols-2
          gap-16 items-center
        "
      >
        {/* LEFT — TEXT */}
        <Reveal>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-grotesk font-bold">
              About Me
            </h2>

            <p className="mt-6 text-neutral-400">
              I’m a software and AI engineer focused on building secure,
              intelligent systems — from voice automation pipelines to
              security-aware applications and scalable infrastructure.
            </p>

            <p className="mt-4 text-neutral-400">
              My work centers around system reliability, failure-aware design,
              and building products that can operate safely at scale.
            </p>
          </div>
        </Reveal>

        {/* RIGHT — PHOTO (CUTOUT + FADE) */}
        <Reveal>
          <div
            className="
              relative
              w-full max-w-sm mx-auto
              md:translate-y-4
            "
          >
            {/* Fade overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t from-black via-black/50 to-transparent
                z-10
              "
            />

            <Image
              src="/me.png"
              alt="Vaishak"
              width={420}
              height={520}
              priority
              className="
                object-cover
                rounded-2xl
                grayscale
                contrast-75
                opacity-90
              "
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
