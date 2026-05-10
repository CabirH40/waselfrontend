import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RestaurantDetails from "./pages/RestaurantDetails";
import MealDetails from "./pages/MealDetails";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import CourierDashboard from "./pages/CourierDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster position="top-center" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/meal/:id" element={<MealDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/track-order/:id" element={<OrderTracking />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/restaurant" element={<RestaurantDashboard />} />
          <Route path="/dashboard/courier" element={<CourierDashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;