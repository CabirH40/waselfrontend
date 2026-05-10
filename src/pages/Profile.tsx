import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Settings, CreditCard, MapPin, LogOut, ChevronRight, Clock } from "lucide-react";

const orders = [
  { id: "ORD-9821", restaurant: "Burger King", date: "Oct 24, 2023", total: 19.48, status: "Delivered" },
  { id: "ORD-7712", restaurant: "Pizza Hut", date: "Oct 15, 2023", total: 32.50, status: "Delivered" },
  { id: "ORD-6654", restaurant: "Sushi Master", date: "Sep 28, 2023", total: 45.00, status: "Delivered" },
];

const Profile = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-4">
            <Card className="p-6 rounded-3xl border-none shadow-sm text-center">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-xl font-bold">John Doe</h2>
              <p className="text-sm text-muted-foreground mb-6">john.doe@example.com</p>
              <Button variant="outline" className="w-full rounded-xl">Edit Profile</Button>
            </Card>

            <div className="space-y-2">
              {[
                { icon: Clock, label: "Order History" },
                { icon: MapPin, label: "Addresses" },
                { icon: CreditCard, label: "Payments" },
                { icon: Settings, label: "Settings" },
              ].map((item) => (
                <Button key={item.label} variant="ghost" className="w-full justify-start gap-3 py-6 rounded-xl hover:bg-white">
                  <item.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">{item.label}</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground" />
                </Button>
              ))}
              <Button variant="ghost" className="w-full justify-start gap-3 py-6 rounded-xl text-destructive hover:bg-destructive/5 hover:text-destructive">
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <Card key={order.id} className="p-6 rounded-3xl border-none shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{order.restaurant}</h3>
                        <p className="text-sm text-muted-foreground">{order.date} • {order.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between md:justify-end gap-8">
                      <div className="text-right">
                        <p className="font-bold text-lg">${order.total}</p>
                        <p className="text-xs text-green-600 font-bold uppercase tracking-wider">{order.status}</p>
                      </div>
                      <Button variant="outline" className="rounded-xl">Reorder</Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Profile;