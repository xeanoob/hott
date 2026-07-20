"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative flex h-screen w-full items-end justify-start overflow-hidden bg-black pb-8 px-6 md:px-12 md:pb-12">
      <video 
        src="/11543-231232163_medium.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Dark gradient at the bottom so the white text pops perfectly */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex w-full flex-col md:flex-row md:items-end md:justify-between gap-8"
      >
        <div className="max-w-2xl text-left">
          <h1 className="font-serif text-4xl font-normal tracking-[0.15em] text-white md:text-6xl lg:text-7xl uppercase">
            HOTT
          </h1>
          <p className="mt-4 max-w-xl text-pretty font-serif text-lg italic tracking-wide text-white/90 md:text-xl">
            Parce que ton cheval le vaut bien.
          </p>
        </div>
        
        <div className="flex-shrink-0 text-left md:text-right">
          <a
            href="#boutique"
            className="inline-block border border-white bg-transparent px-10 py-4 font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Découvrir la collection
          </a>
        </div>
      </motion.div>
    </section>
  )
}
