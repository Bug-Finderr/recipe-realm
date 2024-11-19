import { PaginationSkeleton } from "@/components/skeletons/pagination-skeleton";
import { RecipeCardSkeleton } from "@/components/skeletons/recipe-card-skeleton";
import { SearchFormSkeleton } from "@/components/skeletons/search-form-skeleton";

export default function SearchLoading() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4 py-8">
        <SearchFormSkeleton />

        <div className="animate-pulse">
          {/* Results Title Skeleton */}
          <div className="mb-6 h-8 w-64 rounded-md bg-muted" />

          {/* Results Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="animate-fade-up">
                <RecipeCardSkeleton />
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="mt-8">
            <PaginationSkeleton />
          </div>
        </div>
      </div>
    </main>
  );
}
