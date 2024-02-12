import React from "react";

import RightSidebar from "@/components/layout/right-sidebar";

import Header from "../header";
import LeftSideBar from "../left-sidebar";

export default function Index({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between px-10">
      <Header />
      <div className="my-10 grid grid-cols-12 gap-x-5">
        <div className="col-span-2">
          <LeftSideBar />
        </div>
        <main className="col-span-8">{children}</main>
        <div className="col-span-2">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
