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
    title: "Matériaux Résistants (IPX4)",
    description:
      "Conception étanche à l'extérieur, et silicone alimentaire doux à l'intérieur pour préserver le mors.",
  },
  {
    title: "Fermeture & Contrôle",
    description:
      "Aimants néodyme haute résistance, poche pour batterie externe et bouton LED manipulable avec des gants.",
  },
]

export function MacroDetails() {
  return (
    <section id="technologie" className="relative w-full bg-white text-black">
      <div className="flex flex-col md:flex-row">
        
        {/* Left Side: Sticky Image */}
        <div className="relative h-[50vh] w-full md:sticky md:top-0 md:h-screen md:w-1/2">
          <Image
            src="/hott-detail.png"
            alt="Détail macro du WARMBIT"
            fill
            className="object-cover"
          />
          {/* Subtle gradient to blend with the black background */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Right Side: Scrolling Specifications */}
        <div className="flex w-full flex-col justify-center px-8 py-24 md:w-1/2 md:px-20 md:py-48">
          <motion.span 
            {...fadeUp}
            className="mb-24 block text-xs uppercase font-semibold tracking-[0.3em] text-beige"
          >
            Le détail de l'ingénierie
          </motion.span>
          
          <div className="flex flex-col gap-32">
            {specifications.map((spec, index) => (
              <motion.div 
                key={spec.title} 
                {...fadeUp}
                className="group flex flex-col gap-6 border-b border-black/5 pb-12"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-2xl font-bold tracking-widest text-beige transition-colors">
                    0{index + 1}
                  </span>
                  <h3 className="text-balance font-sans text-4xl font-semibold tracking-tighter md:text-5xl lg:text-6xl text-black">
                    {spec.title}
                  </h3>
                </div>
                <p className="max-w-md font-sans text-lg font-medium leading-relaxed text-black/60 md:text-xl">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Section at the end of the scroll */}
          <motion.div 
            {...fadeUp}
            className="mt-24 flex flex-col gap-8 rounded-3xl border border-black/10 bg-beige/10 p-10 transition-colors hover:border-beige"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-beige">Contact</span>
              <p className="mt-4 font-sans text-2xl font-medium tracking-tight md:text-3xl text-black">
                Un conseiller à votre écoute
              </p>
            </div>
            <dl className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Téléphone</dt>
                <dd className="mt-1 font-sans text-sm font-medium tracking-wide text-black">+33 1 84 00 00 00</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-black/40">Email</dt>
                <dd className="mt-1 font-sans text-sm font-medium tracking-wide text-black">conseil@hott.com</dd>
              </div>
            </dl>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
