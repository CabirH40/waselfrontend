import { Star, Clock, Bike, Percent, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

interface RestaurantCardProps {
  restaurant: any;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Link to={`/restaurant/${restaurant.id}`}>
        <Card className="overflow-hidden rounded-[2.5rem] border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-secondary group">
          <div className="relative h-56 overflow-hidden">
            <img 
              src={restaurant.image} 
              alt={restaurant.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Badges */}
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              {restaurant.discount && (
                <div className="bg-primary text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 backdrop-blur-md">
                  <Percent className="w-3 h-3" /> خصم {restaurant.discount}
                </div>
              )}
              {restaurant.isNew && (
                <div className="bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
                  جديد
                </div>
              )}
            </div>

            {/* Favorite Button */}
            <button 
              onClick={(e) => {
                e.preventDefault();
                setIsLiked(!isLiked);
              }}
              className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10"
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-primary text-primary' : 'text-gray-400'}`} />
            </button>

            {/* Rating Overlay */}
            <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl flex items-center gap-1.5 text-xs font-black shadow-xl">
              <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
              {restaurant.rating}
              <span className="text-muted-foreground font-medium">({restaurant.reviews})</span>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-black text-xl group-hover:text-primary transition-colors">{restaurant.name}</h3>
              {!restaurant.isOpen && (
                <span className="text-[10px] font-black text-red-500 bg-red-50 px-2 py-1 rounded-md">مغلق</span>
              )}
            </div>

            <p className="text-sm text-muted-foreground font-medium mb-4 line-clamp-1">
              {restaurant.tags.join(" • ")}
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-gray-50 dark:border-gray-800">
              <div className="flex items-center gap-1.5 text-xs font-black">
                <Clock className="w-4 h-4 text-primary" />
                {restaurant.time}
              </div>
              <div className="w-1 h-1 bg-gray-300 rounded-full" />
              <div className="flex items-center gap-1.5 text-xs font-black">
                <Bike className="w-4 h-4 text-primary" />
                {restaurant.fee === 0 ? "توصيل مجاني" : `${restaurant.fee} ل.س`}
              </div>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default RestaurantCard;