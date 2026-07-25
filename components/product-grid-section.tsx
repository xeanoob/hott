"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { TextReveal } from "./text-reveal"
import { MagneticButton } from "./magnetic-button"
import { ParallaxImage } from "./parallax-image"
import { useCartStore } from "../lib/store/useCartStore"

const products = [
  {
    name: "WARMBIT",
    subtitle: "Original",
    desc: "La révolution thermique pour le bien-être de votre cheval.",
    image: "/hott-detail.png",
    macroImage: "/hott-hero.png",
    price: "À partir de 189€"
  },
  {
    name: "WARMBIT",
    subtitle: "Pro",
    desc: "Pour les cavaliers exigeants. Performance sans compromis.",
    image: "/hott-detail.png",
    macroImage: "/hott-hero.png",
    price: "À partir de 249€"
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
} as const

export function ProductGridSection() {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.name + product.subtitle,
      name: `${product.name} ${product.subtitle}`,
      price: parseInt(product.price.replace(/\D/g, "")),
      image: product.image,
      quantity: 1,
    })
  }

  return (
    <section id="experience" className="w-full bg-white px-6 py-32 md:px-12 lg:py-48">
      <div className="mx-auto max-w-[1400px]">

        {/* Section label */}
        <motion.span
          {...fadeUp}
          className="mb-6 block font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-black/30"
        >
          La Collection
        </motion.span>
        
        <TextReveal 
          text="L'expérience HOTT."
          className="max-w-2xl font-sans text-4xl font-semibold tracking-tight text-black md:text-6xl"
        />

        {/* Asymmetric product rectangles */}
        <div className="mt-24 flex flex-col gap-20 md:gap-32">

          {/* Product 1 — large, offset left */}
          <motion.div {...fadeUp} className="flex justify-start">
            <div className="group relative w-full overflow-hidden bg-[#f5f3ef] md:w-[75%]">
              <div className="relative aspect-[4/5] md:aspect-[16/10] w-full overflow-hidden">
                <ParallaxImage
                  src={products[0].image}
                  alt={products[0].name}
                  offset={40}
                  className="object-cover transition-all duration-[1.2s] ease-[0.22,1,0.36,1] group-hover:scale-105"
                />
                <ParallaxImage
                  src={products[0].macroImage}
                  alt={products[0].name + " Macro"}
                  offset={40}
                  className="object-cover opacity-0 transition-all duration-[0.8s] ease-[0.22,1,0.36,1] group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880]">
                  {products[0].price}
                </span>
                <h3 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-black md:text-4xl">
                  {products[0].name} <span className="font-light text-black/40">{products[0].subtitle}</span>
                </h3>
                <p className="mt-4 max-w-md font-sans text-sm font-normal leading-relaxed text-black/50">
                  {products[0].desc}
                </p>
                <div className="mt-8">
                  <MagneticButton onClick={() => handleAddToCart(products[0])}>
                    <div className="inline-block w-full text-center md:w-auto border border-black bg-black px-8 py-4 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-transparent hover:text-black">
                      Ajouter au panier
                    </div>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product 2 — smaller, offset right */}
          <motion.div {...fadeUp} className="flex md:justify-end mt-12 md:mt-0">
            <div className="group relative w-full overflow-hidden bg-[#f5f3ef] md:w-[60%]">
              <div className="relative aspect-[4/5] md:aspect-[4/3] w-full overflow-hidden">
                <ParallaxImage
                  src={products[1].image}
                  alt={products[1].name}
                  offset={40}
                  className="object-cover transition-all duration-[1.2s] ease-[0.22,1,0.36,1] group-hover:scale-105"
                />
                <ParallaxImage
                  src={products[1].macroImage}
                  alt={products[1].name + " Macro"}
                  offset={40}
                  className="object-cover opacity-0 transition-all duration-[0.8s] ease-[0.22,1,0.36,1] group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
              <div className="p-8 md:p-12">
                <span className="font-sans text-[0.6rem] font-semibold uppercase tracking-[0.4em] text-[#c5a880]">
                  {products[1].price}
                </span>
                <h3 className="mt-3 font-sans text-3xl font-semibold tracking-tight text-black md:text-4xl">
                  {products[1].name} <span className="font-light text-black/40">{products[1].subtitle}</span>
                </h3>
                <p className="mt-4 max-w-md font-sans text-sm font-normal leading-relaxed text-black/50">
                  {products[1].desc}
                </p>
                <div className="mt-8">
                  <MagneticButton onClick={() => handleAddToCart(products[1])}>
                    <div className="inline-block w-full text-center md:w-auto border border-black/20 bg-transparent px-8 py-4 font-sans text-[0.6rem] font-semibold uppercase tracking-[0.25em] text-black/60 transition-all duration-300 hover:border-black hover:text-black">
                      Ajouter au panier
                    </div>
                  </MagneticButton>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
