"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("q");

    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("q", query.toString());
      params.set("page", "1");
    } else {
      params.delete("q");
      params.delete("page");
    }

    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="mx-auto flex max-w-2xl items-center gap-2">
        <Input
          type="search"
          name="q"
          defaultValue={searchParams.get("q") ?? ""}
          placeholder="Search recipes..."
          className="h-10"
        />
        <Button
          type="submit"
          animate="expandIcon"
          icon={<SearchIcon className="mr-2 h-4 w-4" />}
          iconPlacement="left"
        >
          Search
        </Button>
      </div>
    </form>
  );
}
