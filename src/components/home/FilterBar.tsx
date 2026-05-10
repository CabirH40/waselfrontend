import { Button } from "@/components/ui/button";
import { SlidersHorizontal, ChevronDown, Star, Clock, Tag, Utensils } from "lucide-react";

const FilterBar = () => {
  return (
    <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-xl border-b py-4">
      <div className="container mx-auto px-4 flex items-center gap-3 overflow-x-auto no-scrollbar">
        <Button variant="outline" className="rounded-xl gap-2 font-black border-2 h-11 shrink-0">
          <SlidersHorizontal className="w-4 h-4" /> الفلاتر
        </Button>
        
        <div className="h-6 w-[2px] bg-gray-200 mx-2 shrink-0" />

        <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 shrink-0 hover:border-primary hover:text-primary">
          <Clock className="w-4 h-4" /> وقت التوصيل <ChevronDown className="w-4 h-4" />
        </Button>

        <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 shrink-0 hover:border-primary hover:text-primary">
          <Star className="w-4 h-4" /> التقييم 4.0+
        </Button>

        <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 shrink-0 hover:border-primary hover:text-primary">
          <Tag className="w-4 h-4" /> العروض
        </Button>

        <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 shrink-0 hover:border-primary hover:text-primary">
          <Utensils className="w-4 h-4" /> نوع المطبخ <ChevronDown className="w-4 h-4" />
        </Button>

        <Button variant="outline" className="rounded-xl gap-2 font-bold h-11 shrink-0 hover:border-primary hover:text-primary">
          السعر <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;