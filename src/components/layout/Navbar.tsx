import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export function Navbar() {
  return (
    <nav className="bg-olive text-cream sticky top-0 z-50 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="font-serif text-3xl tracking-widest text-gold">
              AZRA
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-gold transition-colors">HOME</Link>
            <Link href="/shop" className="text-sm font-medium hover:text-gold transition-colors">SHOP</Link>
            <Link href="/collections" className="text-sm font-medium hover:text-gold transition-colors">COLLECTIONS</Link>
            <Link href="/about" className="text-sm font-medium hover:text-gold transition-colors">STORY</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="hover:text-gold transition-colors relative">
              <ShoppingCart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
