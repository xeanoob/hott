"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { TextReveal } from "./text-reveal"

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
}

export function FounderWordSection() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Parallax très doux pour l'image
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    // Le fond n'est plus blanc pur, mais un beige crème très subtil et luxueux (#f9f8f6)
    <section ref={containerRef} className="relative w-full bg-[#f9f8f6] px-6 py-24 md:px-12 lg:py-40 overflow-hidden">
      
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
            text="Mot du Fondateur"
            className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880]"
          />
          
          {/* Image style magazine, adaptée pour mobile (carrée) et desktop (portrait) */}
          <div className="relative w-full aspect-square md:aspect-[3/4] overflow-hidden mt-6 md:mt-0">
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
            Je suis cavalier depuis plusieurs années. Et comme beaucoup d'entre vous, j'ai appris à lire mon cheval bien avant d'apprendre à le monter vraiment.
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
            J'ai toujours eu une philosophie simple, que certains coaches ne partagent pas forcément : je ne cherche jamais à faire céder un cheval. Je préfère répéter, varier, jouer — recommencer autrement jusqu'à ce que le bon mouvement devienne une évidence pour lui, pas une contrainte. Parce qu'il n'a rien demandé, lui. Il est là, noble, généreux, et il nous fait confiance. C'est à nous d'être à la hauteur de ça.
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }}>
            C'est avec cet état d'esprit que j'ai observé, un hiver, quelque chose que je n'arrivais plus à ignorer. Des chevaux qui lèvent la tête. Qui reculent. Qui serrent les dents. Pas par mauvaise volonté — par inconfort. Un mors glacé dans la bouche, ce n'est pas un détail. Pour un animal aussi sensible, c'est une agression.
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.2 }} className="text-black font-medium">
            J'ai cherché une solution. Je n'en ai pas trouvé. Alors je l'ai créée.
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.25 }}>
            HOTT, c'est ma façon de rendre à l'équidé une partie de ce qu'il nous donne. Ce partenaire silencieux qui porte notre poids, nos humeurs, nos journées difficiles — et qui repart quand même le lendemain avec la même générosité. Il mérite au minimum qu'on pense à lui avant même de lui mettre la bride.
          </motion.p>
          
          <motion.p {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.3 }}>
            WARMBIT est né de cette conviction : le confort de votre cheval n'est pas un luxe. C'est la base. Et si on peut le rendre accessible à tous les cavaliers, alors on aura fait quelque chose qui en vaut la peine.
          </motion.p>

          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.35 }} className="mt-8 pt-8 border-t border-black/10">
            <p className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-black">
              Le Fondateur HOTT
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
