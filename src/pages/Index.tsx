import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock, Bike, ChevronRight, Flame } from "lucide-react";
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
    <div className="min-h-screen pb-24 md:pb-0">
      <Navbar />
      
      <main className="container mx-auto px-4 py-10">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-[#111] p-10 md:p-20 text-white shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-bold mb-6 border border-primary/30"
              >
                <Flame className="w-4 h-4" />
                <span>50% OFF YOUR FIRST ORDER</span>
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight"
              >
                Craving? We <span className="text-primary">Deliver</span> Fast.
              </motion.h1>
              <p className="text-gray-400 text-xl mb-10 max-w-lg leading-relaxed">
                The best restaurants in your city, delivered to your doorstep in minutes.
              </p>
              <div className="flex flex-wrap gap-5">
                <Button size="lg" className="btn-primary-gradient rounded-2xl px-10 h-14 text-lg font-bold">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl px-10 h-14 text-lg font-bold border-white/20 text-white hover:bg-white/10">
                  View Offers
                </Button>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-full h-full opacity-40 lg:opacity-60">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" 
                alt="Food" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#111] via-[#111]/80 to-transparent" />
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight">What's on your mind?</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-6">
            {categories.map((cat, i) => (
              <motion.div 
                key={cat.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group"
              >
                <div className="w-20 h-20 rounded-3xl bg-white premium-shadow flex items-center justify-center text-4xl group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-translate-y-2">
                  {cat.icon}
                </div>
                <span className="text-sm font-bold text-gray-600 group-hover:text-primary transition-colors">{cat.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Restaurants */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black tracking-tight">Popular Restaurants</h2>
            <Button variant="ghost" className="text-primary font-bold gap-2 hover:bg-accent">
              See all <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurants.map((res, i) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/restaurant/${res.id}`}>
                  <Card className="premium-card overflow-hidden rounded-[2rem]">
                    <div className="relative h-56 overflow-hidden">
                      <img 
                        src={res.image} 
                        alt={res.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      {res.isPromo && (
                        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg">
                          PROMO
                        </div>
                      )}
                      <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-2xl flex items-center gap-1.5 text-xs font-black shadow-sm">
                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        {res.rating}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-xl mb-2">{res.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 font-medium">
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-4 h-4 text-primary" />
                          {res.time}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Bike className="w-4 h-4 text-primary" />
                          {res.fee}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {res.tags.map(tag => (
                          <span key={tag} className="text-[10px] bg-secondary text-gray-600 px-3 py-1 rounded-full font-bold uppercase tracking-wider">
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