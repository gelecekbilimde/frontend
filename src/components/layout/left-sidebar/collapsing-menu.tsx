"use client";

import { ChevronRight, DotIcon } from "lucide-react";
import { useState } from "react";

import GetLuicideIcon from "@/lib/get-luicide-icon";

import type { Category } from "./category";
import SidebarButton from "./sidebar-button";
import SidebarLink from "./sidebar-link";

export default function CollapsingMenu({
  category,
}: {
  category: Category;
}): JSX.Element {
  const [active, setActive] = useState<number>(0);
  const buttonHeightRem = 1.5;

  return (
    <>
      <SidebarButton
        onClick={() => {
          active === category.id ? setActive(0) : setActive(category.id);
        }}
        leftIcon={
          <GetLuicideIcon name={category?.icon as never} size={18} /> ?? (
            <DotIcon size={18} />
          )
        }
        rightIcon={
          <ChevronRight
            className={`h-3.5 w-3.5 transition-all ${
              active === category.id ? "rotate-90" : ""
            }`}
          />
        }>
        {category.name}
      </SidebarButton>
      <div
        className="flex max-h-0 flex-col overflow-hidden ps-4 transition-all"
        style={{
          maxHeight:
            category.id === active
              ? `${(buttonHeightRem * 2 + 0.5) * category.children.length}rem`
              : "0rem",
        }}>
        {category.children.map((child) => (
          <SidebarLink key={child.id} slug={child.slug} icon={child.icon}>
            {child.name}
          </SidebarLink>
        ))}
      </div>
    </>
  );
}
