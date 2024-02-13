"use client";

import { DotIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import GetLuicideIcon from "@/lib/get-luicide-icon";

import SidebarButton from "./sidebar-button";

interface Properties {
  slug: string;
  icon: string | undefined;
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
          icon ? (
            <GetLuicideIcon name={icon as never} size={18} />
          ) : (
            <DotIcon size={18} />
          )
        }>
        {children}
      </SidebarButton>
    </Link>
  );
}
