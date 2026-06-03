import { blogPosts } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <nav className="text-xs uppercase tracking-widest text-walnut/60 mb-8 flex gap-2">
        <Link href="/blog" className="hover:text-walnut transition-colors">Journal</Link>
        <span>/</span>
        <span className="text-walnut truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Header */}
      <p className="text-xs uppercase tracking-widest text-walnut mb-3">{post.date}</p>
      <h1 className="font-serif text-4xl md:text-5xl text-walnut-darker leading-tight mb-8">
        {post.title}
      </h1>

      {/* Hero image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-cream-dark mb-10">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="768px"
        />
      </div>

      {/* Content */}
      <article className="prose-walnut">
        {post.content.trim().split("\n\n").map((block, i) => {
          if (block.startsWith("**") && block.endsWith("**")) {
            return (
              <h2 key={i} className="font-serif text-2xl text-walnut-darker mt-8 mb-3">
                {block.replace(/\*\*/g, "")}
              </h2>
            );
          }
          const parsed = block.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
          return (
            <p
              key={i}
              className="text-walnut-dark/80 leading-relaxed mb-4"
              dangerouslySetInnerHTML={{ __html: parsed }}
            />
          );
        })}
      </article>

      {/* More posts */}
      {others.length > 0 && (
        <section className="mt-16 border-t border-cream-dark pt-12">
          <p className="text-xs uppercase tracking-widest text-walnut mb-6">More from the Journal</p>
          <div className="grid gap-6">
            {others.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-5 items-start">
                <div className="relative w-24 h-20 flex-shrink-0 overflow-hidden bg-cream-dark">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="96px"
                  />
                </div>
                <div>
                  <p className="text-xs text-walnut/50 uppercase tracking-wider mb-1">{p.date}</p>
                  <p className="font-serif text-lg text-walnut-darker group-hover:text-walnut transition-colors leading-snug">
                    {p.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
