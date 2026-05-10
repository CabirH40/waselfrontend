import { Skeleton } from "@/components/ui/skeleton";

export const RestaurantSkeleton = () => (
  <div className="space-y-6">
    <Skeleton className="h-64 w-full rounded-[3rem]" />
    <div className="space-y-3 px-4">
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-1/2 rounded-xl" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <Skeleton className="h-4 w-3/4 rounded-lg" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
    </div>
  </div>
);

export const CategorySkeleton = () => (
  <div className="flex flex-col items-center gap-4 min-w-[110px]">
    <Skeleton className="w-24 h-24 rounded-[2.5rem]" />
    <Skeleton className="h-4 w-16 rounded-lg" />
  </div>
);