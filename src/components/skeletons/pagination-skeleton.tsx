import { Skeleton } from "@/components/ui/skeleton";

export function PaginationSkeleton() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {/* Desktop Pagination */}
      <div className="hidden gap-2 md:flex">
        {/* First/Previous buttons */}
        <Skeleton className="h-9 w-16" />
        <Skeleton className="h-9 w-20" />

        {/* Page numbers */}
        <div className="flex gap-2">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-9 w-9" />
          ))}
        </div>

        {/* Next/Last buttons */}
        <Skeleton className="h-9 w-16" />
        <Skeleton className="h-9 w-16" />
      </div>

      {/* Mobile Pagination */}
      <div className="flex items-center gap-2 md:hidden">
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-9 w-24" />
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-9 w-9" />
      </div>
    </div>
  );
}
