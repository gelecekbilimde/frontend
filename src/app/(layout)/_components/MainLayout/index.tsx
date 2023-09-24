import React from 'react';

import Header from '@/app/(layout)/header';
import LeftSideBar from '@/app/(layout)/left-sidebar';

export default function Index({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between">
      <Header />
      <div className="my-10 flex w-full flex-row justify-between">
        <div className="w-2/12">
          <LeftSideBar />
        </div>
        <main className="w-7/12">{children}</main>
        <div className="w-2/12">Right Sidebar</div>
      </div>
    </div>
  );
}
