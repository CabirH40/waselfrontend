import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Settings, CreditCard, MapPin, LogOut, ChevronRight, Clock, Package, Heart } from "lucide-react";
import { motion } from "framer-motion";

const orders = [
  { id: "ORD-9821", restaurant: "برجر كينج", date: "24 أكتوبر 2023", total: 19.48, status: "تم التوصيل" },
  { id: "ORD-7712", restaurant: "بيتزا هت", date: "15 أكتوبر 2023", total: 32.50, status: "تم التوصيل" },
];

const addresses = [
  { id: 1, label: "المنزل", address: "شارع الملك فهد، الرياض، 12345", isDefault: true },
  { id: 2, label: "العمل", address: "برج المملكة، الطابق 15، الرياض", isDefault: false },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-background pb-24">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-8 rounded-[2.5rem] border-none shadow-xl text-center bg-white dark:bg-secondary">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-white shadow-lg">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-2xl font-black">أحمد محمد</h2>
              <p className="text-sm text-muted-foreground mb-6 font-medium">ahmed@example.com</p>
              <Button variant="outline" className="w-full rounded-2xl h-12 font-bold">تعديل الملف</Button>
            </Card>

            <div className="space-y-2">
              {[
                { icon: Clock, label: "تاريخ الطلبات" },
                { icon: MapPin, label: "العناوين المسجلة" },
                { icon: CreditCard, label: "طرق الدفع" },
                { icon: Heart, label: "المطاعم المفضلة" },
                { icon: Settings, label: "الإعدادات" },
              ].map((item) => (
                <Button key={item.label} variant="ghost" className="w-full justify-start gap-4 py-7 rounded-2xl hover:bg-white dark:hover:bg-secondary transition-all group">
                  <div className="w-10 h-10 bg-secondary dark:bg-muted rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-lg">{item.label}</span>
                  <ChevronRight className="w-5 h-5 mr-auto text-muted-foreground rotate-180" />
                </Button>
              ))}
              <Button variant="ghost" className="w-full justify-start gap-4 py-7 rounded-2xl text-destructive hover:bg-destructive/5 hover:text-destructive">
                <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <LogOut className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">تسجيل الخروج</span>
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-10">
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black">الطلبات الأخيرة</h2>
                <Button variant="link" className="text-primary font-bold">عرض الكل</Button>
              </div>
              <div className="space-y-4">
                {orders.map((order) => (
                  <motion.div key={order.id} whileHover={{ y: -4 }}>
                    <Card className="p-6 rounded-[2rem] border-none shadow-sm hover:shadow-md transition-all bg-white dark:bg-secondary">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                          <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center">
                            <Package className="w-7 h-7 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-black text-xl">{order.restaurant}</h3>
                            <p className="text-sm text-muted-foreground font-medium">{order.date} • {order.id}</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between md:justify-end gap-8">
                          <div className="text-left">
                            <p className="font-black text-2xl">${order.total}</p>
                            <p className="text-xs text-green-600 font-black uppercase tracking-widest">{order.status}</p>
                          </div>
                          <Button className="btn-primary-gradient rounded-xl px-6 font-bold">إعادة الطلب</Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-black">عناوين التوصيل</h2>
                <Button variant="outline" className="rounded-xl font-bold gap-2">
                  <MapPin className="w-4 h-4" /> إضافة عنوان
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {addresses.map((addr) => (
                  <Card key={addr.id} className={`p-6 rounded-[2rem] border-2 transition-all ${addr.isDefault ? 'border-primary bg-primary/5' : 'border-transparent bg-white dark:bg-secondary'}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${addr.isDefault ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'}`}>
                          <MapPin className="w-5 h-5" />
                        </div>
                        <h4 className="font-black text-lg">{addr.label}</h4>
                      </div>
                      {addr.isDefault && <span className="text-[10px] font-black bg-primary text-white px-2 py-1 rounded-md">افتراضي</span>}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{addr.address}</p>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;