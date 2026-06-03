import Link from "next/link";
import Image from "next/image";
import { products, lookbookEntries } from "@/lib/data";
import ProductCard from "@/components/shop/ProductCard";

const woodBg = {
  backgroundImage: "url('/wood-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
} as const;

export default function HomePage() {
  const featured = products.filter((p) => p.featured).slice(0, 4);
  const heroLookbook = lookbookEntries[0];

  return (
    <div>
      {/* Hero */}
      <section className="relative text-cream overflow-hidden" style={woodBg}>
        {/* Hero photo */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1600&q=80"
            alt="Park Avenue Hero"
            fill
            className="object-cover opacity-90"
            priority
          />
        </div>
        {/* Warm walnut tint to blend photo with wood theme */}
        {/* Light warm tint + text legibility overlay */}
        <div className="absolute inset-0 bg-walnut-darker/30" />
        <div className="relative max-w-7xl mx-auto px-6 py-40 flex flex-col items-center text-center gap-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white font-medium drop-shadow-md">{"Men's & Kids Fashion — Lakeland, FL"}</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            The Finest<br />Collection
          </h1>
          <p className="text-cream/70 max-w-md text-lg leading-relaxed">
            Premium suits, tuxedos, dress shirts, shoes, and accessories. Located inside the Lakeland Square Mall.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-2">
            <Link
              href="/shop"
              className="inline-block bg-walnut-light text-walnut-darker px-10 py-3 text-sm uppercase tracking-widest hover:bg-cream transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/lookbook"
              className="inline-block border border-cream/40 text-cream px-10 py-3 text-sm uppercase tracking-widest hover:bg-cream/10 transition-colors"
            >
              View Lookbook
            </Link>
          </div>
        </div>
      </section>

      {/* Occasions Banner */}
      <section className="relative text-cream" style={woodBg}>
        <div className="bg-walnut-darker/50">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-8 text-center">
            {["Prom", "Weddings", "Church", "Quinceaneras", "Black Tie Events"].map((occasion) => (
              <span key={occasion} className="text-xs uppercase tracking-widest text-cream/80">{occasion}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-walnut mb-2">New In Store</p>
            <h2 className="font-serif text-3xl text-walnut-darker">Featured Pieces</h2>
          </div>
          <Link
            href="/shop"
            className="text-sm uppercase tracking-widest text-walnut hover:text-walnut-dark underline underline-offset-4 transition-colors hidden md:block"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-8 md:hidden">
          <Link href="/shop" className="text-sm uppercase tracking-widest text-walnut hover:text-walnut-dark underline underline-offset-4">
            View All
          </Link>
        </div>
      </section>

      {/* Lookbook Banner */}
      <section className="relative text-cream" style={woodBg}>
        <div className="bg-walnut-darker/50">
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-0 grid md:grid-cols-2 items-center gap-0">
            <div className="relative aspect-[4/3] md:aspect-auto md:h-[500px]">
              <Image
                src={heroLookbook.image}
                alt={heroLookbook.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:px-16 py-12 flex flex-col gap-5">
              <p className="text-xs uppercase tracking-[0.3em] text-walnut-light">Lookbook</p>
              <h2 className="font-serif text-4xl leading-snug">{heroLookbook.title}</h2>
              <p className="text-cream/70 leading-relaxed">{heroLookbook.description}</p>
              <Link
                href="/lookbook"
                className="self-start border border-cream/40 text-cream px-8 py-3 text-sm uppercase tracking-widest hover:bg-cream hover:text-walnut-darker transition-colors"
              >
                View Lookbook
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section className="relative" style={woodBg}>
        <div className="bg-walnut-darker/60 py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-xs uppercase tracking-widest text-walnut-light mb-2">Come See Us</p>
            <h2 className="font-serif text-3xl text-cream mb-4">Find Us in Lakeland Square Mall</h2>
            <p className="text-cream/70 mb-2">3800 US Hwy 98 N, Suite 320 &mdash; Lakeland, FL 33809</p>
            <a href="tel:8638154677" className="text-walnut-light font-medium hover:text-cream transition-colors">
              (863) 815-4677
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-cream/60">
              <span>Mon - Sat: 11 AM - 8 PM</span>
              <span>Sun: Noon - 6 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Journal Teaser */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-xs uppercase tracking-widest text-walnut mb-2">The Journal</p>
        <h2 className="font-serif text-3xl text-walnut-darker mb-4">Style Tips &amp; Event Guides</h2>
        <p className="text-walnut-dark max-w-md mx-auto mb-8 leading-relaxed">
          Prom looks, wedding guides, and advice on getting the most out of your suit.
        </p>
        <Link
          href="/blog"
          className="inline-block bg-walnut text-cream px-10 py-3 text-sm uppercase tracking-widest hover:bg-walnut-dark transition-colors"
        >
          Read the Journal
        </Link>
      </section>
    </div>
  );
}
