import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Minus, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MealDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="rounded-3xl overflow-hidden h-[400px] lg:h-[600px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80" 
              alt="Double Cheeseburger" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Double Cheeseburger</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Two juicy flame-grilled beef patties topped with melted American cheese, fresh lettuce, ripe tomatoes, onions, pickles, and our signature sauce on a toasted sesame seed bun.
              </p>
              <div className="mt-4 text-3xl font-bold text-primary">$12.99</div>
            </div>

            {/* Options: Size */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Choose Size</h3>
              <RadioGroup defaultValue="regular" className="grid grid-cols-1 gap-3">
                <div className="flex items-center justify-between p-4 rounded-2xl border hover:border-primary cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="regular" id="regular" />
                    <Label htmlFor="regular" className="font-bold">Regular</Label>
                  </div>
                  <span className="text-sm text-muted-foreground">Included</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl border hover:border-primary cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large" className="font-bold">Large</Label>
                  </div>
                  <span className="text-sm text-muted-foreground">+$2.50</span>
                </div>
              </RadioGroup>
            </div>

            {/* Options: Extras */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Add Extras</h3>
              <div className="space-y-3">
                {[
                  { id: "extra-cheese", label: "Extra Cheese", price: 1.50 },
                  { id: "bacon", label: "Crispy Bacon", price: 2.00 },
                  { id: "egg", label: "Fried Egg", price: 1.00 },
                ].map((extra) => (
                  <div key={extra.id} className="flex items-center justify-between p-4 rounded-2xl border">
                    <div className="flex items-center gap-3">
                      <Checkbox id={extra.id} />
                      <Label htmlFor={extra.id} className="font-medium">{extra.label}</Label>
                    </div>
                    <span className="text-sm text-muted-foreground">+${extra.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer: Quantity & Add to Cart */}
            <div className="sticky bottom-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl border shadow-xl flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-4 bg-secondary p-2 rounded-2xl">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-xl"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="font-bold text-xl w-8 text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-xl"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              <Button 
                className="flex-1 w-full py-7 rounded-2xl text-lg font-bold gap-3 shadow-lg shadow-primary/20"
                onClick={() => navigate("/checkout")}
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart — ${(12.99 * quantity).toFixed(2)}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MealDetails;