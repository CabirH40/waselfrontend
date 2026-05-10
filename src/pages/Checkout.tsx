import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, CreditCard, Clock, ChevronRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { showSuccess, showLoading } from "@/utils/toast";
import { motion } from "framer-motion";

const Checkout = () => {
  const navigate = useNavigate();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const handlePlaceOrder = () => {
    setIsPlacingOrder(true);
    const toastId = showLoading("جاري معالجة طلبك...");
    
    setTimeout(() => {
      setIsPlacingOrder(false);
      showSuccess("تم إرسال طلبك بنجاح!");
      navigate("/track-order/FD-9821");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-black mb-10 tracking-tight">إتمام الطلب</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <Card className="p-8 rounded-[2.5rem] border-none shadow-xl bg-white dark:bg-secondary">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black">عنوان التوصيل</h2>
                </div>
                <Button variant="ghost" className="text-primary font-black hover:bg-primary/5">تغيير</Button>
              </div>
              <div className="pr-16">
                <p className="font-bold text-lg">المنزل</p>
                <p className="text-muted-foreground font-medium">شارع الملك فهد، حي الملقا، الرياض 12345</p>
              </div>
            </Card>

            <Card className="p-8 rounded-[2.5rem] border-none shadow-xl bg-white dark:bg-secondary">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-black">طريقة الدفع</h2>
                </div>
                <Button variant="ghost" className="text-primary font-black hover:bg-primary/5">تغيير</Button>
              </div>
              <div className="pr-16 flex items-center gap-4">
                <div className="bg-black text-white px-4 py-2 rounded-xl font-black text-xs tracking-widest">VISA</div>
                <p className="font-bold text-lg">•••• •••• •••• 4242</p>
              </div>
            </Card>

            <div className="flex items-center gap-3 p-6 bg-green-50 dark:bg-green-900/20 rounded-3xl border border-green-100 dark:border-green-900/30">
              <ShieldCheck className="text-green-600 w-6 h-6" />
              <p className="text-sm font-bold text-green-800 dark:text-green-400">دفعك آمن ومشفر بالكامل.</p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="p-8 rounded-[2.5rem] border-none shadow-2xl bg-white dark:bg-secondary sticky top-24">
              <h2 className="text-2xl font-black mb-8">ملخص الطلب</h2>
              
              <div className="space-y-5 mb-8">
                <div className="flex justify-between font-bold">
                  <span className="text-muted-foreground">1x دبل تشيز برجر</span>
                  <span>12.99 ر.س</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span className="text-muted-foreground">1x بطاطس مقلية كبيرة</span>
                  <span>4.99 ر.س</span>
                </div>
                <div className="border-t border-dashed pt-6 space-y-3">
                  <div className="flex justify-between font-bold text-sm">
                    <span className="text-muted-foreground">المجموع الفرعي</span>
                    <span>17.98 ر.س</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <span className="text-muted-foreground">رسوم التوصيل</span>
                    <span className="text-green-600">مجاني</span>
                  </div>
                  <div className="flex justify-between font-bold text-sm">
                    <span className="text-muted-foreground">رسوم الخدمة</span>
                    <span>1.50 ر.س</span>
                  </div>
                </div>
                <div className="border-t pt-6 flex justify-between items-center">
                  <span className="text-xl font-black">الإجمالي</span>
                  <span className="text-3xl font-black text-primary">19.48 ر.س</span>
                </div>
              </div>

              <Button 
                disabled={isPlacingOrder}
                onClick={handlePlaceOrder}
                className="btn-primary-gradient w-full py-8 rounded-[2rem] text-xl font-black shadow-2xl"
              >
                {isPlacingOrder ? "جاري المعالجة..." : "تأكيد الطلب"}
              </Button>
              
              <p className="text-[10px] text-center text-muted-foreground mt-6 font-bold uppercase tracking-widest">
                دفع آمن بواسطة فودي داش
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;