import { products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <nav className="text-xs uppercase tracking-widest text-walnut/60 mb-8 flex gap-2">
        <Link href="/shop" className="hover:text-walnut transition-colors">Shop</Link>
        <span>/</span>
        <span className="text-walnut">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
        {/* Image */}
        <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-walnut mb-2">{product.category}</p>
            <h1 className="font-serif text-4xl text-walnut-darker leading-snug">{product.name}</h1>
            <p className="text-2xl text-walnut-dark mt-3">${product.price.toLocaleString()}</p>
          </div>

          <p className="text-walnut-dark/80 leading-relaxed border-t border-cream-dark pt-6">
            {product.description}
          </p>

          {/* Size selector */}
          <div>
            <p className="text-xs uppercase tracking-widest text-walnut mb-3">Select Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="w-14 h-10 border border-walnut-dark/30 text-sm text-walnut-dark hover:border-walnut hover:text-walnut transition-colors"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button className="w-full bg-walnut text-cream py-4 text-sm uppercase tracking-widest hover:bg-walnut-dark transition-colors mt-2">
            Add to Cart
          </button>

          <p className="text-xs text-walnut/50 text-center tracking-wide">
            Free shipping on orders over $200
          </p>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20 border-t border-cream-dark pt-12">
          <p className="text-xs uppercase tracking-widest text-walnut mb-2">You May Also Like</p>
          <h2 className="font-serif text-2xl text-walnut-darker mb-8">More in {product.category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link key={p.slug} href={`/shop/${p.slug}`} className="group block">
                <div className="relative aspect-[3/4] bg-cream-dark overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="33vw"
                  />
                </div>
                <p className="font-serif mt-2 text-walnut-darker group-hover:text-walnut transition-colors">{p.name}</p>
                <p className="text-sm text-walnut-dark">${p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
