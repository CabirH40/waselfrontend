import { LucideIcon } from "lucide-react";
import { Button } from "./button";

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}

export const EmptyState = ({ icon: Icon, title, description, actionLabel, onAction }: EmptyStateProps) => (
  <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
    <div className="w-24 h-24 bg-secondary rounded-[2.5rem] flex items-center justify-center mb-6">
      <Icon className="w-12 h-12 text-muted-foreground" />
    </div>
    <h3 className="text-2xl font-black mb-2">{title}</h3>
    <p className="text-muted-foreground max-w-xs mb-8 font-medium">{description}</p>
    {actionLabel && (
      <Button onClick={onAction} className="btn-primary-gradient rounded-2xl px-8 h-12 font-bold">
        {actionLabel}
      </Button>
    )}
  </div>
);