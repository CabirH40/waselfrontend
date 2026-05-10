import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock, Bike, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "Sushi", icon: "🍣" },
  { name: "Desserts", icon: "🍰" },
  { name: "Healthy", icon: "🥗" },
  { name: "Pasta", icon: "🍝" },
  { name: "Drinks", icon: "🥤" },
  { name: "Tacos", icon: "🌮" },
];

const restaurants = [
  {
    id: 1,
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    rating: 4.5,
    time: "20-30 min",
    fee: "Free",
    tags: ["Burgers", "Fast Food"],
    isPromo: true
  },
  {
    id: 2,
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.2,
    time: "30-45 min",
    fee: "$2.00",
    tags: ["Pizza", "Italian"]
  },
  {
    id: 3,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    rating: 4.8,
    time: "25-40 min",
    fee: "$1.50",
    tags: ["Sushi", "Japanese"]
  },
  {
    id: 4,
    name: "Green Salad Co.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    rating: 4.6,
    time: "15-25 min",
    fee: "Free",
    tags: ["Healthy", "Salads"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="relative rounded-3xl overflow-hidden bg-primary p-8 md:p-16 text-white">
            <div className="relative z-10 max-w-xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              >
                Delicious food, delivered to your door.
              </motion.h1>
              <p className="text-white/80 text-lg mb-8">
                Get the best meals from your favorite local restaurants with fast delivery.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" className="rounded-full font-bold">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full border-white text-white hover:bg-white/10">
                  View Offers
                </Button>
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80" 
                alt="Food" 
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">What's on your mind?</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-2 min-w-[80px] cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm border flex items-center justify-center text-3xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {cat.icon}
                </div>
                <span className="text-sm font-medium">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Restaurants */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Popular Restaurants</h2>
            <Button variant="ghost" className="text-primary font-bold gap-1">
              See all <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurants.map((res, i) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/restaurant/${res.id}`}>
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 group rounded-2xl">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={res.image} 
                        alt={res.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {res.isPromo && (
                        <div className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md">
                          PROMO
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold">
                        <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                        {res.rating}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-1">{res.name}</h3>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {res.time}
                        </div>
                        <div className="flex items-center gap-1">
                          <Bike className="w-4 h-4" />
                          {res.fee}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {res.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-secondary px-2 py-0.5 rounded-full font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;