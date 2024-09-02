"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";

export enum NavigationsVariant {
  Desktop = "desktop",
  Mobile = "mobile",
}

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

export const Navigations = ({ variant }: { variant: NavigationsVariant }) => {
  const path = usePathname();
  return (
    <NavigationMenu className="justify-center">
      <NavigationMenuList
        className={cn(
          variant === NavigationsVariant.Desktop && "flex-row",
          variant === NavigationsVariant.Mobile && "flex-col items-start space-x-0",
        )}>
        {links.map((link) => (
          <NavigationMenuItem key={link.id}>
            <Link href={link.path} passHref legacyBehavior>
              <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), variant === NavigationsVariant.Mobile && "text-md px-2")}>
                {link.name}
                <div
                  className={cn(
                    "absolute top-9 h-1 w-full rounded border-primary group-hover:border-b-4 ml-3",
                    link.path === path && "border-b-4",
                  )}
                />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

