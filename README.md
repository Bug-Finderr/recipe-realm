# Recipe Explorer

A recipe discovery application built with Next.js 15 and the Spoonacular API.

## Features

- Recipe search functionality
- Individual recipe pages showing:
  - Ingredients and measurements
  - Step-by-step cooking instructions
  - Basic nutritional information
  - Cooking time and servings
- Dark mode support
- Loading states for better UX

## Tech Stack

- Next.js 15 with App Router
- TypeScript
- React Query for data fetching
- Tailwind CSS + shadcn/ui
- Geist font
- ESLint + Prettier

## Quick Start

1. **Clone and Install:**

   ```bash
   git clone https://github.com/Bug-Finderr/recipe-realm.git
   cd recipe-realm
   pnpm install
   ```

2. **Environment Setup:**

   Create `.env` file:

   ```bash
   NEXT_PUBLIC_SPOONACULAR_API_KEY=your_api_key_here
   ```

3. **Development:**

   ```bash
   pnpm dev
   ```

Visit `http://localhost:3000`

## API Integration

The app uses these Spoonacular endpoints:

- Random Recipes (Homepage)
- Recipe by ID (Recipe details)
- Recipe Search (Search results)

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feat/xyz`)
3. Commit changes using conventional commits
4. Push to branch
5. Open Pull Request

## License

MIT License - see [LICENSE](LICENSE) for details.
