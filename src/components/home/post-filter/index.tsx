"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  categoriesConstants,
  type ICategory,
} from "@/constants/categories.constants";
import { cn } from "@/lib/utils";

const PostFilter: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>();

  return (
    <div className="flex gap-x-2">
      {categoriesConstants.map((category) => (
        <PostFilterItem
          key={category.id}
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
};

const PostFilterItem: React.FC<{
  category: ICategory;
  selectedCategory: ICategory | null | undefined;
  setSelectedCategory: (category: ICategory | undefined) => void;
}> = ({ category, selectedCategory, setSelectedCategory }) => {
  const hasSelectedCategory = selectedCategory?.id === category.id;

  return (
    <Button
      size="xs"
      variant="outline"
      className={cn(
        "rounded-full px-3 text-sm font-medium text-slate-600",
        hasSelectedCategory &&
          "bg-primary text-slate-50 hover:bg-primary/90 hover:text-slate-50 border-transparent",
      )}
      onClick={() => {
        setSelectedCategory(category);
      }}>
      {category.name}
    </Button>
  );
};

export default PostFilter;
