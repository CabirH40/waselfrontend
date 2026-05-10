import { Home, Search, ReceiptText, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const BottomNav = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: Home, label: "الرئيسية", path: "/" },
    { icon: Search, label: "البحث", path: "/search" },
    { icon: ReceiptText, label: "طلباتي", path: "/profile" },
    { icon: User, label: "حسابي", path: "/auth" },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t px-6 py-3 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <Link 
          key={item.path} 
          to={item.path}
          className={cn(
            "flex flex-col items-center gap-1 transition-colors",
            location.pathname === item.path ? "text-primary" : "text-muted-foreground"
          )}
        >
          <item.icon className="w-6 h-6" />
          <span className="text-[10px] font-medium">{item.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNav;