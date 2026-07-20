import Image from "next/image"

const products = [
  { name: "WARMBIT Original", desc: "La révolution thermique.", image: "/hott-detail.png" },
  { name: "WARMBIT Pro", desc: "Pour les cavaliers exigeants.", image: "/hott-detail.png" },
  { name: "Batterie Supplémentaire", desc: "Autonomie prolongée.", image: "/hott-detail.png" },
  { name: "Housse de Protection", desc: "L'élégance en voyage.", image: "/placeholder.jpg" },
]

export function ProductGridSection() {
  return (
    <section className="bg-white px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <h2 className="mb-16 font-sans text-3xl font-semibold tracking-tight text-black md:text-5xl">
          L'expérience HOTT.
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, idx) => (
            <div key={idx} className="group relative flex aspect-[3/4] cursor-pointer flex-col justify-between overflow-hidden border border-black/5 bg-[#fbfbf9] p-8 transition-transform duration-500 hover:scale-[1.02]">
              <div className="z-10">
                <h3 className="font-sans text-xl font-bold tracking-tight text-black">{product.name}</h3>
                <p className="mt-2 font-sans text-sm font-medium text-black/60">{product.desc}</p>
              </div>
              <div className="absolute inset-0 top-24 flex items-center justify-center p-8">
                <Image src={product.image} alt={product.name} fill className="object-contain p-12 transition-transform duration-700 group-hover:scale-110" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
