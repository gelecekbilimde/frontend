import { cx } from "class-variance-authority";
import React from "react";

import RightSidebar from "@/components/layout/right-sidebar";

import Header from "../header";

export default function Index({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between px-14">
      <Header />
      <div className="my-10 grid grid-cols-12 gap-x-5">
        <div className="col-span-2">
          Sidebar
          {/* <LeftSideBar /> */}
        </div>
        <main className={cx("col-span-8 mx-10", className)}>{children}</main>
        <div className="col-span-2">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
