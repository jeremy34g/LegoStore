"use client";

import { ProductCard, Product } from "./ProductCard";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Millennium Falcon",
    setNumber: "75192",
    pieces: 7541,
    price: 849.99,
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&q=80",
    category: "Star Wars",
    difficulty: 5,
    isNew: true,
  },
  {
    id: "2",
    name: "Hogwarts Castle",
    setNumber: "71043",
    pieces: 6020,
    price: 469.99,
    image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&q=80",
    category: "Harry Potter",
    difficulty: 5,
  },
  {
    id: "3",
    name: "Taj Mahal",
    setNumber: "10256",
    pieces: 5923,
    price: 369.99,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&q=80",
    category: "Architecture",
    difficulty: 4,
    isNew: true,
  },
  {
    id: "4",
    name: "Bugatti Chiron",
    setNumber: "42083",
    pieces: 3599,
    price: 379.99,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80",
    category: "Technic",
    difficulty: 5,
  },
  {
    id: "5",
    name: "Saturn V Rocket",
    setNumber: "92176",
    pieces: 1969,
    price: 119.99,
    image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&q=80",
    category: "Creator",
    difficulty: 3,
  },
  {
    id: "6",
    name: "Assembly Square",
    setNumber: "10255",
    pieces: 4002,
    price: 279.99,
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&q=80",
    category: "Creator",
    difficulty: 4,
    isNew: true,
  },
];

interface FeaturedProductsProps {
  title: string;
  description?: string;
}

export function FeaturedProducts({ title, description }: FeaturedProductsProps) {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[hsl(var(--charcoal))]">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-700">{description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
