"use client";

import type dynamicIconImports from "lucide-react/dynamicIconImports";
import Link from "next/link";
import { type ReactNode } from "react";

import { DotIcon } from "lucide-react";
import type dynamicIconImports from "lucide-react/dynamicIconImports";
import Link from "next/link";
import type { ReactNode } from "react";

import SidebarButton from "./sidebar-button";

interface Properties {
  slug: string;
  icon: React.ReactNode;
  children: ReactNode;
}

export default function SidebarLink({
  slug,
  icon,
  children,
}: Properties): JSX.Element {
  return (
    <Link href={`category/${slug}`}>
      <SidebarButton leftIcon={icon ?? <DotIcon color="black" size={18} />}>
        {children}
      </SidebarButton>
    </Link>
  );
}
