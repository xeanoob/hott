"use client"

import { motion } from "framer-motion"

export function MissionSection() {
  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-white px-6 py-24 md:px-20">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 block text-xs font-semibold uppercase tracking-[0.3em] text-beige"
        >
          Notre Philosophie
        </motion.span>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-balance font-sans text-4xl font-semibold tracking-tighter text-black md:text-6xl lg:text-7xl"
        >
          Le bien-être animal avant tout.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-12 max-w-3xl font-sans text-xl font-medium leading-relaxed text-black/60 md:text-3xl md:leading-normal"
        >
          Par temps froid, un mors métallique peut atteindre des températures très basses, rendant sa mise en bouche inconfortable et stressante pour le cheval. Avec WARMBIT, nous apportons la première solution portable et électrique du marché.
        </motion.p>
      </div>
    </section>
  )
}
