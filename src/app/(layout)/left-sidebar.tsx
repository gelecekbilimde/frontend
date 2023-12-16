import type { Category } from "./_components/left-sidebar/category";
import categoriesData from "./_components/left-sidebar/category-data.json";
import CollapsingMenu from "./_components/left-sidebar/collapsing-menu";
import SidebarLink from "./_components/left-sidebar/sidebar-link";

export default function LeftSideBar(): JSX.Element {
  const categories = categoriesData as Category[];

  return (
    <aside className="py-2">
      <h2 className="ps-4 text-lg font-semibold">Kategoriler</h2>
      <div className="flex flex-col py-2">
        {categories.map((category) => (
          <>
            {category.children.length > 0 ? (
              <CollapsingMenu key={category.id} category={category} />
            ) : (
              <SidebarLink
                key={category.id}
                slug={category.slug}
                icon={category.icon ?? "dot"}>
                {category.title}
              </SidebarLink>
            )}
          </>
        ))}
      </div>
    </aside>
  );
}
