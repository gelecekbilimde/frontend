'use client';

import Collapser from '@/components/sidebar/category-collapser';
import MenuLink from '@/components/sidebar/menu-link';

interface Category {
  id: number;
  order: number;
  title: string;
  children: Category[];
}

export default function SideBar(): JSX.Element {
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

  const menuHandler = (category: Category) => {
    if (category.children.length === 0) {
      return <MenuLink key={category.id} title={category.title} />;
    }
    return (
      <Collapser size={category.children.length} key={category.id} title={category.title}>
        {category.children.map((child) => menuHandler({ ...child, title: `${child.title}` }))}
      </Collapser>
    );
  };
  return <>{categories.map((category) => menuHandler(category))}</>;
}
