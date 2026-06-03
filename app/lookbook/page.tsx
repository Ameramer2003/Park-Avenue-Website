import { lookbookEntries, products } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const woodBg = {
  backgroundImage: "url('/wood-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
} as const;

export default function LookbookPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative text-cream" style={woodBg}>
        <div className="bg-walnut-darker/55 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-walnut-light mb-3">Editorial</p>
          <h1 className="font-serif text-5xl md:text-6xl">The Lookbook</h1>
          <p className="text-cream/60 mt-4 text-lg max-w-md mx-auto">
            Outfits composed for the gentleman who dresses with intention.
          </p>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {lookbookEntries.map((entry, i) => {
            const isReversed = i % 2 !== 0;
            const entryProducts = products.filter((p) => entry.products.includes(p.slug));

            return (
              <div key={entry.id} className="flex flex-col gap-4">
                <div className="relative aspect-[4/5] overflow-hidden bg-cream-dark">
                  <Image
                    src={entry.image}
                    alt={entry.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={`flex flex-col gap-2 ${isReversed ? "items-end text-right" : ""}`}>
                  <p className="text-xs uppercase tracking-widest text-walnut">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="font-serif text-2xl text-walnut-darker">{entry.title}</h2>
                  <p className="text-walnut-dark/70 text-sm leading-relaxed max-w-xs">{entry.description}</p>
                  {entryProducts.length > 0 && (
                    <div className={`flex flex-wrap gap-2 mt-2 ${isReversed ? "justify-end" : ""}`}>
                      {entryProducts.map((p) => (
                        <Link
                          key={p.slug}
                          href={`/shop/${p.slug}`}
                          className="text-xs uppercase tracking-widest text-walnut border border-walnut/30 px-3 py-1.5 hover:bg-walnut hover:text-cream transition-colors"
                        >
                          {p.name.split("—")[0].trim()}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-cream" style={woodBg}>
        <div className="bg-walnut-darker/55 py-16 text-center">
          <p className="text-xs uppercase tracking-widest text-walnut-light mb-3">Ready to Shop?</p>
          <h2 className="font-serif text-3xl text-cream mb-6">Find Your Look</h2>
          <Link
            href="/shop"
            className="inline-block border border-cream/50 text-cream px-10 py-3 text-sm uppercase tracking-widest hover:bg-cream hover:text-walnut-darker transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  );
}
