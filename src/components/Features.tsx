import { Package, Shield, Truck, Headphones } from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Authenticity Guaranteed",
    description: "100% genuine LEGO sets with official packaging",
    color: "bg-[hsl(var(--lego-red))]",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $50 with tracking",
    color: "bg-[hsl(var(--lego-blue))]",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "256-bit SSL encryption for safe checkout",
    color: "bg-[hsl(var(--lego-yellow))]",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 customer service by LEGO enthusiasts",
    color: "bg-purple-600",
  },
];

export function Features() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative border-4 border-[hsl(var(--charcoal))] bg-white hard-shadow hover:hard-shadow-lg transition-all hover:-translate-y-1 p-6"
              >
                <div className={`inline-flex p-4 ${feature.color} border-4 border-[hsl(var(--charcoal))] hard-shadow-sm mb-4`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[hsl(var(--charcoal))] mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
