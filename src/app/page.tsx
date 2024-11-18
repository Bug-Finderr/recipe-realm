import { RecipeCard } from "@/components/recipe-card";
import { Button } from "@/components/ui/button";
import { getRandomRecipes } from "@/services/recipe-service";
import { ChefHat, Search, Soup, UtensilsCrossed } from "lucide-react";

export default async function Home() {
  const { recipes } = await getRandomRecipes({ number: 15 });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800/50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-transparent py-32 shadow-sm dark:from-background dark:via-background">
        <div className="bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.02] absolute inset-0" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="animate-fade-up bg-gradient-to-br from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-6xl font-bold tracking-tight text-transparent [text-wrap:balance] sm:text-7xl">
              Discover & Cook Amazing Recipes
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg text-muted-foreground [text-wrap:balance]">
              From quick weekday meals to gourmet adventures, find your next
              favorite dish from our collection of 5000+ handpicked recipes.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button size="lg" className="animate-fade-up group gap-2">
                <Search className="h-4 w-4 transition-transform group-hover:-rotate-12" />
                Search Recipes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-to-b from-transparent via-white to-gray-50/50 py-24 dark:via-transparent dark:to-transparent">
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <FeatureCard
              icon={ChefHat}
              title="Expert Curated"
              description="Recipes from professional chefs and food enthusiasts"
            />
            <FeatureCard
              icon={UtensilsCrossed}
              title="Easy to Follow"
              description="Step-by-step instructions with detailed guidance"
            />
            <FeatureCard
              icon={Soup}
              title="Diverse Cuisine"
              description="Explore dishes from around the world"
            />
          </div>
        </div>
      </section>

      {/* Recipes Grid */}
      <section className="bg-gradient-to-b from-gray-50/50 via-white to-transparent py-24 shadow-sm dark:from-transparent dark:via-transparent">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight">
            Featured Recipes
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="animate-fade-up">
                <RecipeCard recipe={recipe} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group rounded-lg border bg-card p-6 shadow-md transition-all hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 dark:hover:border-primary/30">
      <Icon className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </div>
  );
}
