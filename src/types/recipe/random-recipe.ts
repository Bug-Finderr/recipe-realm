import { RecipeInformation } from "./recipe-information";

// Docs: https://spoonacular.com/food-api/docs#Get-Random-Recipes

export interface GetRandomRecipesParams {
  includeNutrition?: boolean;
  "include-tags"?: string;
  "exclude-tags"?: string;
  number?: number;
}

export interface RandomRecipeResponse {
  recipes: RecipeInformation[];
}
