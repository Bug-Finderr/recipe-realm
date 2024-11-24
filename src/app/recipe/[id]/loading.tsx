import { Skeleton } from "@/components/ui/skeleton";

export default function RecipeLoading() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50/80 via-white to-gray-100/50 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-800/50">
      <div className="bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.02] absolute inset-0" />
      <div className="container relative mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8 overflow-hidden rounded-lg border-2 bg-white/80 backdrop-blur-md dark:bg-gray-950/50">
          <div className="relative aspect-[21/9]">
            <Skeleton className="absolute inset-0" />
          </div>
          <div className="relative space-y-4 p-6">
            <div className="flex flex-wrap gap-2">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-5 w-20" />
              ))}
            </div>
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-200/50 bg-white/60 p-6 backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/50 sm:grid-cols-3 md:grid-cols-5">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 text-center"
            >
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-4 w-20" />
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Ingredients Card */}
            <div className="rounded-lg bg-white/80 p-6 backdrop-blur-md dark:bg-gray-950/50">
              <div className="mb-6 flex items-center justify-between">
                <Skeleton className="h-8 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-lg border border-gray-200/50 bg-white/60 p-3 dark:border-gray-800/50 dark:bg-gray-950/50"
                  >
                    <Skeleton className="h-16 w-16 rounded-md" />
                    <div className="flex-1">
                      <Skeleton className="h-5 w-32" />
                      <Skeleton className="mt-2 h-4 w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recipe Metadata */}
            <div className="divide-y rounded-lg bg-white/80 p-6 backdrop-blur-md dark:bg-gray-950/50">
              <div className="mb-4">
                <Skeleton className="mb-3 h-6 w-32" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-5 w-20" />
                  ))}
                </div>
              </div>
              <div className="py-4">
                <Skeleton className="mb-3 h-6 w-40" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-5 w-24" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Summary */}
            <div className="rounded-lg bg-white/80 p-6 backdrop-blur-md dark:bg-gray-950/50">
              <Skeleton className="mb-4 h-8 w-40" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-11/12" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>

            {/* Instructions */}
            <div className="overflow-hidden rounded-lg bg-white/80 backdrop-blur-md dark:bg-gray-950/50">
              <div className="border-b bg-muted/30 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <Skeleton className="h-8 w-32" />
                    <Skeleton className="mt-2 h-4 w-32" />
                  </div>
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>

              <div className="p-6">
                <div className="relative space-y-12">
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/30 to-primary/5" />

                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="relative pl-12">
                      <Skeleton className="absolute -left-3 h-14 w-14 rounded-full" />
                      <div className="overflow-hidden rounded-lg border-2 border-gray-200/50 bg-white/60 backdrop-blur-md dark:border-gray-800/50 dark:bg-gray-950/50">
                        <div className="p-6">
                          <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-11/12" />
                            <Skeleton className="h-4 w-4/5" />
                          </div>

                          <div className="mt-6 space-y-3">
                            <div className="rounded-lg bg-gray-100/50 p-3 dark:bg-muted/30">
                              <Skeleton className="mb-2 h-4 w-20" />
                              <div className="flex gap-2">
                                {[...Array(3)].map((_, j) => (
                                  <Skeleton key={j} className="h-5 w-20" />
                                ))}
                              </div>
                            </div>
                            <div className="rounded-lg bg-gray-100/50 p-3 dark:bg-muted/30">
                              <Skeleton className="mb-2 h-4 w-20" />
                              <div className="flex gap-2">
                                {[...Array(2)].map((_, j) => (
                                  <Skeleton key={j} className="h-5 w-24" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
