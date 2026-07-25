"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image, { ImageProps } from "next/image"

interface ParallaxImageProps extends Omit<ImageProps, "src"> {
  src: string
  alt: string
  offset?: number
}

export function ParallaxImage({ src, alt, offset = 100, className, ...props }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  // Map 0 -> 1 scroll progress to -offset -> +offset
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-100px] w-[calc(100%+200px)] h-[calc(100%+200px)]">
        <Image src={src} alt={alt} fill className={className} {...props} />
      </motion.div>
    </div>
  )
}
