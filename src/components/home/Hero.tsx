import { Search, MapPin, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80" 
          className="w-full h-full object-cover opacity-50"
          alt="Food Background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-xs font-black mb-6 border border-primary/30 backdrop-blur-md"
          >
            <Percent className="w-4 h-4" />
            <span>خصم 50% على أول طلب باستخدام كود: WASEL50</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight"
          >
            أشهى الوجبات <br />
            <span className="text-primary">تصلك أينما كنت</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-2 md:p-3 rounded-[2rem] shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl"
          >
            <div className="flex-1 flex items-center gap-3 px-4 w-full border-b md:border-b-0 md:border-l border-gray-100 py-2 md:py-0">
              <Search className="text-primary w-6 h-6" />
              <input 
                type="text" 
                placeholder="ابحث عن مطعم أو وجبة..." 
                className="w-full outline-none font-bold text-lg bg-transparent"
              />
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 w-full py-2 md:py-0">
              <MapPin className="text-muted-foreground w-6 h-6" />
              <span className="font-bold text-muted-foreground truncate">دمشق، حي المزة...</span>
            </div>
            <Button className="btn-primary-gradient w-full md:w-auto h-14 md:h-16 px-10 rounded-[1.5rem] text-xl font-black">
              ابحث الآن
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;