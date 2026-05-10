import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Utensils, ListOrdered, Settings, TrendingUp, Plus, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "إجمالي المبيعات", value: "$12,450", icon: TrendingUp, color: "text-green-600", bg: "bg-green-100" },
  { label: "طلبات اليوم", value: "48", icon: ListOrdered, color: "text-blue-600", bg: "bg-blue-100" },
  { label: "الوجبات النشطة", value: "24", icon: Utensils, color: "text-orange-600", bg: "bg-orange-100" },
];

const RestaurantDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">لوحة تحكم المطعم</h1>
            <p className="text-muted-foreground font-medium">مرحباً بك مجدداً، مطعم برجر كينج</p>
          </div>
          <Button className="btn-primary-gradient rounded-2xl h-14 px-8 font-black gap-3">
            <Plus className="w-6 h-6" /> إضافة وجبة جديدة
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="p-8 rounded-[2.5rem] border-none shadow-xl bg-white dark:bg-secondary flex items-center gap-6">
                <div className={`w-16 h-16 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-bold text-muted-foreground mb-1">{stat.label}</p>
                  <h3 className="text-3xl font-black">{stat.value}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 p-8 rounded-[2.5rem] border-none shadow-xl bg-white dark:bg-secondary">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black">الطلبات الحالية</h2>
              <Button variant="ghost" className="text-primary font-bold">عرض الكل</Button>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-6 rounded-3xl bg-secondary/50 border border-transparent hover:border-primary/20 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white dark:bg-muted rounded-xl flex items-center justify-center font-black text-primary shadow-sm">
                      #{1020 + i}
                    </div>
                    <div>
                      <h4 className="font-black">دبل تشيز برجر (x2)</h4>
                      <p className="text-xs text-muted-foreground font-medium">منذ 5 دقائق • عميل: محمد أ.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-black bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full">قيد التحضير</span>
                    <Button size="sm" className="rounded-xl font-bold">قبول</Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 rounded-[2.5rem] border-none shadow-xl bg-white dark:bg-secondary">
            <h2 className="text-2xl font-black mb-8">ساعات العمل</h2>
            <div className="space-y-6">
              {["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس"].map((day) => (
                <div key={day} className="flex items-center justify-between">
                  <span className="font-bold">{day}</span>
                  <div className="flex items-center gap-2 text-sm font-black text-primary">
                    <Clock className="w-4 h-4" /> 09:00 ص - 11:00 م
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full rounded-2xl h-12 font-bold mt-4">تعديل المواعيد</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default RestaurantDashboard;