import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/hero_banner.png" 
          alt="AZRA Luxury Fashion" 
          fill 
          priority
          className="object-cover object-[center_20%]"
        />
        <div className="absolute inset-0 bg-olive/30 mix-blend-multiply" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-5xl md:text-7xl text-gold mb-6 tracking-widest drop-shadow-md">ELEVATED ELEGANCE</h1>
          <p className="text-cream text-lg md:text-xl font-medium tracking-wide mb-10 max-w-2xl drop-shadow">
            Graceful, minimal, and refined modest fashion for the modern woman.
          </p>
          <Link href="/shop" className="pointer-events-auto">
            <Button variant="primary" size="lg">EXPLORE COLLECTION</Button>
          </Link>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-olive tracking-widest mb-4">OUR COLLECTIONS</h2>
          <div className="h-px w-24 bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {[
            { title: "Festive", image: "/images/collection_festive.png", link: "/shop?collection=festive" },
            { title: "Wedding", image: "/images/collection_wedding.png", link: "/shop?collection=wedding" },
            { title: "Casual", image: "/images/collection_casual.png", link: "/shop?collection=casual" },
          ].map((collection, index) => (
            <Link href={collection.link} key={index} className="group block relative aspect-[3/4] overflow-hidden rounded-sm bg-beige shadow-sm transition-transform duration-500 hover:-translate-y-2">
              <Image 
                src={collection.image} 
                alt={collection.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-olive/80 via-olive/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-serif text-2xl text-gold tracking-widest mb-2">{collection.title}</h3>
                <span className="text-cream text-sm uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 inline-block border-b border-gold pb-1">Shop Now</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals Carousel */}
      <section className="py-24 bg-olive text-cream w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-gold tracking-widest mb-4">NEW ARRIVALS</h2>
              <div className="h-px w-24 bg-gold"></div>
            </div>
            <Link href="/shop" className="text-sm uppercase tracking-widest text-cream hover:text-gold transition-colors hidden sm:block">
              View All
            </Link>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              { id: "na-1", title: "Olive Silk Dress", price: "$240", image: "/images/arrival_1.png" },
              { id: "na-2", title: "Beige Linen Abaya", price: "$210", image: "/images/arrival_2.png" },
              { id: "na-3", title: "Gold Embroidered Top", price: "$180", image: "/images/arrival_3.png" },
              { id: "na-4", title: "Cream Wide Leg Trousers", price: "$150", image: "/images/collection_casual.png" },
            ].map((product) => (
              <div key={product.id} className="snap-start shrink-0 w-[280px] sm:w-[320px]">
                <div className="bg-cream p-4 rounded-sm">
                  <ProductCard
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    imageUrl={product.image}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/shop">
              <Button variant="outline" size="md" className="w-full">VIEW ALL ARRIVALS</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center w-full">
        <h2 className="font-serif text-3xl md:text-4xl text-olive tracking-widest mb-8">THE AZRA STORY</h2>
        <p className="text-olive/80 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          Born from a desire to blend uncompromising luxury with modest sensibilities, AZRA represents the pinnacle of refined elegance. Every piece is crafted with meticulous attention to detail, using premium fabrics that drape gracefully and silhouettes that empower rather than reveal.
        </p>
        <p className="font-serif text-2xl text-gold italic">
          "Elegance is not about being noticed, it's about being remembered."
        </p>
      </section>
    </div>
  );
}
