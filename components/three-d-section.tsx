"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { ThreeDBit } from "./three-d-bit"
import { motion } from "framer-motion"
import { TextReveal } from "./text-reveal"

export function ThreeDSection() {
  return (
    <section className="relative w-full h-[100vh] bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
        <Suspense fallback={
          <div className="w-full h-full flex items-center justify-center text-white/20 font-sans tracking-widest uppercase text-xs">
            Chargement du modèle 3D...
          </div>
        }>
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
            <ThreeDBit />
          </Canvas>
        </Suspense>
      </div>

      {/* Overlay Text */}
      <div className="relative z-10 pointer-events-none flex flex-col items-center text-center px-6 mt-[60vh] md:mt-[70vh]">
        <TextReveal
          text="La Matière en Mouvement"
          className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880] mb-4"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl font-serif text-2xl md:text-4xl text-white tracking-wide"
        >
          Touchez et explorez l'architecture thermique.
        </motion.p>
      </div>

      {/* Vignette effect for blending edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-10" />
    </section>
  )
}
