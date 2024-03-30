"use client";
import { useQuery } from "@tanstack/react-query";
import { Fragment } from "react";

import { getCategories } from "./_services/get-categories";
import CollapsingMenu from "./collapsing-menu";
import Volunteer from "./volunteer";

export default function LeftSideBar(): JSX.Element {
  const { data: categories, isLoading } = useQuery({
    queryFn: getCategories,
  });
  const computedCategories = categories?.list?.content?.filter(
    (category) => category.parentId === null,
  );

  return (
    <aside>
      <h2 className="text-lg font-bold">#Kategoriler</h2>
      <div className="flex flex-col py-2">
        {/* {!isLoading ? (
          computedCategories?.map((category) => (
            <Fragment key={category.id}>
              <CollapsingMenu key={category.id} category={category} />
            </Fragment>
          ))
        ) : (
          <p>Categories are loading</p>
        )} */}
      </div>
      <Volunteer />
    </aside>
  );
}
