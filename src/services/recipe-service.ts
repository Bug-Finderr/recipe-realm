import {
  GetRandomRecipesParams,
  GetRecipeInformationParams,
  RandomRecipeResponse,
  RecipeInformation,
  SearchRecipesParams,
  SearchRecipesResponse,
} from "@/types/recipe";
import { getNewApiInstance } from "@/utils/api-instance";
import { AxiosInstance } from "axios";

const recipeService: AxiosInstance = getNewApiInstance("/recipes");

export const searchRecipes = async (
  params: SearchRecipesParams,
): Promise<SearchRecipesResponse> => {
  try {
    const response = await recipeService.get<SearchRecipesResponse>(
      "/complexSearch",
      {
        params: {
          ...params,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const getRecipeInformation = async (
  params: GetRecipeInformationParams,
): Promise<RecipeInformation> => {
  try {
    const response = await recipeService.get<RecipeInformation>(
      `/${params.id}/information`,
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe information:", error);
    throw error;
  }
};

export const getRandomRecipes = async (
  params: GetRandomRecipesParams,
): Promise<RandomRecipeResponse> => {
  try {
    const response = await recipeService.get<RandomRecipeResponse>("/random", {
      params,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching random recipes:", error);
    throw error;
  }
};
