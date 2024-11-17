import { searchRecipes } from "@/services/recipe-service";

export default async function Home() {
  const recipes = await searchRecipes({ query: "pasta" });
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="mb-4 text-4xl font-bold">Welcome to Recipie Realm</h1>
      <p className="text-lg text-muted-foreground">
        Your place to find and share amazing recipes
      </p>
      <pre>{JSON.stringify(recipes, null, 2)}</pre>
    </main>
  );
}
