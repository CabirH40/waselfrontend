import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock, Bike, ChevronRight, Flame, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RestaurantSkeleton, CategorySkeleton } from "@/components/ui/SkeletonLoader";

const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Burgers", icon: "🍔" },
  { name: "Sushi", icon: "🍣" },
  { name: "Desserts", icon: "🍰" },
  { name: "Healthy", icon: "🥗" },
  { name: "Pasta", icon: "🍝" },
];

const restaurants = [
  {
    id: 1,
    name: "Burger King",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    rating: 4.5,
    reviews: "500+",
    time: "20-30 min",
    fee: "Free",
    tags: ["Burgers", "Fast Food"],
    isOpen: true,
    isPromo: true
  },
  {
    id: 2,
    name: "Pizza Hut",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.2,
    reviews: "1.2k",
    time: "30-45 min",
    fee: "$2.00",
    tags: ["Pizza", "Italian"],
    isOpen: true
  },
  {
    id: 3,
    name: "Sushi Master",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    rating: 4.8,
    reviews: "300+",
    time: "25-40 min",
    fee: "$1.50",
    tags: ["Sushi", "Japanese"],
    isOpen: false
  },
  {
    id: 4,
    name: "Green Salad Co.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    rating: 4.6,
    reviews: "800+",
    time: "15-25 min",
    fee: "Free",
    tags: ["Healthy", "Salads"],
    isOpen: true
  }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pb-24 md:pb-10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 md:py-10">
        {/* Hero Section */}
        <section className="mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[2.5rem] overflow-hidden bg-[#0A0A0A] p-8 md:p-20 text-white shadow-2xl"
          >
            <div className="relative z-10 max-w-2xl">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-xs font-black mb-6 border border-primary/30 backdrop-blur-md"
              >
                <Flame className="w-4 h-4" />
                <span>LIMITED TIME: 50% OFF FIRST ORDER</span>
              </motion.div>
              <h1 className="text-4xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                Fastest <span className="text-primary">Delivery</span> <br />
                In Your City.
              </h1>
              <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                Discover the best food & drinks in your area from over 2,000+ restaurants.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-primary-gradient rounded-2xl px-10 h-14 text-lg font-bold">
                  Order Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl px-10 h-14 text-lg font-bold border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                  View Offers
                </Button>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-full h-full opacity-30 lg:opacity-60">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" 
                alt="Food" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
            </div>
          </motion.div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">What's on your mind?</h2>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array(6).fill(0).map((_, i) => <CategorySkeleton key={i} />)
              ) : (
                categories.map((cat, i) => (
                  <motion.div 
                    key={cat.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex flex-col items-center gap-3 min-w-[90px] cursor-pointer group"
                  >
                    <div className="w-20 h-20 rounded-[2rem] bg-white dark:bg-secondary premium-shadow flex items-center justify-center text-4xl group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-translate-y-2 group-active:scale-90">
                      {cat.icon}
                    </div>
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">{cat.name}</span>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Popular Restaurants */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Popular Restaurants</h2>
            <Button variant="ghost" className="text-primary font-bold gap-2 hover:bg-accent rounded-xl">
              See all <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="wait">
              {isLoading ? (
                Array(4).fill(0).map((_, i) => <RestaurantSkeleton key={i} />)
              ) : (
                restaurants.map((res, i) => (
                  <motion.div
                    key={res.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link to={`/restaurant/${res.id}`}>
                      <Card className="premium-card overflow-hidden rounded-[2.5rem] group border-none">
                        <div className="relative h-60 overflow-hidden">
                          <img 
                            src={res.image} 
                            alt={res.name} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          
                          {/* Badges */}
                          <div className="absolute top-4 left-4 flex flex-col gap-2">
                            {res.isPromo && (
                              <div className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                                PROMO
                              </div>
                            )}
                            {!res.isOpen && (
                              <div className="bg-gray-900/80 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                                CLOSED
                              </div>
                            )}
                          </div>

                          <div className="absolute bottom-4 right-4 bg-white/95 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1.5 text-xs font-black shadow-xl">
                            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                            {res.rating} <span className="text-muted-foreground font-medium">({res.reviews})</span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-black text-xl group-hover:text-primary transition-colors">{res.name}</h3>
                            <div className={`w-2 h-2 rounded-full ${res.isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5 font-bold">
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
                              <span key={tag} className="text-[10px] bg-secondary dark:bg-muted text-muted-foreground px-3 py-1 rounded-full font-black uppercase tracking-wider">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </section>
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;