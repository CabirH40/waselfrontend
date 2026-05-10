import { Search, ShoppingCart, User, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <ShoppingCart className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-primary hidden sm:block">
            Foodie<span className="text-foreground">Dash</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground bg-secondary px-4 py-2 rounded-full cursor-pointer hover:bg-accent transition-colors">
          <MapPin className="w-4 h-4 text-primary" />
          <span>Deliver to: <span className="text-foreground">Current Location</span></span>
        </div>

        <div className="flex-1 max-w-md relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <input 
            type="text" 
            placeholder="Search for restaurants or dishes..." 
            className="w-full bg-muted border-none rounded-full py-2 pl-10 pr-4 focus:ring-2 focus:ring-primary outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-2">
          <Link to="/auth">
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/checkout">
            <Button className="rounded-full gap-2 px-4">
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">Cart</span>
              <span className="bg-white text-primary text-xs font-bold px-1.5 py-0.5 rounded-full">2</span>
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;