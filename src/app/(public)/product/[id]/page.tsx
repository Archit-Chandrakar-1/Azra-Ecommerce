import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ChevronRight, Heart, Share2 } from "lucide-react";

// In a real app we would fetch this based on params.id
const mockProduct = {
  id: "fs-1",
  title: "Emerald Velvet Dress",
  price: "$320",
  description: "A pinnacle of festive elegance. Cut from luxurious, heavyweight emerald velvet, this piece drapes beautifully and features intricate gold embroidery along the cuffs and neckline. Designed for the modest woman who appreciates refined details without compromising on comfort.",
  details: [
    "100% Premium Velvet",
    "Hand-embroidered gold detailing",
    "Fully lined with breathable silk blend",
    "Concealed back zip closure",
    "Dry clean only"
  ],
  images: [
    "/images/collection_festive.png",
    "/images/arrival_1.png", // using as secondary images for mock
  ]
};

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-olive/60 font-medium mb-10">
        <Link href="/" className="hover:text-gold transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <Link href="/shop" className="hover:text-gold transition-colors">Shop</Link>
        <ChevronRight className="w-4 h-4 mx-2" />
        <span className="text-olive">{mockProduct.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Product Images (Large focus) */}
        <div className="space-y-6">
          <div className="relative aspect-[3/4] w-full bg-beige overflow-hidden rounded-sm">
            <Image 
              src={mockProduct.images[0]} 
              alt={mockProduct.title} 
              fill 
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative aspect-[3/4] w-full bg-beige overflow-hidden rounded-sm">
              <Image 
                src={mockProduct.images[1] || mockProduct.images[0]} 
                alt={`${mockProduct.title} Detail`} 
                fill 
                className="object-cover object-center"
              />
            </div>
            {/* Another placeholder image slot */}
            <div className="relative aspect-[3/4] w-full bg-beige overflow-hidden rounded-sm">
              <Image 
                src={mockProduct.images[0]} 
                alt={`${mockProduct.title} Detail`} 
                fill 
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col pt-8 lg:pt-16">
          <h1 className="font-serif text-4xl text-olive tracking-widest mb-4">{mockProduct.title}</h1>
          <p className="text-2xl font-medium text-gold mb-8">{mockProduct.price}</p>
          
          <div className="prose prose-olive text-olive/80 mb-10">
            <p className="leading-relaxed">{mockProduct.description}</p>
          </div>

          <div className="space-y-6 mb-12">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium uppercase tracking-widest text-olive">Select Size</h3>
                <button className="text-xs text-olive hover:text-gold underline underline-offset-4 tracking-wide transition-colors">Size Guide</button>
              </div>
              <div className="grid grid-cols-5 gap-3">
                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                  <button key={size} className="h-12 border border-olive/20 text-olive hover:border-gold hover:text-gold transition-all rounded-sm flex items-center justify-center font-medium focus:outline-none focus:ring-1 focus:ring-gold focus:border-gold">
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-12">
            <Button variant="primary" size="lg" className="flex-grow">
              ADD TO CART
            </Button>
            <Button variant="outline" size="lg" className="px-5 group">
              <Heart className="w-5 h-5 group-hover:fill-gold transition-colors" />
            </Button>
          </div>

          <div className="border-t border-gold/20 pt-8 mt-auto space-y-6">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-olive mb-4">Details & Care</h3>
              <ul className="list-disc list-inside text-sm text-olive/80 space-y-2">
                {mockProduct.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm font-medium uppercase tracking-widest text-olive">Share</span>
              <button className="text-olive/60 hover:text-gold transition-colors"><Share2 className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
