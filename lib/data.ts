export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  sizes: string[];
  image: string;
  images: string[];
  description: string;
  featured: boolean;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  content: string;
};

export type LookbookEntry = {
  id: number;
  title: string;
  description: string;
  image: string;
  products: string[];
};

export const products: Product[] = [
  {
    slug: "black-pinstripe-3-piece-suit",
    name: "Black Pinstripe 3-Piece Suit",
    category: "Suits",
    price: 249,
    sizes: ["36R", "38R", "40R", "42R", "44R", "46R"],
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80"],
    description:
      "A bold black 3-piece suit with sharp white pinstripes. Includes jacket, vest, and trousers. Perfect for weddings, galas, and any occasion that calls for turning heads.",
    featured: true,
  },
  {
    slug: "navy-pinstripe-3-piece-suit",
    name: "Navy Pinstripe 3-Piece Suit",
    category: "Suits",
    price: 249,
    sizes: ["36R", "38R", "40R", "42R", "44R"],
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"],
    description:
      "Classic navy blue with subtle pinstripes. A 3-piece suit that works for business, church, weddings, and formal events. Timeless and commanding.",
    featured: true,
  },
  {
    slug: "light-blue-double-breasted-suit",
    name: "Light Blue Double-Breasted Suit",
    category: "Suits",
    price: 229,
    sizes: ["36R", "38R", "40R", "42R", "44R"],
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80"],
    description:
      "A standout light blue double-breasted suit with peak lapels and gold buttons. Ideal for spring weddings, prom, and any occasion where you want to be remembered.",
    featured: true,
  },
  {
    slug: "gold-floral-tuxedo",
    name: "Gold Floral Statement Tuxedo",
    category: "Tuxedos",
    price: 269,
    sizes: ["36R", "38R", "40R", "42R", "44R"],
    image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80"],
    description:
      "Make a statement in this gold floral tuxedo. Luxurious pattern, satin lapels, and an unforgettable silhouette. Built for prom, quinceañeras, and black-tie events.",
    featured: true,
  },
  {
    slug: "tan-leather-horsebit-loafer",
    name: "Tan Leather Horsebit Loafer",
    category: "Shoes",
    price: 89,
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80"],
    description:
      "Cognac tan leather loafer with gold horsebit hardware and brogue detailing. Pairs perfectly with suits and dress trousers.",
    featured: false,
  },
  {
    slug: "dress-shirt-white",
    name: "Dress Shirt — White",
    category: "Shirts",
    price: 30,
    sizes: ["S", "M", "L", "XL", "2XL", "3XL"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80"],
    description:
      "A crisp white dress shirt — the foundation of every great suit look. Spread collar, fitted cut, and available in a full range of sizes.",
    featured: false,
  },
  {
    slug: "statement-lapel-pin",
    name: "Crystal Statement Lapel Pin",
    category: "Accessories",
    price: 25,
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80"],
    description:
      "Eye-catching crystal lapel pins with cascading chain detail. Available in multiple designs — the perfect finishing touch for any formal look.",
    featured: false,
  },
  {
    slug: "paisley-tie",
    name: "Paisley Silk Tie",
    category: "Accessories",
    price: 25,
    sizes: ["One Size"],
    image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=600&q=80",
    images: ["https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800&q=80"],
    description:
      "Silk paisley ties in a range of colors to complement any suit. Includes matching pocket square.",
    featured: false,
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-dress-for-prom",
    title: "How to Look Sharp for Prom 2026",
    excerpt:
      "Prom is one night you'll remember forever. Here's how to put together a look that's bold, clean, and completely you.",
    date: "April 15, 2026",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
    content: `
Prom is your moment. Don't show up in something forgettable.

**Start with the Suit**
A 3-piece suit instantly sets you apart from everyone in a basic tux. Go bold — a gold floral, a navy pinstripe, or a light blue double-breasted will have everyone asking where you got it.

**Match Your Date**
Coordinate with your date's dress color, but you don't have to match exactly. A navy suit with a tie that picks up the color of their dress is sharp and intentional.

**The Accessories Make It**
A statement lapel pin, a silk pocket square, and the right shoes pull the whole look together. Don't skip these — they're the difference between looking good and looking great.

**Fit is Everything**
The most expensive suit looks cheap if it doesn't fit. Come into Park Avenue and we'll make sure your suit fits the way it should.

**Come Early**
Don't wait until the week of prom. Come in at least a few weeks ahead so you have time to sort your whole look without the stress.
    `,
  },
  {
    slug: "wedding-guest-guide",
    title: "How to Dress Sharp for a Wedding",
    excerpt:
      "Wedding dress codes are confusing. Here's a simple guide for men on showing up looking like you know exactly what you're doing.",
    date: "March 22, 2026",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    content: `
The wedding invite said "black tie optional" — now what? Here's how men can decode any dress code.

**Black Tie**
Tuxedo or a very formal dark suit. Black, navy, or deep charcoal. This is not the time for light colors unless you're in the wedding party.

**Formal / Black Tie Optional**
A sharp 3-piece suit in navy or charcoal. A tie or bow tie is expected. Statement accessories are welcome.

**Cocktail Attire**
A well-fitted 2-piece suit in any color. This is where you can have fun — a bold pattern, an unexpected color, or a standout lapel pin.

**Smart Casual / Garden Party**
A blazer with dress trousers and a dress shirt. Loafers work great here. Light colors and linens are perfect for outdoor summer weddings.

**The Rule**
When in doubt, go one level up. Nobody has ever been turned away at a wedding for being overdressed.
    `,
  },
  {
    slug: "suit-care-guide",
    title: "How to Take Care of Your Suit",
    excerpt:
      "A good suit is an investment. Treat it right and it'll last for years. Here's everything you need to know.",
    date: "February 10, 2026",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    content: `
A quality suit treated properly will look better every year. Here's how to make yours last.

**Hang It Right**
Always hang your suit on a wide, contoured hanger — never a wire one. The shoulder shape is everything.

**Let It Rest**
Don't wear the same suit two days in a row. Wool needs 24 hours to breathe and return to its shape.

**Brush It**
After each wear, brush your suit with a soft clothes brush to remove dust and lint. It keeps the fabric looking fresh without unnecessary cleaning.

**Dry Clean Sparingly**
Dry cleaning is hard on fabric. Spot clean when possible and only dry clean when truly necessary — once or twice a season at most.

**Steam, Don't Iron**
A steamer removes wrinkles without the risk of flattening the texture. If you iron, always use a pressing cloth.

**Storage**
For long-term storage, use a breathable garment bag. Never plastic — it traps moisture.
    `,
  },
];

export const lookbookEntries: LookbookEntry[] = [
  {
    id: 1,
    title: "The Statement Suit",
    description: "Gold floral tuxedo, white dress shirt. Made for prom, weddings, and unforgettable nights.",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80",
    products: ["gold-floral-tuxedo", "dress-shirt-white", "statement-lapel-pin"],
  },
  {
    id: 2,
    title: "Classic Power",
    description: "Navy pinstripe 3-piece. The suit that works in any room, at any occasion.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
    products: ["navy-pinstripe-3-piece-suit", "dress-shirt-white", "paisley-tie"],
  },
  {
    id: 3,
    title: "Summer Sharp",
    description: "Light blue double-breasted, tan loafers. The warm-weather formal look done right.",
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&q=80",
    products: ["light-blue-double-breasted-suit", "tan-leather-horsebit-loafer"],
  },
  {
    id: 4,
    title: "Bold in Black",
    description: "Black pinstripe 3-piece, crystal lapel pin. Wear this and own the room.",
    image: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?w=800&q=80",
    products: ["black-pinstripe-3-piece-suit", "statement-lapel-pin"],
  },
];
