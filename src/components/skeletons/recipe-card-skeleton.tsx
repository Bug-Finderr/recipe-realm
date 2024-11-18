import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function RecipeCardSkeleton() {
  return (
    <Card className="group relative h-[450px] overflow-hidden bg-white/80 dark:bg-gray-950/50">
      {/* Background Skeleton */}
      <Skeleton className="absolute inset-0" />

      {/* Content Overlay */}
      <div className="relative z-20 flex h-full flex-col justify-end p-6">
        {/* Top Badges */}
        <div className="absolute left-4 right-4 top-4 flex justify-between">
          <div className="flex gap-2">
            <Skeleton className="h-5 w-24" />
          </div>
          <Skeleton className="h-7 w-16 rounded-full" />
        </div>

        {/* Title & Source */}
        <div className="mb-4 space-y-3">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-24" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-2 rounded-xl border border-white/30 bg-white/20 p-4 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/50">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-12" />
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
