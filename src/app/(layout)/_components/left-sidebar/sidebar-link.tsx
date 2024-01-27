"use client";

import type dynamicIconImports from "lucide-react/dynamicIconImports";
import Link from "next/link";
import { type ReactNode } from "react";

import Icon from "@/lib/get-luicide-icon";

import SidebarButton from "./sidebar-button";

interface Properties {
  slug: string;
  icon: keyof typeof dynamicIconImports;
  children: ReactNode;
}

export default function SidebarLink({
  slug,
  icon,
  children,
}: Properties): JSX.Element {
  return (
    <Link href={`category/${slug}`}>
      <SidebarButton
        leftIcon={
          <Icon className="group-hover:!text-white" name={icon} size={18} />
        }
      >
        {children}
      </SidebarButton>
    </Link>
  );
}
