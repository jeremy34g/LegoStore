import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--charcoal))] text-white border-t-4 border-[hsl(var(--charcoal))]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[hsl(var(--lego-red))] border-4 border-white hard-shadow-sm"></div>
              <h2 className="text-2xl font-bold">
                BRICK<span className="text-[hsl(var(--lego-red))]">SHOP</span>
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Your premier destination for exclusive LEGO sets, rare finds, and collector's items.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <button
                  key={i}
                  className="p-2 bg-white text-[hsl(var(--charcoal))] border-2 border-white hover:bg-[hsl(var(--lego-red))] hover:text-white transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-3 text-gray-300">
              {["All Sets", "New Arrivals", "Bestsellers", "Hard to Find", "Sale", "Gift Cards"].map(
                (item) => (
                  <li key={item}>
                    <button className="hover:text-[hsl(var(--lego-yellow))] transition-colors">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-bold mb-4">Help</h3>
            <ul className="space-y-3 text-gray-300">
              {["Contact Us", "Shipping Info", "Returns", "Track Order", "FAQ", "Size Guide"].map(
                (item) => (
                  <li key={item}>
                    <button className="hover:text-[hsl(var(--lego-yellow))] transition-colors">
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get exclusive deals and early access to new releases.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="border-4 border-white bg-white text-[hsl(var(--charcoal))] rounded-none"
              />
              <Button className="bg-[hsl(var(--lego-red))] hover:bg-[hsl(var(--lego-red))] text-white border-4 border-white rounded-none whitespace-nowrap active:scale-95">
                Sign Up
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-4 border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
          <p className="mono text-sm">© 2024 BrickShop. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
