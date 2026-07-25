"use client"

import { motion } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  // Split text into words
  const words = text.split(" ")

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  }

  const wordVariants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.9,
      },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <div key={index} className="overflow-hidden pb-1 mr-[0.25em] last:mr-0 inline-flex">
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </div>
      ))}
    </motion.div>
  )
}
