import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock, Bike, ChevronRight, Flame, Tag, Percent, MapPinOff } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RestaurantSkeleton, CategorySkeleton } from "@/components/ui/SkeletonLoader";
import { EmptyState } from "@/components/ui/EmptyState";

const categories = [
  { name: "بيتزا", icon: "🍕" },
  { name: "برجر", icon: "🍔" },
  { name: "سوشي", icon: "🍣" },
  { name: "حلويات", icon: "🍰" },
  { name: "صحي", icon: "🥗" },
  { name: "باستا", icon: "🍝" },
];

const restaurants = [
  {
    id: 1,
    name: "برجر كينج",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    rating: 4.5,
    reviews: "500+",
    time: "20-30 دقيقة",
    fee: "مجاني",
    tags: ["برجر", "وجبات سريعة"],
    isOpen: true,
    isPromo: true,
    discount: "20%"
  },
  {
    id: 2,
    name: "بيتزا هت",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.2,
    reviews: "1.2k",
    time: "30-45 دقيقة",
    fee: "7.00 ر.س",
    tags: ["بيتزا", "إيطالي"],
    isOpen: true
  },
  {
    id: 3,
    name: "سوشي ماستر",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    rating: 4.8,
    reviews: "300+",
    time: "25-40 دقيقة",
    fee: "5.00 ر.س",
    tags: ["سوشي", "ياباني"],
    isOpen: false
  },
  {
    id: 4,
    name: "جرين سالاد",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    rating: 4.6,
    reviews: "800+",
    time: "15-25 دقيقة",
    fee: "مجاني",
    tags: ["صحي", "سلطات"],
    isOpen: true
  }
];

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isZoneSupported, setIsZoneSupported] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pb-24 md:pb-10">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 md:py-10">
        {!isZoneSupported ? (
          <div className="py-20">
            <EmptyState 
              icon={MapPinOff}
              title="عذراً، نحن لا نغطي هذه المنطقة حالياً"
              description="نحن نعمل بجد للتوسع والوصول إليك في أقرب وقت ممكن. جرب اختيار موقع آخر."
              actionLabel="تغيير الموقع"
              onAction={() => {}}
            />
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <section className="mb-16">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-[3rem] overflow-hidden bg-[#0A0A0A] p-8 md:p-24 text-white shadow-2xl"
              >
                <div className="relative z-10 max-w-2xl">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-primary/20 text-primary px-5 py-2.5 rounded-full text-xs font-black mb-8 border border-primary/30 backdrop-blur-md"
                  >
                    <Percent className="w-4 h-4" />
                    <span>استخدم كود: FOODIE50 للحصول على خصم 50%</span>
                  </motion.div>
                  <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
                    أسرع <span className="text-primary">توصيل</span> <br />
                    في مدينتك.
                  </h1>
                  <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-lg leading-relaxed font-medium">
                    اكتشف أفضل الأطعمة والمشروبات في منطقتك من أكثر من 2000 مطعم.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5">
                    <Button size="lg" className="btn-primary-gradient rounded-[1.5rem] px-12 h-16 text-xl font-black">
                      اطلب الآن
                    </Button>
                    <Button size="lg" variant="outline" className="rounded-[1.5rem] px-12 h-16 text-xl font-black border-white/20 text-white hover:bg-white/10 backdrop-blur-sm">
                      عرض العروض
                    </Button>
                  </div>
                </div>
                <div className="absolute left-0 top-0 w-full h-full opacity-40 lg:opacity-70">
                  <img 
                    src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" 
                    alt="طعام" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
                </div>
              </motion.div>
            </section>

            {/* Categories */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">ماذا يدور في ذهنك؟</h2>
              </div>
              <div className="flex gap-8 overflow-x-auto no-scrollbar pb-6">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    Array(6).fill(0).map((_, i) => <CategorySkeleton key={i} />)
                  ) : (
                    categories.map((cat, i) => (
                      <motion.div 
                        key={cat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className="flex flex-col items-center gap-4 min-w-[110px] cursor-pointer group"
                      >
                        <div className="w-24 h-24 rounded-[2.5rem] bg-white dark:bg-secondary premium-shadow flex items-center justify-center text-5xl group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:-translate-y-3 group-active:scale-90 border border-gray-50 dark:border-gray-800">
                          {cat.icon}
                        </div>
                        <span className="text-lg font-black text-muted-foreground group-hover:text-primary transition-colors">{cat.name}</span>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* Special Offers Banner */}
            <section className="mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-[2.5rem] p-10 text-white relative overflow-hidden group cursor-pointer">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-4">وجبات العائلة</h3>
                    <p className="text-white/80 font-bold mb-6">خصم يصل إلى 40% على الطلبات الكبيرة</p>
                    <Button variant="secondary" className="rounded-xl font-black text-orange-600">اطلب الآن</Button>
                  </div>
                  <Tag className="absolute -bottom-4 -left-4 w-32 h-32 text-white/10 -rotate-12 group-hover:scale-110 transition-transform" />
                </div>
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 text-white relative overflow-hidden group cursor-pointer">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-4">توصيل مجاني</h3>
                    <p className="text-white/80 font-bold mb-6">لأول 3 طلبات لك عبر التطبيق</p>
                    <Button variant="secondary" className="rounded-xl font-black text-blue-600">استخدم العرض</Button>
                  </div>
                  <Bike className="absolute -bottom-4 -left-4 w-32 h-32 text-white/10 -rotate-12 group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </section>

            {/* Popular Restaurants */}
            <section>
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-3xl md:text-4xl font-black tracking-tight">المطاعم الشهيرة</h2>
                <Button variant="ghost" className="text-primary font-black gap-2 hover:bg-accent rounded-2xl px-6 h-12 text-lg">
                  عرض الكل <ChevronRight className="w-6 h-6 rotate-180" />
                </Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    Array(4).fill(0).map((_, i) => <RestaurantSkeleton key={i} />)
                  ) : (
                    restaurants.map((res, i) => (
                      <motion.div
                        key={res.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Link to={`/restaurant/${res.id}`}>
                          <Card className="premium-card overflow-hidden rounded-[3rem] group border-none shadow-xl hover:shadow-2xl transition-all duration-500">
                            <div className="relative h-64 overflow-hidden">
                              <img 
                                src={res.image} 
                                alt={res.name} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                              
                              <div className="absolute top-5 right-5 flex flex-col gap-2">
                                {res.isPromo && (
                                  <div className="bg-primary text-white text-[11px] font-black px-4 py-2 rounded-full shadow-lg backdrop-blur-md flex items-center gap-2">
                                    <Percent className="w-3 h-3" /> خصم {res.discount}
                                  </div>
                                )}
                                {!res.isOpen && (
                                  <div className="bg-gray-900/90 text-white text-[11px] font-black px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
                                    مغلق حالياً
                                  </div>
                                )}
                              </div>

                              <div className="absolute bottom-5 left-5 bg-white/95 dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 text-sm font-black shadow-xl">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                {res.rating} <span className="text-muted-foreground font-medium">({res.reviews})</span>
                              </div>
                            </div>
                            
                            <div className="p-8 text-right">
                              <div className="flex items-center justify-between mb-4">
                                <h3 className="font-black text-2xl group-hover:text-primary transition-colors">{res.name}</h3>
                                <div className={`w-3 h-3 rounded-full ${res.isOpen ? 'bg-green-500' : 'bg-red-500'} animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]`} />
                              </div>
                              
                              <div className="flex items-center gap-5 text-sm text-muted-foreground mb-6 font-black justify-end">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-5 h-5 text-primary" />
                                  {res.time}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Bike className="w-5 h-5 text-primary" />
                                  {res.fee}
                                </div>
                              </div>
                              
                              <div className="flex flex-wrap gap-2 justify-end">
                                {res.tags.map(tag => (
                                  <span key={tag} className="text-[11px] bg-secondary dark:bg-muted text-muted-foreground px-4 py-1.5 rounded-full font-black uppercase tracking-wider">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </Card>
                        </Link>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </section>
          </>
        )}
      </main>

      <BottomNav />
    </div>
  );
};

export default Index;