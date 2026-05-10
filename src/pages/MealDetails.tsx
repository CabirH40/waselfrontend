import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MealDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <Button 
          variant="ghost" 
          className="mb-8 gap-2 font-bold text-muted-foreground hover:text-primary"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="w-5 h-5" /> العودة للمنيو
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="rounded-[3rem] overflow-hidden h-[450px] lg:h-[700px] shadow-2xl shadow-black/10">
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=1000&q=80" 
              alt="Double Cheeseburger" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details Section */}
          <div className="space-y-10">
            <div>
              <h1 className="text-5xl font-black mb-6 tracking-tight">دبل تشيز برجر</h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                قطعتين من اللحم البقري المشوي على اللهب، مغطاة بجبنة أمريكية ذائبة، خس طازج، طماطم، بصل، مخلل، وصلصتنا الخاصة في خبز بالسمسم المحمص.
              </p>
              <div className="mt-8 text-4xl font-black text-primary">12.99 ر.س</div>
            </div>

            {/* Options: Size */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black tracking-tight">اختر الحجم</h3>
              <RadioGroup defaultValue="regular" className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-6 rounded-3xl border-2 border-gray-100 hover:border-primary/30 cursor-pointer transition-all bg-gray-50/50">
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="regular" id="regular" className="w-6 h-6" />
                    <Label htmlFor="regular" className="font-black text-lg">عادي</Label>
                  </div>
                  <span className="text-sm font-bold text-muted-foreground">مشمول</span>
                </div>
                <div className="flex items-center justify-between p-6 rounded-3xl border-2 border-gray-100 hover:border-primary/30 cursor-pointer transition-all bg-gray-50/50">
                  <div className="flex items-center gap-4">
                    <RadioGroupItem value="large" id="large" className="w-6 h-6" />
                    <Label htmlFor="large" className="font-black text-lg">كبير</Label>
                  </div>
                  <span className="text-sm font-bold text-primary">+2.50 ر.س</span>
                </div>
              </RadioGroup>
            </div>

            {/* Options: Extras */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black tracking-tight">إضافات اختيارية</h3>
              <div className="space-y-4">
                {[
                  { id: "extra-cheese", label: "جبنة إضافية", price: 1.50 },
                  { id: "bacon", label: "بيكون بقري مقرمش", price: 2.00 },
                  { id: "egg", label: "بيض مقلي", price: 1.00 },
                ].map((extra) => (
                  <div key={extra.id} className="flex items-center justify-between p-6 rounded-3xl border-2 border-gray-100 bg-gray-50/50">
                    <div className="flex items-center gap-4">
                      <Checkbox id={extra.id} className="w-6 h-6 rounded-lg" />
                      <Label htmlFor={extra.id} className="font-bold text-lg">{extra.label}</Label>
                    </div>
                    <span className="text-sm font-bold text-primary">+{extra.price.toFixed(2)} ر.س</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer: Quantity & Add to Cart */}
            <div className="sticky bottom-6 bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] border premium-shadow flex flex-col sm:flex-row items-center gap-6">
              <div className="flex items-center gap-6 bg-secondary px-4 py-2 rounded-2xl">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-xl w-12 h-12 hover:bg-white hover:text-primary"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="w-6 h-6" />
                </Button>
                <span className="font-black text-2xl w-10 text-center">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-xl w-12 h-12 hover:bg-white hover:text-primary"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="w-6 h-6" />
                </Button>
              </div>
              <Button 
                className="btn-primary-gradient flex-1 w-full py-8 rounded-3xl text-xl font-black gap-4"
                onClick={() => navigate("/checkout")}
              >
                <ShoppingCart className="w-7 h-7" />
                إضافة للسلة — {(12.99 * quantity).toFixed(2)} ر.س
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MealDetails;