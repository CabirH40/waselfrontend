import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import Hero from "@/components/home/Hero";
import CategorySlider from "@/components/home/CategorySlider";
import FilterBar from "@/components/home/FilterBar";
import RestaurantCard from "@/components/home/RestaurantCard";
import PromoBanner from "@/components/home/PromoBanner";
import { Button } from "@/components/ui/button";
import { ChevronRight, Flame, Sparkles, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const restaurants = [
  {
    id: 1,
    name: "برجر كينج",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80",
    rating: 4.5,
    reviews: "500+",
    time: "20-30 دقيقة",
    fee: 0,
    tags: ["برجر", "وجبات سريعة"],
    isOpen: true,
    discount: "20%",
    isNew: false
  },
  {
    id: 2,
    name: "بيتزا هت",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.2,
    reviews: "1.2k",
    time: "30-45 دقيقة",
    fee: 5000,
    tags: ["بيتزا", "إيطالي"],
    isOpen: true,
    isNew: true
  },
  {
    id: 3,
    name: "نارنج دمشق",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    rating: 4.9,
    reviews: "2.4k",
    time: "40-55 دقيقة",
    fee: 0,
    tags: ["شرقي", "مشاوي", "دمشقي"],
    isOpen: true,
    discount: "15%"
  },
  {
    id: 4,
    name: "سوشي هاوس",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80",
    rating: 4.7,
    reviews: "850",
    time: "25-40 دقيقة",
    fee: 3500,
    tags: ["سوشي", "آسيوي"],
    isOpen: false
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-background pb-24 md:pb-10">
      <Navbar />
      
      <Hero />
      
      <CategorySlider />

      <FilterBar />

      <main className="container mx-auto px-4 py-12 space-y-20">
        
        {/* Popular Section */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">الأكثر طلباً الآن</h2>
                <p className="text-muted-foreground font-bold">المطاعم التي يعشقها الجميع في منطقتك</p>
              </div>
            </div>
            <Button variant="ghost" className="text-primary font-black gap-2 hover:bg-primary/5 rounded-xl px-6">
              عرض الكل <ChevronRight className="w-5 h-5 rotate-180" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurants.map((res) => (
              <RestaurantCard key={res.id} restaurant={res} />
            ))}
          </div>
        </section>

        {/* Promo Banner */}
        <PromoBanner />

        {/* Fast Delivery Section */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">أسرع توصيل</h2>
                <p className="text-muted-foreground font-bold">وجباتك تصلك في أقل من 30 دقيقة</p>
              </div>
            </div>
            <Button variant="ghost" className="text-primary font-black gap-2 hover:bg-primary/5 rounded-xl px-6">
              عرض الكل <ChevronRight className="w-5 h-5 rotate-180" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurants.filter(r => r.isOpen).map((res) => (
              <RestaurantCard key={res.id} restaurant={res} />
            ))}
          </div>
        </section>

        {/* Nearby Section */}
        <section className="bg-white dark:bg-secondary p-10 rounded-[3rem] shadow-sm border border-gray-50 dark:border-gray-800">
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">مطاعم قريبة منك</h2>
                <p className="text-muted-foreground font-bold">اكتشف النكهات في حيك</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurants.slice(0, 4).map((res) => (
              <RestaurantCard key={res.id} restaurant={res} />
            ))}
          </div>
        </section>

        {/* New Restaurants Section */}
        <section>
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight">انضموا إلينا حديثاً</h2>
                <p className="text-muted-foreground font-bold">جرب نكهات جديدة ومميزة</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {restaurants.map((res) => (
              <RestaurantCard key={res.id} restaurant={res} />
            ))}
          </div>
        </section>

      </main>

      <BottomNav />
    </div>
  );
};

export default Index;