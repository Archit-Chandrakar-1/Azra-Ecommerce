import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  title: string;
  price: string;
  imageUrl: string;
  category?: string;
  className?: string;
}

export function ProductCard({ id, title, price, imageUrl, category, className = "" }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} className={`group block ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-beige mb-4 shadow-sm group-hover:shadow-md transition-shadow border border-transparent group-hover:border-gold/20">
        <Image
          src={imageUrl}
          alt={title}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <div className="flex flex-col space-y-1">
        {category && (
          <span className="text-xs uppercase tracking-wider text-olive/60 font-medium">
            {category}
          </span>
        )}
        <h3 className="font-serif text-lg text-olive group-hover:text-gold transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm font-medium text-olive/80">
          {price}
        </p>
      </div>
    </Link>
  );
}
