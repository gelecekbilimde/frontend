"use client";

import { SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

import ProfileDropdown from "./profile-dropdown";

const links = [
  {
    id: 1,
    name: "Ana Sayfa",
    path: "/",
  },
  {
    id: 3,
    name: "Video İçerikler",
    path: "/videos",
  },
  {
    id: 4,
    name: "Podcastler",
    path: "/podcasts",
  },
  {
    id: 5,
    name: "İletişim",
    path: "/contact",
  },
];

export default function Header(): JSX.Element {
  const path = usePathname();

  return (
    <header className="flex h-20 w-full items-center justify-between">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={200} height={42} />
      </Link>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.id}>
                <Link href={link.path} passHref legacyBehavior>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle())}>
                    {link.name}
                    <div
                      className={cn(
                        "absolute top-9 h-1 w-full rounded border-primary group-hover:border-b-4",
                        link.path === path && "border-b-4",
                      )}
                    />
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div className="flex gap-x-5">
        <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
          <SearchIcon className="h-4 w-4 text-slate-600" />
        </button>
        <ProfileDropdown />
      </div>
    </header>
  );
}
