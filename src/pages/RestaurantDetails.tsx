import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Star, Clock, Bike, Info, Plus, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { showSuccess } from "@/utils/toast";

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
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToCart = (e: React.MouseEvent, itemName: string) => {
    e.preventDefault();
    showSuccess(`${itemName} added to cart!`);
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    showSuccess(isFavorite ? "Removed from favorites" : "Added to favorites!");
  };

  return (
    <div className="min-h-screen pb-24">
      <Navbar />
      
      <div className="h-72 md:h-96 relative">
        <img 
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1200&q=80" 
          alt="Restaurant" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <main className="container mx-auto px-4 -mt-32 relative z-10">
        <div className="bg-white dark:bg-secondary rounded-[2.5rem] premium-shadow p-8 md:p-12 mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl md:text-5xl font-black tracking-tight">Burger King</h1>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black">OPEN</div>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-muted-foreground">
                <div className="flex items-center gap-2 text-foreground">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-lg">4.5</span>
                  <span className="text-muted-foreground font-medium">(500+ reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  20-30 min
                </div>
                <div className="flex items-center gap-2">
                  <Bike className="w-5 h-5 text-primary" />
                  Free delivery
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-gray-200">Group Order</Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={toggleFavorite}
                className={`rounded-2xl w-12 h-12 border-gray-200 transition-all ${isFavorite ? 'bg-primary/10 border-primary text-primary' : ''}`}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-primary' : ''}`} />
              </Button>
            </div>
          </div>
        </div>

        <div className="sticky top-20 z-40 bg-background/80 backdrop-blur-md py-6 -mx-4 px-4 overflow-x-auto no-scrollbar flex gap-3">
          {menu.map(cat => (
            <Button 
              key={cat.category}
              variant={activeCategory === cat.category ? "default" : "outline"}
              className={`rounded-2xl px-8 h-12 font-bold transition-all ${
                activeCategory === cat.category ? "btn-primary-gradient border-none" : "bg-white dark:bg-muted border-gray-200"
              }`}
              onClick={() => setActiveCategory(cat.category)}
            >
              {cat.category}
            </Button>
          ))}
        </div>

        <div className="space-y-16 mt-10">
          {menu.map(section => (
            <div key={section.category} id={section.category}>
              <h2 className="text-3xl font-black mb-8 tracking-tight">{section.category}</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {section.items.map(item => (
                  <Link key={item.id} to={`/meal/${item.id}`}>
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-white dark:bg-secondary p-5 rounded-[2rem] premium-shadow border border-gray-50 dark:border-gray-800 flex gap-6 cursor-pointer group"
                    >
                      <div className="flex-1">
                        <h3 className="font-black text-xl mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 font-medium leading-relaxed">
                          {item.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-black text-2xl text-foreground">${item.price}</span>
                          <Button 
                            size="icon" 
                            className="btn-primary-gradient rounded-2xl w-11 h-11"
                            onClick={(e) => handleAddToCart(e, item.name)}
                          >
                            <Plus className="w-6 h-6" />
                          </Button>
                        </div>
                      </div>
                      <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden flex-shrink-0 shadow-inner">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                    </motion.div>
                  </Link>
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