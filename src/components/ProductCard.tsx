"use client";

import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

export interface Product {
  id: string;
  name: string;
  setNumber: string;
  pieces: number;
  price: number;
  image: string;
  category: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showQuickAdd, setShowQuickAdd] = useState(false);

  return (
    <div
      className="group relative border-4 border-[hsl(var(--charcoal))] hard-shadow hover:hard-shadow-lg transition-all hover:-translate-y-1 bg-white"
      onMouseEnter={() => setShowQuickAdd(true)}
      onMouseLeave={() => setShowQuickAdd(false)}
    >
      {product.isNew && (
        <div className="absolute top-4 left-4 z-10 bg-[hsl(var(--lego-yellow))] text-[hsl(var(--charcoal))] px-3 py-1 border-2 border-[hsl(var(--charcoal))] hard-shadow-sm">
          <p className="mono text-xs font-bold">NEW</p>
        </div>
      )}
      
      <button
        onClick={() => setIsWishlisted(!isWishlisted)}
        className="absolute top-4 right-4 z-10 p-2 bg-white border-2 border-[hsl(var(--charcoal))] hard-shadow-sm hover:scale-110 active:scale-95 transition-transform"
      >
        <Heart
          className={`h-5 w-5 ${isWishlisted ? "fill-[hsl(var(--lego-red))] text-[hsl(var(--lego-red))]" : "text-[hsl(var(--charcoal))]"}`}
        />
      </button>

      <div className="aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <p className="mono text-xs text-gray-500 mb-1">#{product.setNumber}</p>
            <h3 className="font-bold text-lg leading-tight text-[hsl(var(--charcoal))] line-clamp-2">
              {product.name}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <span className="mono">{product.pieces}</span>
            <span>pieces</span>
          </div>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 border border-[hsl(var(--charcoal))] ${
                  i < product.difficulty ? "bg-[hsl(var(--lego-blue))]" : "bg-white"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t-2 border-gray-200">
          <p className="mono text-2xl font-bold text-[hsl(var(--charcoal))]">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500 mono">
            ${(product.price / product.pieces).toFixed(2)}/pc
          </p>
        </div>

        {showQuickAdd && (
          <Button
            className="w-full bg-[hsl(var(--lego-red))] hover:bg-[hsl(var(--lego-red))] text-white border-4 border-[hsl(var(--charcoal))] hard-shadow-sm active:scale-95 transition-transform"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart animation would go here
            }}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Quick Add
          </Button>
        )}
      </div>
    </div>
  );
}
