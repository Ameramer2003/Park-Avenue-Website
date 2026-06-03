import { blogPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

const woodBg = {
  backgroundImage: "url('/wood-bg.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
} as const;

export default function BlogPage() {
  const [hero, ...rest] = blogPosts;

  return (
    <div>
      {/* Header */}
      <section className="relative text-cream" style={woodBg}>
        <div className="bg-walnut-darker/55 py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-walnut-light mb-3">The Journal</p>
          <h1 className="font-serif text-5xl md:text-6xl">Style &amp; Craft</h1>
          <p className="text-cream/60 mt-4 text-lg max-w-md mx-auto">
            Guides, stories, and advice for the well-dressed man.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured post */}
        <Link href={`/blog/${hero.slug}`} className="group grid md:grid-cols-2 gap-8 mb-16 items-center">
          <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden bg-cream-dark">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-walnut">Featured</p>
            <h2 className="font-serif text-3xl md:text-4xl text-walnut-darker group-hover:text-walnut transition-colors leading-snug">
              {hero.title}
            </h2>
            <p className="text-walnut-dark/70 leading-relaxed">{hero.excerpt}</p>
            <p className="text-xs text-walnut/50 mt-2 uppercase tracking-wider">{hero.date}</p>
          </div>
        </Link>

        {/* Divider */}
        <div className="border-t border-cream-dark mb-12" />

        {/* Remaining posts */}
        <div className="grid md:grid-cols-2 gap-10">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
              <div className="relative aspect-[16/9] overflow-hidden bg-cream-dark">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-walnut mb-1">{post.date}</p>
                <h3 className="font-serif text-2xl text-walnut-darker group-hover:text-walnut transition-colors leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-walnut-dark/70 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
