import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const BASE_URL = "https://api.spoonacular.com";
const API_KEY = process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY; // TODO: (fix) exposes API to client, not secure

if (!API_KEY)
  throw new Error("SPOONACULAR_API_KEY not set in the environment variables.");

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
