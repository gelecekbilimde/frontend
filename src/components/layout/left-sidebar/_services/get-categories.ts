import { baseFetcher } from "@/lib/base-fetcher";

export const getCategories = async () => {
  const data = await baseFetcher<ICategory[]>("/categories/summary");
  return data;
};
