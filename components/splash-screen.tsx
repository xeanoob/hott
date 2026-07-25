"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setMounted(true)
    setIsMobile(window.innerWidth < 768)
    setWindowHeight(window.innerHeight)
    
    // Le splash screen dure 2.8s avant de se démonter
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2800)
    return () => clearTimeout(timer)
  }, [])

  // Calculs précis pour faire atterrir le logo EXACTEMENT à sa place dans le header
  const centerOffset = isMobile ? 34 : 52
  const targetHeight = isMobile ? 36 : 56
  const initialScaleMultiplier = isMobile ? 1.8 : 2.5
  
  // Rendre le SVG en grand nativement pour éviter le flou de rasterisation CSS
  const renderHeight = targetHeight * initialScaleMultiplier
  const finalScale = targetHeight / renderHeight

  // On calcule la valeur de translation Y en PIXELS purs uniquement si on est monté
  const finalY = mounted ? -(windowHeight / 2) + centerOffset : 0

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          // Disparaît doucement une fois l'animation terminée pour laisser place au vrai header
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black pointer-events-none"
        >
          {mounted && (
            <motion.div
              className="relative flex items-center justify-center"
              style={{ height: renderHeight }}
              initial={{ y: 0, scale: 1 }}
              animate={{ 
                y: [0, 0, finalY], 
                scale: [1, 1, finalScale], 
              }}
              transition={{ 
                duration: 2.4, 
                times: [0, 0.6, 1],
                ease: [0.76, 0, 0.24, 1] 
              }}
            >
              {/* Base logo very faint */}
              <img
                src="/7.svg"
                alt="HOTT Logo Faint"
                className="h-full w-auto object-contain opacity-20"
              />
              
              {/* Reveal logo */}
              <motion.img
                src="/7.svg"
                alt="HOTT Logo"
                className="absolute inset-0 h-full w-auto object-contain"
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0% 0 0)" }}
                transition={{ 
                  duration: 1.2, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.2
                }}
              />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
