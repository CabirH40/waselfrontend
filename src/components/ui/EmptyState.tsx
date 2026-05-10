import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center text-center p-12 bg-white dark:bg-secondary rounded-[3rem] shadow-xl max-w-lg mx-auto"
    >
      <div className="w-24 h-24 bg-primary/10 rounded-[2rem] flex items-center justify-center text-primary mb-8">
        <Icon className="w-12 h-12" />
      </div>
      <h3 className="text-2xl font-black mb-4">{title}</h3>
      <p className="text-muted-foreground font-medium mb-8 leading-relaxed">
        {description}
      </p>
      {actionLabel && (
        <Button onClick={onAction} className="btn-primary-gradient rounded-2xl px-8 h-14 font-black text-lg">
          {actionLabel}
        </Button>
      )}
    </motion.div>
  );
};