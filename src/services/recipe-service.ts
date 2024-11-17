import { RecipeSearchResponse } from "@/types/recipe";
import { getNewApiInstance } from "@/utils/api-instance";
import { AxiosInstance } from "axios";

const recipeService: AxiosInstance = getNewApiInstance("/recipes");

export const searchRecipes = async (
  params: Record<string, unknown>,
): Promise<RecipeSearchResponse> => {
  try {
    const response = await recipeService.get<RecipeSearchResponse>(
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
