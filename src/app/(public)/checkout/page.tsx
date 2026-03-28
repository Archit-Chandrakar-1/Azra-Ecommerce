"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-12 border-b border-gold/20 pb-6">
        <h1 className="font-serif text-3xl md:text-4xl text-olive tracking-widest mb-4">SECURE CHECKOUT</h1>
        <div className="flex justify-center items-center text-sm font-medium tracking-widest uppercase">
          <span className="text-gold border-b border-gold pb-1">1. Shipping & Payment</span>
          <span className="mx-4 text-olive/30">-</span>
          <span className="text-olive/40">2. Confirmation</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12">
        {/* Checkout Form */}
        <div className="space-y-12">
          {/* Contact Info */}
          <section>
            <h2 className="font-serif text-2xl text-olive tracking-widest mb-6 border-b border-olive/10 pb-2">CONTACT</h2>
            <div className="space-y-4">
              <input type="email" placeholder="Email Address" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
            </div>
          </section>

          {/* Shipping Info */}
          <section>
            <h2 className="font-serif text-2xl text-olive tracking-widest mb-6 border-b border-olive/10 pb-2">SHIPPING</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
                <input type="text" placeholder="Last Name" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
              </div>
              <input type="text" placeholder="Address" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
              <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
              <div className="grid grid-cols-3 gap-4">
                <input type="text" placeholder="City" className="col-span-1 h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
                <input type="text" placeholder="State" className="col-span-1 h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
                <input type="text" placeholder="ZIP Code" className="col-span-1 h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40" />
              </div>
            </div>
          </section>

          {/* Payment Info */}
          <section>
            <h2 className="font-serif text-2xl text-olive tracking-widest mb-6 border-b border-olive/10 pb-2">PAYMENT</h2>
            <div className="p-6 border border-olive/20 rounded-sm bg-white/50 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <input type="radio" checked readOnly className="accent-gold w-4 h-4 cursor-pointer" />
                <span className="font-medium text-olive">Credit Card</span>
              </div>
              <input type="text" placeholder="Card Number" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40 text-olive" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM / YY" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40 text-olive" />
                <input type="text" placeholder="CVC" className="w-full h-12 px-4 bg-transparent border border-olive/20 rounded-sm focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all placeholder:text-olive/40 text-olive" />
              </div>
            </div>
          </section>

          <Button variant="primary" size="lg" className="w-full text-sm h-14 tracking-widest" onClick={() => alert("Order successfully placed!")}>PLACE SECURE ORDER</Button>
        </div>

        {/* Order Summary Sidebar */}
        <div className="order-first md:order-last">
          <div className="bg-cream/40 p-6 rounded-sm shadow-sm border border-gold/10 md:sticky md:top-28">
            <h2 className="font-serif text-xl text-olive tracking-widest mb-6 border-b border-gold/20 pb-4">ORDER SUMMARY</h2>
            <div className="space-y-4 mb-6">
              {[1, 2].map((item) => (
                <div key={item} className="flex gap-4">
                  <div className="w-16 h-20 bg-olive/10 rounded-sm flex-shrink-0 relative overflow-hidden">
                  </div>
                  <div className="text-sm pt-1">
                    <h3 className="font-medium text-olive line-clamp-1">{item === 1 ? "Emerald Velvet Dress" : "Beige Linen Abaya"}</h3>
                    <p className="text-olive/60 mt-1 uppercase tracking-wider text-xs">Qty: 1</p>
                    <p className="font-medium text-gold mt-1">{item === 1 ? "$320.00" : "$210.00"}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="border-t border-olive/10 pt-4 space-y-3 text-sm text-olive">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$530.00</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-gold">Complimentary</span>
              </div>
              <div className="border-t border-gold/20 pt-4 flex justify-between mt-4">
                <span className="font-medium uppercase tracking-widest">Total</span>
                <span className="text-xl font-serif font-medium text-gold">$530.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
