interface Category {
  name: string;
  color: string;
  sets: number;
  image: string;
}

const categories: Category[] = [
  { name: "Star Wars", color: "bg-[hsl(var(--charcoal))]", sets: 127, image: "https://images.unsplash.com/photo-1601814933824-fd0b574dd592?w=400&q=80" },
  { name: "Architecture", color: "bg-gray-500", sets: 45, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80" },
  { name: "Technic", color: "bg-[hsl(var(--lego-red))]", sets: 68, image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80" },
  { name: "Creator", color: "bg-[hsl(var(--lego-blue))]", sets: 92, image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80" },
  { name: "City", color: "bg-[hsl(var(--lego-yellow))]", sets: 134, image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&q=80" },
  { name: "Harry Potter", color: "bg-purple-600", sets: 56, image: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&q=80" },
];

export function CategoryGrid() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl mb-4 text-[hsl(var(--charcoal))]">
            Browse by Theme
          </h2>
          <p className="text-lg text-gray-700">
            Explore our curated collection of LEGO themes and sets
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className="group relative border-4 border-[hsl(var(--charcoal))] hard-shadow hover:hard-shadow-lg transition-all hover:-translate-y-1 active:scale-95 bg-white overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-[hsl(var(--charcoal))]">
                    {category.name}
                  </h3>
                  <div className={`w-4 h-4 ${category.color} border-2 border-[hsl(var(--charcoal))]`}></div>
                </div>
                <p className="mono text-sm text-gray-600">{category.sets} Sets Available</p>
              </div>
              
              <div className={`absolute top-4 right-4 ${category.color} text-white px-3 py-1 border-2 border-[hsl(var(--charcoal))] hard-shadow-sm`}>
                <p className="mono text-xs font-bold">SHOP NOW</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
