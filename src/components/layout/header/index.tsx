"use client";

import { MenuIcon, SearchIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import ProfileDropdown from "./profile-dropdown";
import { Navigations, NavigationsVariant } from "./navigations";
import { useState } from "react";

export default function Header(): JSX.Element {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="flex h-20 w-full items-center justify-between">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={200} height={42} />
      </Link>
        
        <nav className="hidden md:block">
          <Navigations variant={NavigationsVariant.Desktop} />
        </nav>

        <div className="flex-row-reverse hidden md:flex md:flex-row gap-x-5">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
            <SearchIcon className="h-4 w-4 text-slate-600" />
          </button>
          <ProfileDropdown />
        </div>
        <div className="md:hidden flex">
          <button className="flex h-10 w-10 items-center justify-center rounded-lg border mr-2 border-slate-200 bg-slate-100">
            <SearchIcon className="h-4 w-4 text-slate-600" />
          </button>
          <button onClick={toggleDrawer} className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-100">
            <MenuIcon className="h-4 w-4 text-slate-600" />
          </button>
        </div>
      </header>
      <Drawer
        open={isDrawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="p-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex gap-x-5">
            <ProfileDropdown />
          </div>
          <Navigations variant={NavigationsVariant.Mobile} />
        </div>
      </Drawer>
    </>
  );
}