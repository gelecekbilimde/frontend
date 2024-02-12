import { baseFetcher } from "@/lib/base-fetcher";

export const getCategories = async () => {
  const data = await baseFetcher<{ content: ICategory[] }>("/category");
  return data;
};
