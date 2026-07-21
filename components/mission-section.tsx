"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black px-6 py-32 md:px-20">
      {/* Subtle radial glow in the background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,168,128,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 block text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880]"
        >
          Notre Philosophie
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-balance font-sans text-4xl font-semibold tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Le bien-être animal avant tout.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-12 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c5a880] to-transparent"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-12 max-w-3xl font-sans text-lg font-normal leading-relaxed text-white/50 md:text-xl md:leading-relaxed"
        >
          Par temps froid, un mors métallique peut atteindre des températures très basses, rendant sa mise en bouche inconfortable et stressante pour le cheval. Avec WARMBIT, nous apportons la première solution portable et électrique du marché.
        </motion.p>

        {/* Key stats — Devialet-style horizontal row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          className="mt-24 grid w-full max-w-3xl grid-cols-3 gap-8 border-t border-white/10 pt-16"
        >
          {[
            { value: "25–35°C", label: "Température optimale" },
            { value: "IPX4", label: "Résistance à l'eau" },
            { value: "2h+", label: "Autonomie" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-3">
              <span className="font-sans text-2xl font-semibold tracking-tight text-white md:text-4xl">
                {stat.value}
              </span>
              <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
