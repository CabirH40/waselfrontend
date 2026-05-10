import { useState } from "react";
import { Search, ShoppingCart, User, MapPin, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const suggestions = [
  { name: "دبل تشيز برجر", type: "وجبة" },
  { name: "بيتزا هت", type: "مطعم" },
  { name: "سوشي ماستر", type: "مطعم" },
  { name: "تاكو حار", type: "وجبة" },
];

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-xl">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
              <ShoppingCart className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-primary hidden sm:block">
              فودي<span className="text-foreground">داش</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-3 text-sm font-semibold text-muted-foreground bg-secondary/50 border border-gray-100 px-5 py-2.5 rounded-2xl cursor-pointer hover:bg-accent/50 transition-all">
            <MapPin className="w-4 h-4 text-primary" />
            <span>التوصيل إلى: <span className="text-foreground">شارع الملك فهد، الرياض</span></span>
          </div>

          <div className="flex-1 max-w-lg relative hidden md:block">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input 
              type="text" 
              placeholder="ابحث عن مطعم، وجبة أو مطبخ..." 
              onFocus={() => setIsSearchOpen(true)}
              className="w-full bg-secondary/50 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl py-3 pr-12 pl-4 outline-none transition-all text-sm font-medium text-right"
            />
          </div>

          <div className="flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost" size="icon" className="rounded-2xl w-11 h-11 hover:bg-accent/50">
                <User className="w-5 h-5 text-foreground" />
              </Button>
            </Link>
            <Link to="/checkout">
              <Button className="btn-primary-gradient rounded-2xl gap-2 px-6 h-11">
                <div className="relative">
                  <ShoppingCart className="w-4 h-4" />
                  <span className="absolute -top-2 -left-2 bg-white text-primary text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm">2</span>
                </div>
                <span className="hidden sm:inline font-bold">السلة</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-20 px-4"
            onClick={() => setIsSearchOpen(false)}
          >
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="w-full max-w-2xl bg-white dark:bg-secondary rounded-[2.5rem] shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b flex items-center gap-4">
                <Search className="text-primary w-6 h-6" />
                <input 
                  autoFocus
                  type="text" 
                  placeholder="ماذا تشتهي اليوم؟" 
                  className="flex-1 bg-transparent border-none outline-none text-xl font-bold text-right"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6 text-primary font-black text-xs uppercase tracking-widest">
                  <Flame className="w-4 h-4" /> عمليات البحث الشائعة
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {suggestions.map((item) => (
                    <div 
                      key={item.name}
                      className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary cursor-pointer transition-colors group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                          <Search className="w-5 h-5" />
                        </div>
                        <span className="font-bold">{item.name}</span>
                      </div>
                      <span className="text-[10px] font-black text-muted-foreground uppercase">{item.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;