import Image from "next/image"

export function AmbassadorSection() {
  return (
    <section className="bg-[#050B14] text-white">
      <div className="grid min-h-[80vh] grid-cols-1 lg:grid-cols-2">
        <div className="relative min-h-[50vh] w-full lg:min-h-full">
          <Image src="/placeholder.jpg" alt="Ambassador" fill className="object-cover" />
        </div>
        <div className="flex flex-col justify-center px-8 py-24 md:px-24">
          <span className="mb-4 block font-sans text-xs font-semibold uppercase tracking-widest text-white/40">
            Ambassadeur HOTT
          </span>
          <h2 className="font-sans text-4xl font-semibold leading-[1.1] tracking-tighter md:text-5xl lg:text-6xl">
            L'excellence n'est pas une option.
          </h2>
          <p className="mt-8 max-w-md font-sans text-lg font-medium leading-relaxed text-white/70">
            "Le WARMBIT a changé ma façon d'aborder les compétitions hivernales. Le cheval est plus détendu, plus réceptif dès les premières minutes."
          </p>
          <div className="mt-12">
            <a
              href="#"
              className="inline-block border border-white bg-white px-10 py-4 font-sans text-[0.65rem] font-medium uppercase tracking-[0.25em] text-black transition-colors duration-300 hover:bg-transparent hover:text-white"
            >
              Découvrir
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
