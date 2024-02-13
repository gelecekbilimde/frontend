interface ICategory {
  id: number;
  name: string;
  order: number;
  slug: string;
  icon?: string;
  parentId?: number;
}
