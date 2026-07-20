import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="w-full bg-white text-black border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 py-20 md:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          
          {/* Brand & Intro (Spans 5 cols) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Image 
                src="/7-black.svg" 
                alt="HOTT Logo" 
                width={586} 
                height={185} 
                unoptimized={true}
                className="h-12 w-auto self-start object-left mb-8" 
              />
              <p className="max-w-sm font-sans text-sm leading-relaxed text-black/60">
                L'élégance absolue, fondée sur le bien-être animal. HOTT redéfinit les standards de l'équipement équestre haut de gamme.
              </p>
            </div>
            
            {/* Newsletter */}
            <div className="mt-16">
              <h4 className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/40 mb-4">
                Restez informé
              </h4>
              <form className="relative flex items-center border-b border-black/20 pb-2 max-w-sm transition-colors focus-within:border-black">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  className="w-full bg-transparent font-sans text-sm outline-none placeholder:text-black/30"
                />
                <button type="submit" className="text-black/50 hover:text-black transition-colors ml-4">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Spacer (1 col) */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Links Grid (Spans 6 cols) */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-12">
            {/* Col 1 */}
            <div className="flex flex-col gap-5">
              <h4 className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-[#c5a880] mb-2">Découvrir</h4>
              <Link href="#technologie" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">Technologie</Link>
              <Link href="#philosophie" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">Philosophie</Link>
              <Link href="#boutique" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">La Boutique</Link>
            </div>
            
            {/* Col 2 */}
            <div className="flex flex-col gap-5">
              <h4 className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-[#c5a880] mb-2">Assistance</h4>
              <Link href="#" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">Nous contacter</Link>
              <Link href="#" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">Livraison</Link>
              <Link href="#" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">Retours</Link>
            </div>
            
            {/* Col 3 */}
            <div className="flex flex-col gap-5">
              <h4 className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-[#c5a880] mb-2">Légal</h4>
              <Link href="#" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">Mentions légales</Link>
              <Link href="#" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">Confidentialité</Link>
              <Link href="#" className="font-sans text-sm text-black/70 transition-all hover:text-black hover:translate-x-1">CGV</Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-24 pt-8 flex flex-col md:flex-row items-center justify-between border-t border-black/10 gap-6">
          <p className="font-sans text-[0.65rem] font-medium tracking-wide text-black/40">
            &copy; {new Date().getFullYear()} HOTT. TOUS DROITS RÉSERVÉS.
          </p>
          <div className="flex gap-8">
            <a href="#" className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/60 transition-colors hover:text-black">Instagram</a>
            <a href="#" className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/60 transition-colors hover:text-black">Facebook</a>
            <a href="#" className="font-sans text-[0.65rem] font-semibold uppercase tracking-widest text-black/60 transition-colors hover:text-black">LinkedIn</a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
