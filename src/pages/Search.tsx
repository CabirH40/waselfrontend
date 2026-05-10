import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, SlidersHorizontal, Star, Clock, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const filters = ["الكل", "الأعلى تقييماً", "الأسرع توصيلاً", "عروض حصرية", "نباتي"];
const recentSearches = ["برجر لحم", "بيتزا إيطالية", "سوشي", "شاورما"];

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-background pb-24">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Search Header */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative group">
            <SearchIcon className="absolute right-6 top-1/2 -translate-y-1/2 text-primary w-6 h-6 group-focus-within:scale-110 transition-transform" />
            <Input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن مطعم، وجبة أو مطبخ..." 
              className="h-20 pr-16 pl-20 rounded-[2rem] border-none shadow-2xl text-xl font-bold bg-white dark:bg-secondary focus-visible:ring-primary/20"
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-2xl w-12 h-12 hover:bg-secondary"
            >
              <SlidersHorizontal className="w-6 h-6" />
            </Button>
          </div>

          {/* Quick Filters */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar py-6 mt-4">
            {filters.map((filter) => (
              <Button 
                key={filter}
                variant="outline"
                className="rounded-2xl px-6 h-11 font-bold border-gray-200 whitespace-nowrap hover:border-primary hover:text-primary transition-all"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {!searchQuery ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                {/* Recent Searches */}
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-black">عمليات البحث الأخيرة</h2>
                    <Button variant="ghost" className="text-muted-foreground font-bold text-sm">مسح الكل</Button>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {recentSearches.map((item) => (
                      <button 
                        key={item}
                        className="flex items-center gap-2 bg-white dark:bg-secondary px-5 py-3 rounded-2xl font-bold text-sm shadow-sm hover:shadow-md transition-all border border-gray-50 dark:border-gray-800"
                      >
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        {item}
                      </button>
                    ))}
                  </div>
                </section>

                {/* Popular Cuisines */}
                <section>
                  <h2 className="text-xl font-black mb-8">مطابخ شائعة</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { name: "إيطالي", image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=400&q=80" },
                      { name: "ياباني", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80" },
                      { name: "أمريكي", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80" },
                      { name: "هندي", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80" },
                    ].map((cuisine) => (
                      <div key={cuisine.name} className="relative h-40 rounded-[2rem] overflow-hidden group cursor-pointer">
                        <img src={cuisine.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={cuisine.name} />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-white font-black text-xl">{cuisine.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {/* Search Results Placeholder */}
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white dark:bg-secondary p-4 rounded-[2.5rem] flex gap-6 shadow-xl border border-gray-50 dark:border-gray-800 group cursor-pointer">
                    <div className="w-32 h-32 rounded-3xl overflow-hidden flex-shrink-0">
                      <img src={`https://images.unsplash.com/photo-${1500000000000 + i}?w=400&q=80`} className="w-full h-full object-cover" alt="Result" />
                    </div>
                    <div className="flex-1 py-2">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-black text-lg group-hover:text-primary transition-colors">مطعم النكهة {i}</h3>
                        <div className="flex items-center gap-1 text-xs font-black">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> 4.5
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground font-medium mb-4">برجر • وجبات سريعة • مشويات</p>
                      <div className="flex items-center gap-4 text-[10px] font-black text-primary uppercase tracking-widest">
                        <span>25-35 دقيقة</span>
                        <span className="w-1 h-1 bg-gray-300 rounded-full" />
                        <span>توصيل مجاني</span>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Search;