import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/data";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="overflow-hidden bg-cream-dark aspect-[3/4] relative">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="pt-3 pb-5">
        <p className="text-xs uppercase tracking-widest text-walnut mb-1">{product.category}</p>
        <p className="font-serif text-lg text-walnut-darker leading-snug group-hover:text-walnut transition-colors">
          {product.name}
        </p>
        <p className="text-sm text-walnut-dark mt-1">${product.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}
