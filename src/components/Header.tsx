"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [cartCount, setCartCount] = useState(3);

  return (
    <header className="sticky top-0 z-50 bg-[hsl(var(--cream))] border-b-4 border-[hsl(var(--charcoal))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-4 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[hsl(var(--lego-red))] border-4 border-[hsl(var(--charcoal))] hard-shadow-sm"></div>
            <h1 className="text-2xl md:text-3xl font-bold text-[hsl(var(--charcoal))]">
              BRICK<span className="text-[hsl(var(--lego-red))]">SHOP</span>
            </h1>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search sets, themes..."
                className="w-full pl-4 pr-12 py-6 border-4 border-[hsl(var(--charcoal))] focus:ring-4 focus:ring-[hsl(var(--lego-yellow))] focus:ring-offset-0 rounded-none"
              />
              <Button
                size="icon"
                className="absolute right-0 top-0 h-full bg-[hsl(var(--lego-blue))] hover:bg-[hsl(var(--lego-blue))] border-4 border-[hsl(var(--charcoal))] border-l-0 rounded-none active:scale-95"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="border-4 border-[hsl(var(--charcoal))] bg-white hover:bg-white hard-shadow-sm active:scale-95 transition-transform"
            >
              <Heart className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="border-4 border-[hsl(var(--charcoal))] bg-white hover:bg-white hard-shadow-sm active:scale-95 transition-transform"
            >
              <User className="h-5 w-5" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="relative border-4 border-[hsl(var(--charcoal))] bg-white hover:bg-white hard-shadow-sm active:scale-95 transition-transform"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <div className="absolute -top-2 -right-2 bg-[hsl(var(--lego-red))] text-white w-6 h-6 rounded-full border-2 border-[hsl(var(--charcoal))] flex items-center justify-center">
                  <span className="mono text-xs font-bold">{cartCount}</span>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full pl-4 pr-12 py-6 border-4 border-[hsl(var(--charcoal))] rounded-none"
            />
            <Button
              size="icon"
              className="absolute right-0 top-0 h-full bg-[hsl(var(--lego-blue))] hover:bg-[hsl(var(--lego-blue))] border-4 border-[hsl(var(--charcoal))] border-l-0 rounded-none"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="border-t-4 border-[hsl(var(--charcoal))] py-4 overflow-x-auto">
          <ul className="flex gap-6 whitespace-nowrap">
            {["All Sets", "New Arrivals", "Bestsellers", "Hard to Find", "Collector's Corner", "Sale"].map(
              (item) => (
                <li key={item}>
                  <button className="text-[hsl(var(--charcoal))] font-bold hover:text-[hsl(var(--lego-red))] transition-colors">
                    {item}
                  </button>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
