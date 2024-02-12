interface ICategory {
  id: number;
  order: number;
  name: string;
  slug: string;
  icon?: string;
  children: Child[];
}
interface Child {
  id: number;
  order: number;
  name: string;
  slug: string;
  children: any[];
}
