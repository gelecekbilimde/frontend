import { cx } from "class-variance-authority";
import React from "react";

import RightSidebar from "@/components/layout/right-sidebar";

import Header from "../header";
import LeftSideBar from "../left-sidebar";

export default function Index({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between px-5 lg:px-14">
      <Header />
      <div className="my-10 grid grid-cols-12 gap-x-5">
        <div className="col-span-2 hidden lg:block">
          
          <LeftSideBar />
        </div>
        <main className={cx("sm:col-span-8 md:col-span-9 lg:col-span-7 col-span-12 mr-2 lg:mx-10", className)}>{children}</main>
        <div className="col-span-4 hidden lg:col-span-3 md:col-span-3 sm:block">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
