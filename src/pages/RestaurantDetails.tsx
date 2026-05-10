import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Star, Clock, Bike, Info, Plus, Minus } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const menu = [
  {
    category: "Popular",
    items: [
      { id: 1, name: "Double Cheeseburger", price: 12.99, desc: "Two beef patties, cheddar cheese, lettuce, tomato, and our special sauce.", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
      { id: 2, name: "Crispy Chicken Burger", price: 10.50, desc: "Crispy fried chicken breast, mayo, and pickles on a brioche bun.", image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?w=400&q=80" },
    ]
  },
  {
    category: "Sides",
    items: [
      { id: 3, name: "Large French Fries", price: 4.99, desc: "Golden and crispy salted fries.", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80" },
      { id: 4, name: "Onion Rings", price: 5.50, desc: "8 pieces of crispy battered onion rings.", image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80" },
    ]
  }
];

const RestaurantDetails = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");

  return (
    <div className="min-h-screen pb-20">
      <Navbar />
      
      {/* Cover Image */}
      <div className="h-64 md:h-80 relative">
        <img 
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=80" 
          alt="Restaurant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <main className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Restaurant Info Card */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Burger King</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1 text-foreground font-bold">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  4.5 (500+ ratings)
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  20-30 min
                </div>
                <div className="flex items-center gap-1">
                  <Bike className="w-4 h-4" />
                  Free delivery
                </div>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto font-bold">
                  <Info className="w-4 h-4 mr-1" /> More info
                </Button>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="rounded-full">Group Order</Button>
              <Button className="rounded-full">Favorite</Button>
            </div>
          </div>
        </div>

        {/* Menu Navigation */}
        <div className="sticky top-16 z-40 bg-[#FAFAFA] py-4 -mx-4 px-4 overflow-x-auto no-scrollbar flex gap-2">
          {menu.map(cat => (
            <Button 
              key={cat.category}
              variant={activeCategory === cat.category ? "default" : "outline"}
              className="rounded-full whitespace-nowrap"
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </Button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-12 mt-8">
          {menu.map(section => (
            <div key={section.category} id={section.category}>
              <h2 className="text-2xl font-bold mb-6">{section.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map(item => (
                  <motion.div 
                    key={item.id}
                    whileHover={{ y: -4 }}
                    className="bg-white p-4 rounded-2xl shadow-sm border flex gap-4 cursor-pointer"
                  >
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                        {item.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-primary">${item.price}</span>
                        <Button size="sm" className="rounded-full w-8 h-8 p-0">
                          <Plus className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default RestaurantDetails;