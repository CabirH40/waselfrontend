import { motion } from "framer-motion";

const categories = [
  { name: "بيتزا", icon: "🍕", count: "120 مطعم" },
  { name: "برجر", icon: "🍔", count: "85 مطعم" },
  { name: "شاورما", icon: "🌯", count: "150 مطعم" },
  { name: "سوشي", icon: "🍣", count: "40 مطعم" },
  { name: "حلويات", icon: "🍰", count: "95 مطعم" },
  { name: "صحي", icon: "🥗", count: "30 مطعم" },
  { name: "باستا", icon: "🍝", count: "55 مطعم" },
  { name: "مشاوي", icon: "🍢", count: "110 مطعم" },
];

const CategorySlider = () => {
  return (
    <section className="py-12 bg-white dark:bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black tracking-tight">استكشف حسب التصنيف</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar pb-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center gap-4 min-w-[140px] group cursor-pointer"
            >
              <div className="w-28 h-28 rounded-[2.5rem] bg-secondary/50 flex items-center justify-center text-5xl group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl border border-transparent group-hover:border-primary/20">
                {cat.icon}
              </div>
              <div className="text-center">
                <p className="font-black text-lg group-hover:text-primary transition-colors">{cat.name}</p>
                <p className="text-xs font-bold text-muted-foreground">{cat.count}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;