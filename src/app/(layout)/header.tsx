'use client';

import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export default function Header(): JSX.Element {
  const links = [
    {
      id: 1,
      name: 'Ana Sayfa',
      path: '/',
    },
    {
      id: 2,
      name: 'Yazılar',
      path: '/posts',
    },
    {
      id: 3,
      name: 'Video İçerikler',
      path: '/videos',
    },
    {
      id: 4,
      name: 'Podcastler',
      path: '/podcasts',
    },
  ];

  return (
    <header className="flex w-full items-center justify-between h-20">
      <h1 className=" text-2xl font-bold">Gelecek Bilimde</h1>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link href={link.path}>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{link.name}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </header>
  );
}
