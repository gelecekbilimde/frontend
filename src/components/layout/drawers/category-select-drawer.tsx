import "react-modern-drawer/dist/index.css";

import { Icon } from "@iconify/react/dist/iconify.js";
import { type ReactNode, useState } from "react";
import Drawer from "react-modern-drawer";

import LeftSideBar from "../left-sidebar";

export default function CategorySelectDrawer(): ReactNode {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = (): void => {
    setIsOpen((previousState) => !previousState);
  };
  return (
    <div className="lg:hidden">
      <button
        onClick={toggleDrawer}
        className="flex items-center justify-center bg-inherit hover:bg-inherit">
        <Icon
          icon="iconamoon:category-light"
          fontSize={24}
          className="text-slate-600"
        />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="p-6">
        <Icon
          icon="material-symbols:close-rounded"
          fontSize={24}
          className="mb-3 ms-auto cursor-pointer"
          color="black"
          onClick={toggleDrawer}
        />
        <LeftSideBar />
      </Drawer>
    </div>
  );
}
