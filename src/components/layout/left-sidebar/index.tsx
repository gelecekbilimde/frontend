"use client";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

import { getCategories } from "./_services/get-categories";
import CollapsingMenu from "./collapsing-menu";
import SidebarLink from "./sidebar-link";
import Volunteer from "./volunteer";

export default function LeftSideBar(): JSX.Element {
  const { data: categories, isLoading } = useQuery({
    queryFn: getCategories,
  });

  return (
    <aside>
      <h2 className="text-lg font-bold">#Kategoriler</h2>
      <div className="flex flex-col py-2">
        {!isLoading ? (
          categories?.list?.content?.map((category) => (
            <Fragment key={category.id}>
              {category?.children?.length > 0 ? (
                <CollapsingMenu key={category.id} category={category} />
              ) : (
                <SidebarLink
                  key={category.id}
                  slug={category.slug}
                  icon={category.icon}>
                  {category.name}
                </SidebarLink>
              )}
            </Fragment>
          ))
        ) : (
          <p>Categories are loading</p>
        )}
      </div>
      <Volunteer />
    </aside>
  );
}
