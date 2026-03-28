export function Footer() {
  return (
    <footer className="bg-olive text-cream pt-16 pb-8 border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-gold tracking-widest mb-6">AZRA</h3>
            <p className="text-sm text-cream/80 max-w-xs">
              Premium designer clothing blending luxury fashion with subtle modest influences. Graceful, refined elegance.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-gold mb-6 tracking-wide">EXPLORE</h4>
            <ul className="space-y-4 text-sm text-cream/80">
              <li><a href="/shop" className="hover:text-gold transition-colors">New Arrivals</a></li>
              <li><a href="/shop" className="hover:text-gold transition-colors">Festive Collection</a></li>
              <li><a href="/shop" className="hover:text-gold transition-colors">Wedding Collection</a></li>
              <li><a href="/shop" className="hover:text-gold transition-colors">Casual Wear</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gold mb-6 tracking-wide">HELP</h4>
            <ul className="space-y-4 text-sm text-cream/80">
              <li><a href="#" className="hover:text-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} AZRA. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
