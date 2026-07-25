"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { TextReveal } from "./text-reveal"
import { useTranslationStore } from "../lib/i18n/useTranslationStore"

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export function FounderWordSection() {
  const { dict } = useTranslationStore()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax très doux pour l'image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    // Le fond n'est plus blanc pur, mais un beige crème très subtil et luxueux (#f9f8f6)
    <section ref={containerRef} className="relative w-full bg-[#f9f8f6] px-8 py-28 md:px-12 lg:py-40 overflow-hidden">
      
      {/* Dégradé de transition ULTRA fluide : fond noir vers fond crème */}
      <div 
        className="absolute top-0 left-0 right-0 h-[400px] md:h-[500px] z-0 pointer-events-none" 
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 15%, rgba(0,0,0,0.4) 45%, rgba(249,248,246,0) 100%)'
        }}
      />

      <div className="mx-auto max-w-6xl relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 pt-12">
        
        {/* Colonne de gauche (Image Éditoriale) */}
        <motion.div 
          {...fadeUp}
          className="md:col-span-5 flex flex-col gap-12"
        >
          <TextReveal
            text={dict.founder.title}
            className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880]"
          />
          
          {/* Image style magazine, adaptée pour mobile (portrait 4:5) et desktop (portrait 3:4) */}
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden mt-6 md:mt-0">
            <motion.img 
              style={{ y: imageY, scale: 1.15 }}
              src="/hott-hero.png" 
              alt="HOTT Vision"
              className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125 opacity-90"
            />
          </div>
        </motion.div>

        {/* Colonne de droite (Texte) */}
        <div className="md:col-span-6 md:col-start-7 flex flex-col gap-8 font-sans text-lg md:text-xl font-light leading-[1.7] text-black/80">
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.05 }}>
            {dict.founder.p1}
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            {dict.founder.p2}
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            {dict.founder.p3}
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-black font-medium">
            {dict.founder.p4}
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
            {dict.founder.p5}
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
            {dict.founder.p6}
          </motion.p>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }} className="mt-8 pt-8 border-t border-black/10">
            <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-black">
              {dict.founder.signature}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
