import { Search, ShoppingCart, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform">
            <ShoppingCart className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-primary hidden sm:block">
            FOODIE<span className="text-foreground">DASH</span>
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-3 text-sm font-semibold text-muted-foreground bg-secondary/50 border border-gray-100 px-5 py-2.5 rounded-2xl cursor-pointer hover:bg-accent/50 transition-all">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Deliver to: <span className="text-foreground">123 Main St, NY</span></span>
        </div>

        <div className="flex-1 max-w-lg relative hidden md:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search for restaurants, cuisines or dishes..." 
            className="w-full bg-secondary/50 border-transparent focus:bg-white focus:border-primary/20 rounded-2xl py-3 pl-12 pr-4 outline-none transition-all text-sm font-medium"
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
                <span className="absolute -top-2 -right-2 bg-white text-primary text-[10px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm">2</span>
              </div>
              <span className="hidden sm:inline font-bold">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;