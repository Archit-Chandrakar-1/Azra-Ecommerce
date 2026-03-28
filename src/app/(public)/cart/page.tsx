import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Trash2, Minus, Plus } from "lucide-react";

export default function CartPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-[70vh]">
      <h1 className="font-serif text-4xl text-olive tracking-widest mb-12 text-center border-b border-gold/20 pb-6">YOUR SHOPPING BAG</h1>
      
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16">
        {/* Cart Items */}
        <div className="space-y-8 flex-grow">
          {[1, 2].map((item) => (
            <div key={item} className="flex gap-6 border-b border-olive/10 pb-8">
              <div className="relative w-24 h-32 md:w-32 md:h-40 bg-beige rounded-sm overflow-hidden flex-shrink-0">
                <Image src={item === 1 ? "/images/collection_festive.png" : "/images/arrival_2.png"} alt="Product" fill className="object-cover" />
              </div>
              <div className="flex-grow flex flex-col pt-2">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-serif text-xl text-olive">{item === 1 ? "Emerald Velvet Dress" : "Beige Linen Abaya"}</h3>
                    <p className="text-sm text-olive/60 mt-1 tracking-wider uppercase">Size: M | Color: {item === 1 ? "Emerald" : "Beige"}</p>
                  </div>
                  <p className="font-medium text-gold">{item === 1 ? "$320" : "$210"}</p>
                </div>
                
                <div className="flex justify-between items-end mt-auto">
                  <div className="flex items-center border border-olive/20 rounded-sm">
                    <button className="px-3 py-1 text-olive hover:text-gold transition-colors"><Minus className="w-4 h-4" /></button>
                    <span className="px-3 py-1 text-sm font-medium">1</span>
                    <button className="px-3 py-1 text-olive hover:text-gold transition-colors"><Plus className="w-4 h-4" /></button>
                  </div>
                  <button className="text-sm text-olive/60 hover:text-gold transition-colors flex items-center gap-1 uppercase tracking-wider">
                    <Trash2 className="w-4 h-4" /> <span className="hidden sm:inline">Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-cream/40 p-8 rounded-sm shadow-sm border border-gold/10 w-full md:w-80 h-fit">
          <h2 className="font-serif text-xl text-olive tracking-widest mb-6">ORDER SUMMARY</h2>
          <div className="space-y-4 text-sm text-olive mb-6">
            <div className="flex justify-between">
              <span className="text-olive/80">Subtotal</span>
              <span className="font-medium">$530.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-olive/80">Shipping</span>
              <span className="font-medium text-olive/60">Calculated later</span>
            </div>
            <div className="border-t border-gold/20 pt-4 flex justify-between mt-4">
              <span className="font-medium uppercase tracking-widest">Estimated Total</span>
              <span className="text-lg font-medium text-gold">$530.00</span>
            </div>
          </div>
          <Link href="/checkout" className="block">
            <Button variant="primary" size="lg" className="w-full text-sm">PROCEED TO CHECKOUT</Button>
          </Link>
          <div className="mt-6 text-center">
            <Link href="/shop" className="text-xs uppercase tracking-widest text-olive hover:text-gold transition-colors underline underline-offset-4">Continue Shopping</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
