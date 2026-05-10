import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Bike, Utensils, Package, Phone, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "Order Confirmed", icon: Check, status: "completed" },
  { id: 2, label: "Preparing Food", icon: Utensils, status: "current" },
  { id: 3, label: "On the Way", icon: Bike, status: "pending" },
  { id: 4, label: "Delivered", icon: Package, status: "pending" },
];

const OrderTracking = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold">Order #12345</h1>
              <p className="text-muted-foreground">Estimated delivery: 12:45 PM</p>
            </div>
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
              Preparing
            </div>
          </div>

          {/* Map Placeholder */}
          <Card className="h-64 md:h-96 rounded-3xl overflow-hidden mb-8 border-none shadow-md relative">
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&q=80" 
              alt="Map" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-xl animate-bounce">
                  <Bike className="text-white w-6 h-6" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-1 bg-black/20 rounded-full blur-sm" />
              </div>
            </div>
          </Card>

          {/* Tracking Steps */}
          <Card className="p-8 rounded-3xl border-none shadow-sm mb-8">
            <div className="relative">
              {/* Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-muted" />
              
              <div className="space-y-10 relative">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      step.status === "completed" ? "bg-green-500 text-white" :
                      step.status === "current" ? "bg-primary text-white ring-4 ring-primary/20" :
                      "bg-muted text-muted-foreground"
                    }`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className={`font-bold ${step.status === "pending" ? "text-muted-foreground" : "text-foreground"}`}>
                        {step.label}
                      </p>
                      {step.status === "current" && (
                        <p className="text-sm text-muted-foreground">The restaurant is preparing your delicious meal.</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Courier Info */}
          <Card className="p-6 rounded-3xl border-none shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80" alt="Courier" />
              </div>
              <div>
                <p className="font-bold text-lg">Ahmed K.</p>
                <p className="text-sm text-muted-foreground">Your delivery partner</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="icon" className="rounded-full">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default OrderTracking;