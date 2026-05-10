import Navbar from "@/components/layout/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bike, MapPin, DollarSign, Star, Navigation, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "أرباح اليوم", value: "150 ر.س", icon: DollarSign, color: "text-green-600", bg: "bg-green-100" },
  { label: "طلبات مكتملة", value: "12", icon: CheckCircle2, color: "text-blue-600", bg: "bg-blue-100" },
  { label: "التقييم", value: "4.9", icon: Star, color: "text-yellow-600", bg: "bg-yellow-100" },
];

const CourierDashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] dark:bg-background pb-20">
      <Navbar />
      <main className="container mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-4xl font-black tracking-tight mb-2">لوحة تحكم المندوب</h1>
            <p className="text-muted-foreground font-medium">أهلاً بك يا أحمد، أنت متصل الآن وجاهز لاستلام الطلبات</p>
          </div>
          <div className="flex items-center gap-3 bg-green-500 text-white px-6 py-3 rounded-2xl font-black shadow-lg shadow-green-500/20">
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            متصل الآن
          </div>
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
          {/* Active Delivery */}
          <Card className="lg:col-span-2 p-8 rounded-[3rem] border-none shadow-2xl bg-white dark:bg-secondary relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-black">الطلب الحالي</h2>
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black">قيد التوصيل</span>
              </div>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase mb-1">من المطعم</p>
                    <h4 className="text-xl font-black">برجر كينج - فرع التحلية</h4>
                    <p className="text-sm font-medium text-muted-foreground">شارع التحلية، الرياض</p>
                  </div>
                  <Button variant="outline" size="icon" className="mr-auto rounded-xl">
                    <Navigation className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-muted-foreground uppercase mb-1">إلى العميل</p>
                    <h4 className="text-xl font-black">محمد العتيبي</h4>
                    <p className="text-sm font-medium text-muted-foreground">حي الملقا، شارع أنس بن مالك</p>
                  </div>
                  <Button variant="outline" size="icon" className="mr-auto rounded-xl">
                    <Navigation className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t flex flex-col sm:flex-row gap-4">
                <Button className="btn-primary-gradient flex-1 h-14 rounded-2xl font-black text-lg">تم استلام الطلب</Button>
                <Button variant="secondary" className="flex-1 h-14 rounded-2xl font-black text-lg">تواصل مع العميل</Button>
              </div>
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-8 rounded-[3rem] border-none shadow-xl bg-white dark:bg-secondary">
            <h2 className="text-2xl font-black mb-8">آخر الرحلات</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">طلب #102{i}</h4>
                      <p className="text-[10px] text-muted-foreground font-medium">منذ {i * 20} دقيقة</p>
                    </div>
                  </div>
                  <span className="font-black text-green-600">+15 ر.س</span>
                </div>
              ))}
              <Button variant="ghost" className="w-full text-primary font-bold mt-4">عرض السجل الكامل</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

import { Utensils } from "lucide-react";
export default CourierDashboard;