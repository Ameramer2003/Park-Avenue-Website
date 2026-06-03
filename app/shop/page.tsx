import { products } from "@/lib/data";
import ProductCard from "@/components/shop/ProductCard";

const categories = ["All", "Suits", "Blazers", "Shirts", "Trousers", "Knitwear", "Footwear"];

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10 border-b border-cream-dark pb-8">
        <p className="text-xs uppercase tracking-widest text-walnut mb-2">Collections</p>
        <h1 className="font-serif text-4xl text-walnut-darker">Shop All</h1>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 text-xs uppercase tracking-widest border transition-colors ${
              cat === "All"
                ? "bg-walnut text-cream border-walnut"
                : "border-walnut-dark/30 text-walnut-dark hover:border-walnut hover:text-walnut"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
