interface ICategory {
  id: number;
  name: string;
  orderNumber: number;
  slug: string;
  icon?: string;
  parentId?: number | null;
}
