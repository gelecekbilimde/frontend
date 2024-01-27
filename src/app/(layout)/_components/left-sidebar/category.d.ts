import type dynamicIconImports from "lucide-react/dynamicIconImports";

export interface Category {
  id: number;
  order: number;
  title: string;
  slug: string;
  children: Category[];
  isChild?: boolean;
  icon?: React.ReactNode;
}
