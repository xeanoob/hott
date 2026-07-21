"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
}

const specifications = [
  {
    title: "Chauffe Intelligente",
    description:
      "Résistance en fibre de carbone avec régulation thermique de 25°C à 35°C et sécurité anti-surchauffe intégrée.",
  },
  {
    title: "Matériaux Résistants",
    description:
      "Conception étanche IPX4 à l'extérieur, et silicone alimentaire doux à l'intérieur pour préserver le mors.",
  },
  {
    title: "Contrôle Absolu",
    description:
      "Aimants néodyme haute résistance, poche pour batterie externe et bouton LED manipulable avec des gants.",
  },
]

export function MacroDetails() {
  return (
    <section id="technologie" className="relative w-full bg-white text-black">
      {/* Full-width immersive image — Devialet-style */}
      <div className="relative h-[60vh] w-full overflow-hidden md:h-[80vh]">
        <Image
          src="/hott-detail.png"
          alt="Détail macro du WARMBIT"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 px-6 pb-12 md:px-20 md:pb-20"
        >
          <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-black/40">
            Ingénierie
          </span>
          <h2 className="mt-3 font-sans text-4xl font-semibold tracking-tight text-black md:text-6xl lg:text-7xl">
            Le détail fait<br className="hidden md:block" /> la différence.
          </h2>
        </motion.div>
      </div>

      {/* Specifications — clean vertical list, Devialet style */}
      <div className="mx-auto max-w-5xl px-6 py-24 md:px-20 md:py-40">
        <div className="flex flex-col">
          {specifications.map((spec, index) => (
            <motion.div
              key={spec.title}
              {...fadeUp}
              className="group grid grid-cols-1 items-start gap-6 border-t border-black/10 py-16 md:grid-cols-12 md:gap-12 md:py-20"
            >
              <div className="md:col-span-1">
                <span className="font-sans text-sm font-semibold tracking-widest text-[#c5a880]">
                  0{index + 1}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-sans text-2xl font-semibold tracking-tight text-black md:text-3xl">
                  {spec.title}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="max-w-lg font-sans text-base font-normal leading-relaxed text-black/50 md:text-lg">
                  {spec.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact CTA — minimal, elegant */}
      <div className="border-t border-black/5">
        <motion.div
          {...fadeUp}
          className="mx-auto flex max-w-5xl flex-col items-center px-6 py-32 text-center md:px-20 md:py-40"
        >
          <span className="mb-6 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880]">
            Besoin de conseils ?
          </span>
          <h3 className="font-sans text-3xl font-semibold tracking-tight text-black md:text-5xl lg:text-6xl">
            Un conseiller à votre écoute.
          </h3>
          <p className="mt-6 max-w-md font-sans text-base font-normal leading-relaxed text-black/50">
            Notre équipe d'experts est disponible pour vous accompagner dans votre choix.
          </p>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="tel:+33184000000"
              className="inline-block border border-black bg-black px-10 py-4 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-transparent hover:text-black"
            >
              +33 1 84 00 00 00
            </a>
            <a
              href="mailto:conseil@hott.com"
              className="inline-block border border-black/20 bg-transparent px-10 py-4 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-black/60 transition-all duration-300 hover:border-black hover:text-black"
            >
              conseil@hott.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
