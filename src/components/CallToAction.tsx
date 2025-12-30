"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative border-4 border-[hsl(var(--charcoal))] bg-gradient-to-br from-[hsl(var(--lego-red))] to-orange-600 hard-shadow-lg overflow-hidden">
          <div className="absolute inset-0 dot-grid opacity-10"></div>
          
          <div className="relative p-8 md:p-16 text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-[hsl(var(--lego-yellow))] text-[hsl(var(--charcoal))] border-4 border-[hsl(var(--charcoal))] hard-shadow-sm mono font-bold">
              LIMITED TIME OFFER
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white max-w-3xl mx-auto">
              Join the Collector's Club
            </h2>
            
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get exclusive access to rare sets, early releases, and member-only deals. Plus, earn points with every purchase.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-[hsl(var(--charcoal))] hover:bg-white border-4 border-[hsl(var(--charcoal))] hard-shadow-sm text-lg px-8 py-6 active:scale-95 transition-transform"
              >
                Sign Up Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent text-white hover:bg-white/10 border-4 border-white hard-shadow-sm text-lg px-8 py-6 active:scale-95 transition-transform"
              >
                Learn More
              </Button>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-white">
              <div>
                <p className="mono text-3xl font-bold">10K+</p>
                <p className="text-sm opacity-90">Active Members</p>
              </div>
              <div>
                <p className="mono text-3xl font-bold">500+</p>
                <p className="text-sm opacity-90">Exclusive Sets</p>
              </div>
              <div>
                <p className="mono text-3xl font-bold">15%</p>
                <p className="text-sm opacity-90">Member Discount</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
