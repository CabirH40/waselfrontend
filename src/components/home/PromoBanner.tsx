import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PromoBanner = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="relative rounded-[3rem] overflow-hidden h-[300px] md:h-[400px] flex items-center"
        >
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&q=80" 
            className="absolute inset-0 w-full h-full object-cover"
            alt="Promo"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent" />
          
          <div className="relative z-10 p-8 md:p-16 max-w-xl text-white">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              وفر أكثر مع <br /> باقات التوفير!
            </h2>
            <p className="text-lg md:text-xl font-bold mb-8 opacity-90">
              اشترك الآن واحصل على توصيل مجاني غير محدود لجميع طلباتك فوق 20,000 ل.س
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 rounded-2xl h-14 px-10 text-lg font-black shadow-2xl">
              اكتشف المزيد
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;