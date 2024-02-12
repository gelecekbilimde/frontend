export interface Category {
  id: number;
  order: number;
  name: string;
  slug: string;
  children: Category[];
  isChild?: boolean;
  icon?: string;
}
