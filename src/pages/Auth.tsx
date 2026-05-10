import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Auth = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA] p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center">
              <ShoppingCart className="text-white w-7 h-7" />
            </div>
            <span className="text-3xl font-bold tracking-tight text-primary">
              فودي داش
            </span>
          </Link>
          <h1 className="text-2xl font-black">مرحباً بك مجدداً!</h1>
          <p className="text-muted-foreground font-medium">سجل دخولك للمتابعة واكتشاف أشهى الوجبات</p>
        </div>

        <Card className="p-8 rounded-[2.5rem] border-none shadow-2xl bg-white">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 rounded-2xl p-1 bg-secondary">
              <TabsTrigger value="login" className="rounded-xl font-bold py-3">دخول</TabsTrigger>
              <TabsTrigger value="register" className="rounded-xl font-bold py-3">تسجيل</TabsTrigger>
            </TabsList>
            
            <TabsContent value="login" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold mr-1">البريد الإلكتروني</Label>
                <Input id="email" type="email" placeholder="name@example.com" className="rounded-2xl h-14 bg-secondary/50 border-none focus:bg-white transition-all" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-bold mr-1">كلمة المرور</Label>
                  <Button variant="link" className="px-0 h-auto text-xs text-primary font-bold">نسيت كلمة المرور؟</Button>
                </div>
                <Input id="password" type="password" className="rounded-2xl h-14 bg-secondary/50 border-none focus:bg-white transition-all" />
              </div>
              <Button className="w-full py-8 rounded-2xl font-black text-lg btn-primary-gradient">تسجيل الدخول</Button>
            </TabsContent>

            <TabsContent value="register" className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold mr-1">الاسم الكامل</Label>
                <Input id="name" placeholder="أحمد محمد" className="rounded-2xl h-14 bg-secondary/50 border-none focus:bg-white transition-all" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-email" className="font-bold mr-1">البريد الإلكتروني</Label>
                <Input id="reg-email" type="email" placeholder="name@example.com" className="rounded-2xl h-14 bg-secondary/50 border-none focus:bg-white transition-all" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reg-password" className="font-bold mr-1">كلمة المرور</Label>
                <Input id="reg-password" type="password" className="rounded-2xl h-14 bg-secondary/50 border-none focus:bg-white transition-all" />
              </div>
              <Button className="w-full py-8 rounded-2xl font-black text-lg btn-primary-gradient">إنشاء حساب</Button>
            </TabsContent>
          </Tabs>

          <div className="relative my-10">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-muted-foreground font-bold">أو المتابعة بواسطة</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="rounded-2xl py-7 border-gray-100 hover:bg-secondary transition-all font-bold">
              <Mail className="w-5 h-5 ml-2 text-red-500" /> Google
            </Button>
            <Button variant="outline" className="rounded-2xl py-7 border-gray-100 hover:bg-secondary transition-all font-bold">
              <Github className="w-5 h-5 ml-2" /> Github
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;