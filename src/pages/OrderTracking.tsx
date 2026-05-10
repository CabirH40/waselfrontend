import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Bike, Utensils, Package, Phone, MessageSquare, MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "Order Confirmed", icon: Check, status: "completed", time: "12:15 PM" },
  { id: 2, label: "Preparing Food", icon: Utensils, status: "current", time: "12:25 PM" },
  { id: 3, label: "On the Way", icon: Bike, status: "pending", time: "Expected 12:40 PM" },
  { id: 4, label: "Delivered", icon: Package, status: "pending", time: "Expected 12:45 PM" },
];

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-[#FDFDFD] dark:bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">Order #FD-9821</h1>
                <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black animate-pulse">
                  LIVE TRACKING
                </span>
              </div>
              <p className="text-muted-foreground font-medium">Estimated delivery: <span className="text-foreground font-black">12:45 PM</span></p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" className="rounded-2xl h-12 px-6 font-bold border-gray-200">Help Center</Button>
              <Button className="btn-primary-gradient rounded-2xl h-12 px-6 font-bold">Cancel Order</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Map & Courier */}
            <div className="lg:col-span-2 space-y-8">
              {/* Map Placeholder */}
              <Card className="h-[400px] md:h-[500px] rounded-[3rem] overflow-hidden border-none shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80" 
                  alt="Map" 
                  className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />
                
                {/* Animated Courier Marker */}
                <motion.div 
                  animate={{ 
                    x: [0, 50, 20, 80, 0],
                    y: [0, -30, -60, -20, 0]
                  }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,56,56,0.5)] border-4 border-white">
                      <Bike className="text-white w-8 h-8" />
                    </div>
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-6 h-2 bg-black/20 rounded-full blur-md" />
                  </div>
                </motion.div>

                {/* Destination Marker */}
                <div className="absolute top-1/4 right-1/4">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <MapPin className="text-white w-6 h-6" />
                  </div>
                </div>

                <Button className="absolute bottom-8 right-8 rounded-2xl h-14 px-6 font-black gap-2 shadow-2xl">
                  <Navigation className="w-5 h-5" /> Recenter Map
                </Button>
              </Card>

              {/* Courier Info */}
              <Card className="p-8 rounded-[2.5rem] border-none shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 bg-white dark:bg-secondary">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-3xl overflow-hidden shadow-lg">
                      <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80" alt="Courier" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Your Courier</p>
                    <h3 className="font-black text-2xl">Ahmed K.</h3>
                    <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      4.9 <span className="font-medium">(2.4k deliveries)</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <Button variant="secondary" className="flex-1 sm:flex-none h-14 w-14 rounded-2xl p-0">
                    <MessageSquare className="w-6 h-6" />
                  </Button>
                  <Button className="flex-1 sm:flex-none h-14 px-8 rounded-2xl font-black gap-2">
                    <Phone className="w-5 h-5" /> Call Ahmed
                  </Button>
                </div>
              </Card>
            </div>

            {/* Right: Status Steps */}
            <div className="space-y-8">
              <Card className="p-8 rounded-[2.5rem] border-none shadow-xl bg-white dark:bg-secondary">
                <h3 className="text-xl font-black mb-8">Order Status</h3>
                <div className="relative">
                  {/* Line */}
                  <div className="absolute left-7 top-0 bottom-0 w-1 bg-muted rounded-full" />
                  
                  <div className="space-y-12 relative">
                    {steps.map((step) => (
                      <div key={step.id} className="flex items-start gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center z-10 shadow-lg transition-all duration-500 ${
                          step.status === "completed" ? "bg-green-500 text-white" :
                          step.status === "current" ? "bg-primary text-white ring-8 ring-primary/10 scale-110" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          <step.icon className="w-7 h-7" />
                        </div>
                        <div className="pt-1">
                          <p className={`font-black text-lg ${step.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}>
                            {step.label}
                          </p>
                          <p className="text-sm font-bold text-muted-foreground">{step.time}</p>
                          {step.status === "current" && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              className="text-xs font-medium text-primary mt-2"
                            >
                              Chef is adding the final touches!
                            </motion.p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="p-8 rounded-[2.5rem] border-none shadow-xl bg-primary text-white">
                <h3 className="text-xl font-black mb-4">Need Help?</h3>
                <p className="text-white/80 text-sm font-medium mb-6 leading-relaxed">
                  If you have any issues with your order, our support team is available 24/7.
                </p>
                <Button variant="secondary" className="w-full h-12 rounded-xl font-black text-primary">
                  Chat with Support
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderTracking;