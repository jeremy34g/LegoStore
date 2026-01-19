import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FeaturedProducts } from "@/components/FeaturedProducts";
import { Features } from "@/components/Features";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 space-y-16">
          <Hero />
          <Features />
          <CategoryGrid />
          <FeaturedProducts 
            title="New Arrivals" 
            description="Check out the latest additions to our collection"
          />
        </div>
        
        <div className="bg-gradient-to-b from-transparent to-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <FeaturedProducts 
              title="Bestsellers" 
              description="Our most popular sets that fans can't get enough of"
            />
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-16 pb-16">
          <CallToAction />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
