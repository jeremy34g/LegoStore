import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative border-4 border-[hsl(var(--charcoal))] bg-white hard-shadow-lg overflow-hidden">
      <div className="absolute inset-0 dot-grid pointer-events-none"></div>
      <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-16 items-center min-h-[600px]">
        <div className="space-y-6 z-10">
          <div className="inline-block px-4 py-2 bg-[hsl(var(--lego-yellow))] border-4 border-[hsl(var(--charcoal))] hard-shadow-sm">
            <p className="mono text-sm font-medium">NEW ARRIVAL</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl leading-tight text-[hsl(var(--charcoal))]">
            Build Your Dreams
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(var(--charcoal))] font-medium max-w-lg">
            Discover exclusive LEGO sets from iconic themes. From Star Wars to Architecture, find your next masterpiece.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-[hsl(var(--lego-red))] hover:bg-[hsl(var(--lego-red))] text-white border-4 border-[hsl(var(--charcoal))] hard-shadow text-lg px-8 py-6 active:scale-95 transition-transform"
            >
              Shop New Arrivals
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white hover:bg-white border-4 border-[hsl(var(--charcoal))] hard-shadow text-lg px-8 py-6 active:scale-95 transition-transform"
            >
              View Collections
            </Button>
          </div>
          
          <div className="flex gap-8 pt-4">
            <div>
              <p className="mono text-2xl font-bold text-[hsl(var(--charcoal))]">500+</p>
              <p className="text-sm text-gray-600">Exclusive Sets</p>
            </div>
            <div>
              <p className="mono text-2xl font-bold text-[hsl(var(--charcoal))]">98%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
            <div>
              <p className="mono text-2xl font-bold text-[hsl(var(--charcoal))]">24/7</p>
              <p className="text-sm text-gray-600">Support</p>
            </div>
          </div>
        </div>
        
        <div className="relative z-10">
          <div className="border-4 border-[hsl(var(--charcoal))] hard-shadow-lg overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            <img
              src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80"
              alt="Featured LEGO Set"
              className="w-full h-[500px] object-cover"
            />
          </div>
          
          <div className="absolute -bottom-4 -right-4 bg-[hsl(var(--lego-blue))] text-white p-6 border-4 border-[hsl(var(--charcoal))] hard-shadow">
            <p className="mono text-sm">SET #75192</p>
            <p className="font-bold text-xl">Millennium Falcon</p>
            <p className="mono text-2xl font-bold">$849.99</p>
          </div>
        </div>
      </div>
    </section>
  );
}
