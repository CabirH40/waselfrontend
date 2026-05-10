import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const navigate = useNavigate();
  
  const cartItems = [
    { id: 1, name: "دبل تشيز برجر", price: 12.99, qty: 1, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&q=80" },
    { id: 2, name: "بطاطس مقلية", price: 4.99, qty: 2, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=200&q=80" },
  ];

  const total = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-secondary z-[101] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black">سلتك</h2>
                  <p className="text-xs font-bold text-muted-foreground">{cartItems.length} وجبات مختارة</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                <X className="w-6 h-6" />
              </Button>
            </div>

            {/* Items List */}
            <div className="flex-1 overflow-y-auto p-8 space-y-6 no-scrollbar">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 group"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-1">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-black text-lg leading-tight">{item.name}</h4>
                        <button className="text-muted-foreground hover:text-destructive transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-primary font-black mt-1">{item.price} ر.س</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 bg-secondary dark:bg-muted px-3 py-1.5 rounded-xl">
                        <button className="hover:text-primary transition-colors"><Minus className="w-4 h-4" /></button>
                        <span className="font-black text-sm w-4 text-center">{item.qty}</span>
                        <button className="hover:text-primary transition-colors"><Plus className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-8 border-t bg-gray-50/50 dark:bg-muted/20">
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center font-bold text-muted-foreground">
                  <span>المجموع الفرعي</span>
                  <span>{total.toFixed(2)} ر.س</span>
                </div>
                <div className="flex justify-between items-center font-bold text-muted-foreground">
                  <span>رسوم التوصيل</span>
                  <span className="text-green-600">مجاني</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-black">الإجمالي</span>
                  <span className="text-3xl font-black text-primary">{total.toFixed(2)} ر.س</span>
                </div>
              </div>
              <Button 
                onClick={() => {
                  onClose();
                  navigate("/checkout");
                }}
                className="w-full btn-primary-gradient h-16 rounded-2xl text-xl font-black gap-3"
              >
                إتمام الطلب <ArrowRight className="w-6 h-6 rotate-180" />
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;