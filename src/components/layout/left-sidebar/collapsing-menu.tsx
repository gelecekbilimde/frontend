"use client";

import { useQuery } from "@tanstack/react-query";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

import { getCategories } from "./_services/get-categories";
import SidebarButton from "./sidebar-button";
import SidebarLink from "./sidebar-link";

export default function CollapsingMenu({
  category,
}: {
  category: ICategory;
}): JSX.Element {
  const { data: categories } = useQuery({
    queryFn: getCategories,
  });
  const [active, setActive] = useState<number>(0);
  const buttonHeightRem = 1.5;

  const parentCategories =
    categories?.list?.content?.filter((cat) => cat.parentId === category.id) ??
    [];

  return (
    <>
      <SidebarButton
        onClick={() => {
          active === category.id ? setActive(0) : setActive(category.id);
        }}
        leftIcon={
          <div>test</div>
          // <Icon name={category?.icon as never} size={18} /> ?? (
          //   <DotIcon size={18} />
          // )
        }
        rightIcon={
          parentCategories.length > 0 && (
            <ChevronRight
              className={`h-3.5 w-3.5 transition-all ${
                active === category.id ? "rotate-90" : ""
              }`}
            />
          )
        }
      >
        {category.name}
      </SidebarButton>
      <div
        className="flex max-h-0 flex-col overflow-hidden ps-4 transition-all"
        style={{
          maxHeight:
            category.id === active
              ? `${(buttonHeightRem * 2 + 0.5) * parentCategories.length}rem`
              : "0rem",
        }}
      >
        {parentCategories?.map((child) => (
          <SidebarLink key={child.id} slug={child.slug} icon={child.icon}>
            {child.name}
          </SidebarLink>
        ))}
      </div>
    </>
  );
}
