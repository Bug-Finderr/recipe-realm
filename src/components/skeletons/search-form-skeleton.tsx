import { Skeleton } from "@/components/ui/skeleton";

export function SearchFormSkeleton() {
  return (
    <div className="mb-8">
      <div className="mx-auto flex max-w-2xl items-center gap-2">
        <Skeleton className="h-12 flex-1" />
        <Skeleton className="h-12 w-32" />
      </div>
    </div>
  );
}
