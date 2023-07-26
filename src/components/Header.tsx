import { Link } from 'react-router-dom';
import { Button } from './shadcn/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './shadcn/ui/navigation-menu';

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
    <header className="flex w-full max-w-[87.5rem] items-center justify-between px-24 py-4">
      <h1 className=" text-2xl font-bold">Gelecek Bilimde</h1>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link to={link.path}>
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
