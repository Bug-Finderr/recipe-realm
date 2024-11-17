import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.spoonacular.com";
const API_KEY = process.env.SPOONACULAR_API_KEY;

if (!API_KEY) {
  console.error("SPOONACULAR_API_KEY not set in the environment variables.");
  throw new Error("SPOONACULAR_API_KEY not set in the environment variables.");
}

export const getNewApiInstance = (
  path?: string,
  config?: AxiosRequestConfig,
): AxiosInstance =>
  axios.create({
    baseURL: `${BASE_URL}${path}`,
    timeout: 10000,
    params: {
      apiKey: API_KEY,
    },
    ...config,
  });
