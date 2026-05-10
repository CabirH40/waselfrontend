import { cn } from "@/lib/utils";

export const RestaurantSkeleton = () => (
  <div className="space-y-4">
    <div className="h-56 w-full skeleton-pulse" />
    <div className="space-y-2">
      <div className="h-6 w-3/4 skeleton-pulse" />
      <div className="h-4 w-1/2 skeleton-pulse" />
    </div>
  </div>
);

export const CategorySkeleton = () => (
  <div className="flex flex-col items-center gap-3 min-w-[100px]">
    <div className="w-20 h-20 skeleton-pulse" />
    <div className="h-4 w-12 skeleton-pulse" />
  </div>
);

export const MenuSkeleton = () => (
  <div className="flex gap-6 p-5 border rounded-[2rem] skeleton-pulse h-40 w-full" />
);