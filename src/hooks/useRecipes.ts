import {
  getRandomRecipes,
  getRecipeInformation,
  searchRecipes,
} from "@/services/recipe-service";
import {
  GetRandomRecipesParams,
  GetRecipeInformationParams,
  SearchRecipesParams,
} from "@/types/recipe";
import { useQuery } from "@tanstack/react-query";

export const useRandomRecipes = (params: GetRandomRecipesParams) => {
  return useQuery({
    queryKey: ["randomRecipes", params],
    queryFn: () => getRandomRecipes(params),
  });
};

export const useRecipeInformation = (params: GetRecipeInformationParams) => {
  return useQuery({
    queryKey: ["recipe", params],
    queryFn: () => getRecipeInformation(params),
  });
};

export const useSearchRecipes = (params: SearchRecipesParams) => {
  return useQuery({
    queryKey: ["searchRecipes", params],
    queryFn: () => searchRecipes(params),
    enabled: !!params.query,
  });
};
