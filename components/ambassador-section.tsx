"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
}

export function AmbassadorSection() {
  return (
    <section className="w-full bg-white px-6 py-32 md:px-12 lg:py-48">
      <div className="mx-auto max-w-[1400px]">

        {/* Asymmetric layout: image rectangle offset left, text offset right */}
        <div className="flex flex-col gap-16 md:flex-row md:items-start md:gap-12">

          {/* Image block — offset left, taller */}
          <motion.div 
            {...fadeUp}
            className="relative w-full overflow-hidden md:w-[55%]"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden">
              <Image 
                src="/hott-hero.png" 
                alt="Cavalier HOTT" 
                fill 
                className="object-cover" 
              />
            </div>
          </motion.div>

          {/* Text block — offset right, pushed down */}
          <motion.div 
            {...fadeUp}
            className="flex w-full flex-col justify-center md:w-[40%] md:pt-32"
          >
            <span className="mb-4 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880]">
              Témoignage
            </span>

            <blockquote className="relative">
              <p className="font-sans text-2xl font-semibold leading-[1.3] tracking-tight text-black md:text-3xl lg:text-4xl">
                « Le WARMBIT a changé ma façon d'aborder les compétitions hivernales. »
              </p>
              <p className="mt-6 max-w-md font-sans text-sm font-normal leading-relaxed text-black/45">
                Le cheval est plus détendu, plus réceptif dès les premières minutes. C'est un avantage compétitif indéniable.
              </p>
            </blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#c5a880]" />
              <div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-black">
                  Ambassadeur HOTT
                </p>
                <p className="mt-0.5 font-sans text-xs font-normal text-black/35">
                  Cavalier professionnel · CSO
                </p>
              </div>
            </div>

            <a
              href="#"
              className="mt-10 inline-block self-start border border-black bg-black px-8 py-3.5 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-transparent hover:text-black"
            >
              Leur histoire
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
