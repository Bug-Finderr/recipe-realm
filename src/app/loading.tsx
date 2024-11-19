import { RecipeCardSkeleton } from "@/components/skeletons/recipe-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-transparent py-32 shadow-sm dark:from-background dark:via-background">
        <div className="bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.02] absolute inset-0" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Skeleton className="mx-auto h-36 w-3/4" />
            <Skeleton className="mx-auto mt-6 h-14 max-w-2xl" />
            <div className="mt-8 flex justify-center">
              <Skeleton className="h-11 w-44" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-transparent via-white to-gray-50/50 py-24 dark:via-transparent dark:to-transparent">
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="group rounded-lg border bg-card p-6 shadow-md"
              >
                <Skeleton className="h-12 w-12" />
                <Skeleton className="mt-4 h-7 w-40" />
                <Skeleton className="mt-2 h-6 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="bg-gradient-to-b from-gray-50/50 via-white to-transparent py-24 shadow-sm dark:from-transparent dark:via-transparent">
        <div className="container mx-auto px-4">
          <Skeleton className="mx-auto mb-12 h-9 w-64" />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-fade-up">
                <RecipeCardSkeleton />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
