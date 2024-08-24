import { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import LeftSideBar from "../left-sidebar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@/components/ui/button";

export default function CategorySelectDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div className="lg:hidden">
      <Button onClick={toggleDrawer} className="bg-inherit hover:bg-inherit">
        <Icon
          icon="material-symbols:menu-rounded"
          fontSize={24}
          color="black"
        />
      </Button>
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
