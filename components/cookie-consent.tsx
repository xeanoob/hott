"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    // Check if user already consented
    const consent = localStorage.getItem("hott_cookie_consent")
    if (!consent) {
      // Small timeout to appear elegantly after load
      const timer = setTimeout(() => setIsOpen(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAcceptAll = () => {
    localStorage.setItem(
      "hott_cookie_consent",
      JSON.stringify({ essential: true, analytics: true, marketing: true })
    )
    setIsOpen(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem("hott_cookie_consent", JSON.stringify(preferences))
    setIsOpen(false)
  }

  const handleDeclineAll = () => {
    localStorage.setItem(
      "hott_cookie_consent",
      JSON.stringify({ essential: true, analytics: false, marketing: false })
    )
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="fixed bottom-6 right-6 z-[100] w-full max-w-sm border border-black/10 bg-white/95 backdrop-blur-md p-6 shadow-2xl md:max-w-md"
        >
          <div className="flex flex-col gap-4">
            <h3 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-beige">
              Gestion des cookies
            </h3>

            {!showPreferences ? (
              <>
                <p className="font-sans text-xs leading-relaxed text-black/60 font-medium">
                  HOTT utilise des technologies de suivi pour optimiser votre expérience, analyser les visites et proposer des publicités personnalisées. Vous pouvez accepter, refuser ou personnaliser vos choix.
                </p>
                <div className="flex flex-col gap-2 mt-2">
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={handleDeclineAll}
                      className="border border-black/10 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-black hover:border-black transition-colors"
                    >
                      Tout refuser
                    </button>
                    <button
                      onClick={() => setShowPreferences(true)}
                      className="border border-black/10 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-black hover:border-black transition-colors"
                    >
                      Personnaliser
                    </button>
                  </div>
                  <button
                    onClick={handleAcceptAll}
                    className="w-full bg-black border border-black py-3.5 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white hover:bg-transparent hover:text-black transition-all"
                  >
                    Tout accepter
                  </button>
                </div>
              </>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3 mt-2">
                  <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-2">
                    <div>
                      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-wider text-black">Essentiels</p>
                      <p className="font-sans text-[0.65rem] text-black/40 mt-0.5 leading-relaxed">Requis pour le bon fonctionnement du site.</p>
                    </div>
                    <input type="checkbox" checked={true} disabled className="h-4 w-4 accent-black opacity-55" />
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-black/5 pb-2">
                    <div>
                      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-wider text-black">Analytiques</p>
                      <p className="font-sans text-[0.65rem] text-black/40 mt-0.5 leading-relaxed">Permet d'analyser l'audience et le trafic du site.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="h-4 w-4 accent-black"
                    />
                  </div>

                  <div className="flex items-start justify-between gap-4 pb-2">
                    <div>
                      <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-wider text-black">Marketing</p>
                      <p className="font-sans text-[0.65rem] text-black/40 mt-0.5 leading-relaxed">Utilisés pour vous proposer des offres ciblées.</p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="h-4 w-4 accent-black"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4 mt-2">
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="font-sans text-xs font-semibold text-black/40 hover:text-black transition-colors"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSavePreferences}
                    className="bg-black border border-black px-6 py-3 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.15em] text-white hover:bg-transparent hover:text-black transition-all"
                  >
                    Enregistrer mes choix
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
