import Collapser from '@/app/(layout)/_components/left-sidebar/category-collapser';
import MenuLink from '@/app/(layout)/_components/left-sidebar/menu-link';

interface Category {
  id: number;
  order: number;
  title: string;
  children: Category[];
  isChild?: boolean;
}

export default function LeftSideBar(): JSX.Element {
  return (
    <aside className="py-2">
      <h2 className="ps-4 text-lg font-semibold">Kategoriler</h2>
      <div className="flex flex-col py-2">{categories.map((category) => menuHandler(category))}</div>
    </aside>
  );
}

const menuHandler: (category: Category) => JSX.Element = (category: Category) =>
  category.children.length === 0 ? (
    <MenuLink key={category.id} isChild={category.isChild}>
      {category.title}
    </MenuLink>
  ) : (
    <Collapser size={category.children.length} key={category.id} title={category.title}>
      {category.children.map((child) => menuHandler({ ...child, title: `${child.title}`, isChild: true }))}
    </Collapser>
  );

const categories: Category[] = [
  {
    id: 1,
    order: 0,
    title: 'Bilim',
    children: [
      {
        id: 100,
        order: 0,
        title: 'Fizik',
        children: [],
      },
      {
        id: 101,
        order: 1,
        title: 'Biyoloji',
        children: [],
      },
      {
        id: 102,
        order: 2,
        title: 'Kimya',
        children: [],
      },
    ],
  },
  {
    id: 2,
    order: 1,
    title: 'Teknoloji',
    children: [],
  },
  {
    id: 3,
    order: 2,
    title: 'Felsefe',
    children: [
      {
        id: 300,
        order: 0,
        title: 'Epistemoloji',
        children: [],
      },
      {
        id: 301,
        order: 1,
        title: 'Ontoloji',
        children: [],
      },
      {
        id: 302,
        order: 2,
        title: 'Ahlak Felsefesi',
        children: [],
      },
    ],
  },
];
