"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useRecipeInformation } from "@/hooks/useRecipes";
import {
  CheckIcon,
  ChefHatIcon,
  ClockIcon,
  CookingPotIcon,
  DollarSignIcon,
  HeartIcon,
  ImageOffIcon,
  StarIcon,
  UsersIcon,
  UtensilsIcon,
} from "lucide-react";
import Image from "next/image";
import { use } from "react";
import Loading from "./loading";

export default function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const {
    data: recipe,
    isLoading,
    isError,
  } = useRecipeInformation({
    id: parseInt(id),
  });
  const dietaryTags = [
    recipe?.vegetarian ? "Vegetarian" : null,
    recipe?.vegan ? "Vegan" : null,
    recipe?.glutenFree ? "Gluten Free" : null,
    recipe?.dairyFree ? "Dairy Free" : null,
  ].filter(Boolean);

  if (isLoading) return <Loading />;
  if (isError || !recipe) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg text-muted-foreground">Recipe not found</p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-gray-50/80 via-white to-gray-100/50 dark:from-gray-950 dark:via-gray-900/80 dark:to-gray-800/50">
      <div className="bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.02] absolute inset-0" />
      <div className="container relative mx-auto px-4 py-8">
        {/* Hero Section */}
        <Card className="mb-8 overflow-hidden border-2 bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:bg-gray-950/50">
          <div className="relative aspect-[21/9]">
            {recipe.image ? (
              <Image
                src={recipe.image}
                alt={recipe.title}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <ImageOffIcon className="h-16 w-16 text-muted-foreground/50" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 dark:from-transparent dark:via-gray-950/40 dark:to-gray-950/90" />
          </div>
          <div className="relative space-y-4 p-6">
            <div className="flex flex-wrap gap-2">
              {dietaryTags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-background/50 backdrop-blur-sm"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold">{recipe.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <ChefHatIcon className="h-4 w-4" />
              <span>by {recipe.sourceName}</span>
            </div>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="mb-8 grid grid-cols-2 gap-4 rounded-xl border border-gray-200/50 bg-white/60 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/50 sm:grid-cols-3 md:grid-cols-5">
          <QuickStat
            icon={ClockIcon}
            value={`${recipe.readyInMinutes}min`}
            label="Total Time"
          />
          <QuickStat
            icon={UsersIcon}
            value={recipe.servings}
            label="Servings"
          />
          <QuickStat
            icon={HeartIcon}
            value={recipe.aggregateLikes}
            label="Likes"
          />
          <QuickStat
            icon={StarIcon}
            value={`${recipe.healthScore}%`}
            label="Health Score"
          />
          <QuickStat
            icon={DollarSignIcon}
            value={`$${recipe.pricePerServing.toFixed(2)}`}
            label="Per Serving"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-[1fr,2fr]">
          {/* Sidebar - Shows first on mobile */}
          <div className="space-y-8">
            {/* Ingredients Card */}
            <Card className="bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:bg-gray-950/50">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Ingredients</h2>
                <span className="text-sm text-muted-foreground">
                  {recipe.servings} servings
                </span>
              </div>
              <div className="space-y-4">
                {recipe.extendedIngredients.map((ingredient, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 rounded-lg border border-gray-200/50 bg-white/60 p-3 backdrop-blur-sm transition-all duration-200 hover:border-primary/50 hover:bg-white/80 hover:shadow-lg dark:border-gray-800/50 dark:bg-gray-950/50 dark:hover:bg-gray-900/70"
                  >
                    <div className="relative h-16 w-16 overflow-hidden rounded-md transition-transform duration-200 group-hover:scale-105">
                      <Image
                        src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                        alt={ingredient.name}
                        fill
                        className="object-contain"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium capitalize transition-colors group-hover:text-primary">
                        {ingredient.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {ingredient.measures.metric.amount}{" "}
                        {ingredient.measures.metric.unitLong}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recipe Metadata */}
            <Card className="divide-y bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:bg-gray-950/50">
              <div>
                <h3 className="mb-3 font-semibold">Cuisine & Type</h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.cuisines.map((cuisine, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-sm transition-colors hover:bg-primary/10"
                    >
                      {cuisine}
                    </Badge>
                  ))}
                  {recipe.dishTypes.map((type, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-white/20 bg-white/20 backdrop-blur-sm transition-colors hover:bg-white/30 dark:border-gray-800 dark:bg-gray-900/50"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>
              {(recipe.veryHealthy || recipe.cheap || recipe.sustainable) && (
                <div className="mt-4 py-4">
                  <h3 className="mb-3 font-semibold">Special Attributes</h3>
                  <div className="flex flex-wrap gap-2">
                    {recipe.veryHealthy && (
                      <Badge className="bg-green-500/80 text-white backdrop-blur-sm hover:bg-green-500/90">
                        Very Healthy
                      </Badge>
                    )}
                    {recipe.cheap && (
                      <Badge className="bg-blue-500/80 text-white backdrop-blur-sm hover:bg-blue-500/90">
                        Budget Friendly
                      </Badge>
                    )}
                    {recipe.sustainable && (
                      <Badge className="bg-emerald-500/80 text-white backdrop-blur-sm hover:bg-emerald-500/90">
                        Sustainable
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </Card>
          </div>

          {/* Main Content - Instructions */}
          <div className="space-y-8">
            {/* Summary */}
            <Card className="bg-white/80 p-6 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:bg-gray-950/50">
              <h2 className="mb-4 text-2xl font-semibold">About this Recipe</h2>
              <div
                className="prose prose-gray dark:prose-invert prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80 max-w-none"
                dangerouslySetInnerHTML={{ __html: recipe.summary }}
              />
            </Card>

            {/* Enhanced Instructions */}
            <Card className="overflow-hidden bg-white/80 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:bg-gray-950/50">
              <div className="border-b bg-muted/30 p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold">Instructions</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {recipe.analyzedInstructions[0]?.steps.length} steps to
                      prepare
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="h-4 w-4" />
                    <span>Total time: {recipe.readyInMinutes} min</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="relative space-y-12">
                  {/* Timeline connector */}
                  <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-primary/30 to-primary/5 dark:from-primary dark:via-primary/50 dark:to-primary/10" />

                  {recipe.analyzedInstructions[0]?.steps.map((step) => (
                    <div key={step.number} className="relative pl-12">
                      {/* Step number bubble */}
                      <div className="absolute -left-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-primary/80 text-xl font-semibold text-primary-foreground ring-8 ring-background transition-shadow hover:shadow-lg hover:shadow-primary/20">
                        {step.number}
                      </div>

                      <Card className="group overflow-hidden border-2 border-gray-200/50 bg-white/60 backdrop-blur-md transition-all duration-200 hover:border-primary/50 hover:bg-white/80 hover:shadow-lg dark:border-gray-800/50 dark:bg-gray-950/50 dark:hover:bg-gray-900/70">
                        <div className="p-6">
                          <p className="mb-6 text-lg leading-relaxed">
                            {step.step}
                          </p>

                          {/* Ingredients and Equipment */}
                          <div className="space-y-3">
                            {step.ingredients?.length > 0 && (
                              <div className="flex flex-wrap items-center gap-2 rounded-lg bg-gray-100/50 p-3 transition-colors group-hover:bg-gray-100/80 dark:bg-muted/30 dark:group-hover:bg-muted/50">
                                <span className="mr-2 flex items-center gap-2 font-medium text-muted-foreground">
                                  <UtensilsIcon className="h-4 w-4" />
                                  Ingredients:
                                </span>
                                {step.ingredients.map((ingredient, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="bg-white/80 backdrop-blur-sm transition-colors hover:bg-primary/5 dark:bg-background/80 dark:hover:bg-primary/10"
                                  >
                                    {ingredient.name}
                                  </Badge>
                                ))}
                              </div>
                            )}
                            {step.equipment?.length > 0 && (
                              <div className="flex flex-wrap items-center gap-2 rounded-lg bg-gray-100/50 p-3 transition-colors group-hover:bg-gray-100/80 dark:bg-muted/30 dark:group-hover:bg-muted/50">
                                <span className="mr-2 flex items-center gap-2 font-medium text-muted-foreground">
                                  <CookingPotIcon className="h-4 w-4" />
                                  Equipment:
                                </span>
                                {step.equipment.map((item, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="bg-white/80 backdrop-blur-sm transition-colors hover:bg-primary/5 dark:bg-background/80 dark:hover:bg-primary/10"
                                  >
                                    {item.name}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}

                  {/* End marker */}
                  <div className="absolute -bottom-4 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-muted ring-4 ring-background">
                    <CheckIcon className="h-4 w-4 text-primary" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

function QuickStat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string | number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1 text-center transition-all duration-300 hover:scale-105">
      <Icon className="h-5 w-5 text-primary/80" />
      <div className="font-semibold">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
