import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, CreditCard, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <Card className="p-6 rounded-2xl border-none shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Delivery Address</h2>
                </div>
                <Button variant="ghost" className="text-primary font-bold">Change</Button>
              </div>
              <div className="pl-13">
                <p className="font-medium">Home</p>
                <p className="text-muted-foreground">123 Main Street, Apartment 4B, New York, NY 10001</p>
                <p className="text-sm text-muted-foreground mt-2">Note: Ring the bell twice</p>
              </div>
            </Card>

            {/* Payment Method */}
            <Card className="p-6 rounded-2xl border-none shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h2 className="text-xl font-bold">Payment Method</h2>
                </div>
                <Button variant="ghost" className="text-primary font-bold">Change</Button>
              </div>
              <div className="pl-13 flex items-center gap-3">
                <div className="bg-secondary px-3 py-1 rounded-md font-bold text-xs">VISA</div>
                <p className="font-medium">•••• •••• •••• 4242</p>
              </div>
            </Card>

            {/* Delivery Time */}
            <Card className="p-6 rounded-2xl border-none shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <h2 className="text-xl font-bold">Delivery Time</h2>
              </div>
              <div className="pl-13">
                <div className="flex items-center gap-4">
                  <Button variant="outline" className="rounded-xl border-primary text-primary bg-primary/5">ASAP (25-35 min)</Button>
                  <Button variant="outline" className="rounded-xl">Schedule for later</Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 rounded-2xl border-none shadow-lg sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">1x Double Cheeseburger</span>
                  <span>$12.99</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">1x Large French Fries</span>
                  <span>$4.99</span>
                </div>
                <div className="border-t pt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$17.98</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery Fee</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service Fee</span>
                    <span>$1.50</span>
                  </div>
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">$19.48</span>
                </div>
              </div>

              <Link to="/track-order/123">
                <Button className="w-full py-6 rounded-2xl text-lg font-bold shadow-lg shadow-primary/20">
                  Place Order
                </Button>
              </Link>
              
              <p className="text-[10px] text-center text-muted-foreground mt-4">
                By placing your order, you agree to our Terms of Service and Privacy Policy.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;