import { baseFetcher } from "@/lib/base-fetcher";

export const getCategories = async () => {
  const data = await baseFetcher<ICategory[]>("/category");
  return data;
};
