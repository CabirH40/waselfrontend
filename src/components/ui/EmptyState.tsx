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

export const EmptyState = ({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="flex flex-col items-center text-center max-w-md mx-auto p-8"
  >
    <div className="w-32 h-32 bg-secondary rounded-[3rem] flex items-center justify-center mb-8 text-muted-foreground/30">
      <Icon size={64} strokeWidth={1.5} />
    </div>
    <h3 className="text-3xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-muted-foreground font-medium leading-relaxed mb-10">
      {description}
    </p>
    {actionLabel && (
      <Button 
        onClick={onAction}
        className="btn-primary-gradient h-14 px-10 rounded-2xl font-black text-lg"
      >
        {actionLabel}
      </Button>
    )}
  </motion.div>
);