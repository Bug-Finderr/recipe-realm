"use client";

import { Pagination } from "@/components/pagination";
import { RecipeCard } from "@/components/recipe-card";
import { SearchForm } from "@/components/search-form";
import { useSearchRecipes } from "@/hooks/useRecipes";
import { RecipeInformation } from "@/types/recipe";
import { useSearchParams } from "next/navigation";
import Loading from "./loading";

const ITEMS_PER_PAGE = 12;

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") ?? "";
  const page = parseInt(searchParams.get("page") ?? "1");
  const offset = (page - 1) * ITEMS_PER_PAGE;

  const { data: searchResults, isLoading } = useSearchRecipes({
    query,
    addRecipeInformation: true,
    number: ITEMS_PER_PAGE,
    offset,
  });

  if (isLoading && query) return <Loading />;

  const totalPages = searchResults
    ? Math.ceil(searchResults.totalResults / ITEMS_PER_PAGE)
    : 0;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800/50">
      <div className="container mx-auto px-4 py-8">
        <SearchForm />

        {searchResults && (
          <>
            <h2 className="mb-6 text-2xl font-semibold">
              {searchResults.totalResults} Results for &quot;{query}&quot;
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {searchResults.results.map((recipe) => (
                <div key={recipe.id} className="animate-fade-up">
                  <RecipeCard recipe={recipe as RecipeInformation} />
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination currentPage={page} totalPages={totalPages} />
              </div>
            )}
          </>
        )}

        {!searchResults && (
          <div className="text-center text-muted-foreground">
            Enter a search term to find recipes
          </div>
        )}
      </div>
    </main>
  );
}
