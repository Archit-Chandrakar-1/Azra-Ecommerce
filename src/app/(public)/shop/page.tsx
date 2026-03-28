import { ProductCard } from "@/components/product/ProductCard";

// Mock data
const products = [
  { id: "na-1", title: "Olive Silk Dress", price: "$240", image: "/images/arrival_1.png", category: "Festive" },
  { id: "na-2", title: "Beige Linen Abaya", price: "$210", image: "/images/arrival_2.png", category: "Casual" },
  { id: "na-3", title: "Gold Embroidered Top", price: "$180", image: "/images/arrival_3.png", category: "Festive" },
  { id: "na-4", title: "Cream Wide Leg Trousers", price: "$150", image: "/images/collection_casual.png", category: "Casual" },
  { id: "wd-1", title: "Bridal Modesty Gown", price: "$850", image: "/images/collection_wedding.png", category: "Wedding" },
  { id: "fs-1", title: "Emerald Velvet Dress", price: "$320", image: "/images/collection_festive.png", category: "Festive" },
];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 border-b border-gold/20 pb-6">
        <h1 className="font-serif text-4xl text-olive tracking-widest">THE COLLECTION</h1>
        <p className="text-sm text-olive/60 uppercase tracking-widest mt-4 md:mt-0">{products.length} Products</p>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="space-y-10 sticky top-28">
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-olive mb-4">Categories</h3>
              <ul className="space-y-3 text-sm text-olive/80">
                <li><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-gold w-4 h-4 cursor-pointer" /> <span className="group-hover:text-gold transition-colors">All Collections</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-gold w-4 h-4 cursor-pointer" /> <span className="group-hover:text-gold transition-colors">Festive Wear</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-gold w-4 h-4 cursor-pointer" /> <span className="group-hover:text-gold transition-colors">Wedding Edition</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-gold w-4 h-4 cursor-pointer" /> <span className="group-hover:text-gold transition-colors">Everyday Casual</span></label></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-olive mb-4">Price</h3>
              <ul className="space-y-3 text-sm text-olive/80">
                <li><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-gold w-4 h-4 cursor-pointer" /> <span className="group-hover:text-gold transition-colors">Under $200</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-gold w-4 h-4 cursor-pointer" /> <span className="group-hover:text-gold transition-colors">$200 - $500</span></label></li>
                <li><label className="flex items-center gap-3 cursor-pointer group"><input type="checkbox" className="accent-gold w-4 h-4 cursor-pointer" /> <span className="group-hover:text-gold transition-colors">Over $500</span></label></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase tracking-widest text-olive mb-4">Color</h3>
              <div className="flex gap-3 flex-wrap">
                <button className="w-6 h-6 rounded-full bg-olive border border-transparent ring-2 ring-offset-2 ring-transparent hover:ring-gold transition-all"></button>
                <button className="w-6 h-6 rounded-full bg-beige border border-olive/20 ring-2 ring-offset-2 ring-transparent hover:ring-gold transition-all"></button>
                <button className="w-6 h-6 rounded-full bg-cream border border-olive/20 ring-2 ring-offset-2 ring-transparent hover:ring-gold transition-all"></button>
                <button className="w-6 h-6 rounded-full bg-[#D4AF37] border border-transparent ring-2 ring-offset-2 ring-transparent hover:ring-gold transition-all"></button>
                <button className="w-6 h-6 rounded-full bg-black border border-transparent ring-2 ring-offset-2 ring-transparent hover:ring-gold transition-all"></button>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.image}
                category={product.category}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
