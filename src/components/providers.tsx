"use client";

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "next-themes";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 10, // 10 min
            gcTime: 1000 * 60 * 20, // 20 min
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

/*
1. staleTime
Definition: determines how long a query's data is considered "fresh" before it's marked as stale. During this time, no refetching will occur automatically.

Default: 0 (The data is considered stale immediately after it’s fetched.)

Behavior:
If staleTime is set to a non-zero value, the data will be considered fresh for that duration (in milliseconds).
During this "fresh" period, if the same query is made again, TanStack Query will not refetch the data from the server but will return the cached data.
Once the staleTime expires, the data becomes "stale," and TanStack Query will trigger a refetch the next time the query is accessed or when certain conditions (like window focus, network reconnect, etc.) are met.


2. gcTime (aka cacheTime)
Definition: specifies how long the query's data remains in the cache after it is marked as inactive (i.e., no component is using it).

Default: 5 minutes (300,000 milliseconds).

Behavior:

When a query is no longer used by any component (inactive), it will stay in the cache for the duration specified by cacheTime.
After cacheTime expires, TanStack Query will garbage collect (remove) the data from the cache.
This helps optimize memory usage by removing unused data while still allowing quick access to cached data when it's needed.
*/
