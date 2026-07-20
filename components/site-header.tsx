"use client"

import { User, ShoppingBag, Search, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SiteHeader() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAccountOpen, setIsAccountOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  
  const [authStep, setAuthStep] = useState<"email" | "login" | "register">("email")
  const [emailValue, setEmailValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailValue) return
    setIsLoading(true)
    // Simulate database check
    setTimeout(() => {
      setIsLoading(false)
      if (emailValue.toLowerCase() === "test@hott.com") {
        setAuthStep("login")
      } else {
        setAuthStep("register")
      }
    }, 600)
  }

  // Reset form when drawer closes
  useEffect(() => {
    if (!isAccountOpen) {
      setTimeout(() => {
        setAuthStep("email")
        setEmailValue("")
      }, 300)
    }
  }, [isAccountOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Check if we are at the top (over the video)
      if (currentScrollY < 50) {
        setIsAtTop(true)
      } else {
        setIsAtTop(false)
      }

      // Check scroll direction for hide/show
      if (currentScrollY < 10) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const linkClass = `font-sans text-[0.75rem] uppercase tracking-[0.2em] transition-colors duration-300 ${
    isAtTop ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"
  }`

  const iconClass = `transition-colors duration-300 ${
    isAtTop ? "text-white/80 hover:text-white" : "text-black/60 hover:text-black"
  }`

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop ? "bg-transparent" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex w-full items-center justify-between px-6 py-4 md:grid md:grid-cols-3 md:px-12 md:py-6">
        {/* Left nav */}
        <nav
          aria-label="Navigation gauche"
          className="hidden items-center gap-8 md:flex"
        >
          <a href="#collections" className={linkClass}>
            Nos Collections
          </a>
          <a href="#histoire" className={linkClass}>
            Histoire
          </a>
        </nav>

        {/* Center logo */}
        <div className="flex justify-start md:justify-center">
          <a
            href="/"
            aria-label="HOTT — Accueil"
            className="flex flex-col items-center justify-center gap-1"
          >
            <Image 
              src="/hott-logo.svg" 
              alt="HOTT Logo" 
              width={200} 
              height={50} 
              className={`h-7 w-auto transition-all duration-300 ${isAtTop ? "invert" : ""}`} 
            />
            <span className={`font-serif text-[0.65rem] uppercase tracking-[0.2em] transition-colors duration-300 ${isAtTop ? "text-white" : "text-black"}`}>
              HOTT
            </span>
          </a>
        </div>

        {/* Right nav */}
        <nav
          aria-label="Navigation droite"
          className="flex items-center justify-end gap-6 md:gap-8"
        >
          <a href="#technologie" className={`hidden md:inline ${linkClass}`}>
            Technologie
          </a>
          <a href="#boutique" className={`hidden md:inline ${linkClass}`}>
            Boutique
          </a>
          <button
            type="button"
            aria-label="Recherche"
            className={iconClass}
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={18} strokeWidth={1} />
          </button>
          <button
            type="button"
            aria-label="Compte utilisateur"
            className={iconClass}
            onClick={() => setIsAccountOpen(true)}
          >
            <User size={18} strokeWidth={1} />
          </button>
          <button
            type="button"
            aria-label="Panier"
            className={iconClass}
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingBag size={18} strokeWidth={1} />
          </button>
        </nav>
      </div>
      </header>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
          onClick={() => setIsSearchOpen(false)}
        />
      )}

      {/* Search Panel (Top Dropdown) */}
      <div 
        className={`fixed inset-x-0 top-0 z-[101] flex w-full flex-col bg-white px-6 py-12 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-12 ${
          isSearchOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-xs font-semibold uppercase tracking-widest text-black/60">Recherche</h2>
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="flex items-center gap-2 text-black/60 transition-colors hover:text-black"
            >
              <span className="font-sans text-xs font-semibold uppercase tracking-widest">Fermer</span>
              <X size={18} strokeWidth={1} />
            </button>
          </div>
          
          <div className="relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-black/40" size={24} strokeWidth={1} />
            <input 
              type="text" 
              placeholder="Que recherchez-vous ?"
              className="w-full border-b border-black/20 bg-transparent py-4 pl-12 pr-4 font-sans text-2xl font-light text-black outline-none transition-colors focus:border-black placeholder:text-black/20"
              autoFocus={isSearchOpen}
            />
          </div>
          
          <div className="mt-8">
            <p className="font-sans text-xs font-medium uppercase tracking-widest text-black/40">Recherches populaires</p>
            <div className="mt-4 flex flex-wrap gap-4">
              {["WARMBIT", "Batterie", "Housse", "Application"].map((term) => (
                <button key={term} className="border border-black/10 px-4 py-2 font-sans text-sm text-black/60 transition-colors hover:border-black hover:text-black">
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Account Drawer Overlay */}
      {isAccountOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
          onClick={() => setIsAccountOpen(false)}
        />
      )}

      {/* Account Drawer Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-[101] flex w-full max-w-md flex-col bg-white p-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isAccountOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          onClick={() => setIsAccountOpen(false)}
          className="absolute right-8 top-8 flex items-center gap-2 text-black/60 transition-colors hover:text-black"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-widest">Fermer</span>
          <X size={18} strokeWidth={1} />
        </button>
        
        <div className="mt-20 flex h-full flex-col">
          <motion.h2 layout className="font-sans text-3xl font-semibold tracking-tight text-black">
            {authStep === "email" ? "Connexion" : authStep === "login" ? "Bon retour" : "Créer un compte"}
          </motion.h2>
          <motion.p layout className="mt-2 font-sans text-sm text-black/60">
            {authStep === "email" 
              ? "Saisissez votre e-mail pour continuer." 
              : authStep === "login"
              ? "Veuillez saisir votre mot de passe pour vous connecter."
              : "Complétez vos informations pour créer votre espace privilégié."}
          </motion.p>
          
          <motion.form 
            layout
            onSubmit={authStep === "email" ? handleEmailSubmit : (e) => e.preventDefault()}
            className="mt-12 flex flex-col gap-6"
          >
            <motion.div layout className="flex flex-col gap-2">
              <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">
                Adresse e-mail
              </label>
              <input 
                type="email" 
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                disabled={authStep !== "email" || isLoading}
                required
                className="border-b border-black/20 bg-transparent py-3 font-sans text-sm text-black outline-none transition-colors focus:border-black disabled:opacity-50"
                placeholder="nom@exemple.com"
              />
            </motion.div>
            
            <AnimatePresence mode="popLayout">
              {authStep === "register" && (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">
                      Prénom
                    </label>
                    <input type="text" required className="border-b border-black/20 bg-transparent py-3 font-sans text-sm text-black outline-none transition-colors focus:border-black" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">
                      Nom
                    </label>
                    <input type="text" required className="border-b border-black/20 bg-transparent py-3 font-sans text-sm text-black outline-none transition-colors focus:border-black" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="popLayout">
              {authStep !== "email" && (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2"
                >
                  <div className="flex justify-between">
                    <label className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40">
                      Mot de passe
                    </label>
                    {authStep === "login" && (
                      <a href="#" className="font-sans text-[0.65rem] font-medium tracking-wide text-black underline-offset-4 hover:underline">
                        Oublié ?
                      </a>
                    )}
                  </div>
                  <input 
                    type="password"
                    required
                    className="border-b border-black/20 bg-transparent py-3 font-sans text-sm text-black outline-none transition-colors focus:border-black"
                    placeholder="••••••••"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              layout
              type="submit"
              disabled={isLoading}
              className="mt-6 w-full border border-black bg-black py-4 font-sans text-[0.7rem] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent hover:text-black disabled:opacity-70"
            >
              {isLoading 
                ? "Chargement..." 
                : authStep === "email" 
                ? "Continuer" 
                : authStep === "login" 
                ? "Se connecter" 
                : "Créer mon compte"}
            </motion.button>
          </motion.form>
          
          <AnimatePresence>
            {authStep !== "email" && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="mt-8 text-center"
              >
                <button 
                  type="button"
                  onClick={() => setAuthStep("email")}
                  className="font-sans text-xs font-medium text-black/60 underline-offset-4 transition-colors hover:text-black hover:underline"
                >
                  Utiliser une autre adresse e-mail
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Cart Drawer Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/20 backdrop-blur-sm"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      {/* Cart Drawer Panel */}
      <div 
        className={`fixed inset-y-0 right-0 z-[101] flex w-full max-w-md flex-col bg-white p-8 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button 
          onClick={() => setIsCartOpen(false)}
          className="absolute right-8 top-8 flex items-center gap-2 text-black/60 transition-colors hover:text-black"
        >
          <span className="font-sans text-xs font-semibold uppercase tracking-widest">Fermer</span>
          <X size={18} strokeWidth={1} />
        </button>
        
        <div className="mt-20 flex h-full flex-col">
          <h2 className="font-sans text-3xl font-semibold tracking-tight text-black">Votre Panier</h2>
          
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <ShoppingBag size={48} strokeWidth={1} className="mb-6 text-black/20" />
            <p className="font-sans text-lg font-medium text-black/60">Votre panier est vide.</p>
            <p className="mt-2 font-sans text-sm text-black/40">Découvrez nos collections pour commencer vos achats.</p>
            
            <button 
              onClick={() => setIsCartOpen(false)}
              className="mt-8 border border-black px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
            >
              Continuer mes achats
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
