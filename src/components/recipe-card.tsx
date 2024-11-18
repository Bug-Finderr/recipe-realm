"use client";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { RecipeInformation } from "@/types/recipe/recipe-information";
import {
  ClockIcon,
  HeartIcon,
  ImageOffIcon,
  StarIcon,
  UsersIcon,
  UtensilsIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface RecipeCardProps {
  recipe: RecipeInformation;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [imageError, setImageError] = useState(false);

  const dietaryTags = [
    recipe.vegetarian ? "Vegetarian" : null,
    recipe.vegan ? "Vegan" : null,
    recipe.glutenFree ? "Gluten Free" : null,
    recipe.dairyFree ? "Dairy Free" : null,
  ].filter(Boolean);

  return (
    <Link href={`/recipe/${recipe.id}`}>
      <Card className="group relative h-[450px] overflow-hidden bg-white/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 dark:bg-gray-950/50">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-black/20 to-black/60 dark:from-transparent dark:via-gray-950/40 dark:to-gray-950/90" />

        {/* Bg Img or Fallback */}
        <div className="absolute inset-0">
          {recipe.image && !imageError ? (
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-all duration-700 group-hover:scale-105"
              priority
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted/50">
              <ImageOffIcon className="h-16 w-16 text-muted-foreground/50" />
            </div>
          )}
        </div>

        {/* Content Overlay */}
        <div className="relative z-20 flex h-full flex-col justify-end p-6">
          {/* Top Badges */}
          <div className="absolute left-4 right-4 top-4 flex justify-between">
            <div className="flex flex-wrap gap-2">
              {recipe.cheap && (
                <Badge className="border-0 bg-accent text-accent-foreground shadow-sm backdrop-blur-md">
                  Budget Friendly
                </Badge>
              )}
              {recipe.veryPopular && (
                <Badge className="border-0 bg-accent text-accent-foreground shadow-sm backdrop-blur-md">
                  Popular
                </Badge>
              )}
            </div>
            <Tooltip>
              <TooltipTrigger>
                <div className="flex items-center gap-1.5 rounded-full border-0 bg-white/80 px-3 py-1.5 text-foreground shadow-sm backdrop-blur-md dark:bg-gray-900/80 dark:text-gray-100">
                  <StarIcon className="h-4 w-4 text-orange-500 dark:text-orange-400" />
                  <span className="text-sm font-medium">
                    {recipe.healthScore}%
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>Health Score</TooltipContent>
            </Tooltip>
          </div>

          {/* Title & Source */}
          <div className="mb-4">
            <h3 className="mb-2 text-2xl font-semibold leading-tight text-white dark:text-gray-100">
              {recipe.title}
            </h3>
            <p className="text-sm text-white/90 dark:text-gray-300">
              by {recipe.sourceName || "Unknown Source"}
            </p>
          </div>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {dietaryTags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-white/30 bg-white/20 text-white backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-2 rounded-xl border border-white/30 bg-white/20 p-4 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/50">
            <Stat
              icon={ClockIcon}
              value={`${recipe.readyInMinutes}min`}
              label="Prep Time"
            />
            <Stat icon={UsersIcon} value={recipe.servings} label="Servings" />
            <Stat
              icon={HeartIcon}
              value={recipe.aggregateLikes}
              label="Likes"
            />
            <Stat
              icon={UtensilsIcon}
              value={recipe.pricePerServing.toFixed(2)}
              label="Per Serving"
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string | number;
  label: string;
}) {
  return (
    <Tooltip>
      <TooltipTrigger className="flex flex-col items-center gap-1">
        <Icon className="h-4 w-4 text-white" />
        <span className="text-sm font-medium text-white">{value}</span>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}
