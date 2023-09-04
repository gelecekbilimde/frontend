import React from 'react';
import Header from '@/app/(layout)/header';
import SideBar from '@/app/(layout)/sidebar';

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-2xl w-full flex items-center flex-col justify-between">
      <Header />
      <div className="flex justify-between w-full my-10">
        <SideBar />
        <main>{children}</main>
        <div>
            asdasdadsasdasd
        </div>
      </div>
    </div>
  );
}

