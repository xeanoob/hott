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

  // Pour éviter une erreur d'hydratation, on ne fait le rendu qu'après le montage côté client
  if (!mounted) return null

  // Calculs précis pour faire atterrir le logo EXACTEMENT à sa place dans le header
  const centerOffset = isMobile ? 34 : 52

  // Échelle initiale réduite selon votre demande
  const initialScale = isMobile ? 1.8 : 2.5

  // On calcule la valeur de translation Y en PIXELS purs.
  // Framer Motion ne parvient pas toujours à animer "calc()" correctement, ce qui causait le saut (la téléportation).
  const finalY = -(windowHeight / 2) + centerOffset

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
          {/* On utilise une balise img standard avec les MÊMES classes que la barre de navigation.
              Ainsi, lorsque scale revient à 1, la taille est mathématiquement identique. */}
          <motion.img
            src="/7.svg"
            alt="HOTT Logo"
            className="h-9 md:h-14 w-auto object-contain"
            initial={{ y: 0, scale: initialScale, opacity: 0 }}
            animate={{ 
              y: [0, 0, finalY], 
              scale: [initialScale, initialScale, 1], 
              opacity: [0, 1, 1]
            }}
            transition={{ 
              duration: 2.2, 
              times: [0, 0.4, 1],
              ease: [0.76, 0, 0.24, 1] // Courbe d'accélération luxueuse (très fluide)
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
