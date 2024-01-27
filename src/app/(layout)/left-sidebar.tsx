import { Fragment } from "react";

import { categories } from "./_components/left-sidebar/category.constant";
import CollapsingMenu from "./_components/left-sidebar/collapsing-menu";
import SidebarLink from "./_components/left-sidebar/sidebar-link";
import Volunteer from "./_components/left-sidebar/volunteer";

export default function LeftSideBar(): JSX.Element {
  return (
    <aside className="py-2">
      <h2 className="ps-4 text-lg font-bold">Kategoriler</h2>
      <div className="flex flex-col py-2">
        {categories.map((category) => (
          <Fragment key={category.id}>
            {category.children.length > 0 ? (
              <CollapsingMenu key={category.id} category={category} />
            ) : (
              <SidebarLink
                key={category.id}
                slug={category.slug}
                icon={category.icon}>
                {category.title}
              </SidebarLink>
            )}
          </Fragment>
        ))}
      </div>
      <Volunteer />
    </aside>
  );
}
