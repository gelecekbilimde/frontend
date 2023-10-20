import { Suspense } from 'react';

import Header from '@/app/(layout)/header';

import ProfileHeader from './_components/profile-header';
import Sidebar from './_components/sidebar';
import Loading from './loading';

interface Properties {
  params: {
    user: string;
  };
  children: React.ReactNode;
}

const user = {
  name: 'John Doe',
  username: 'johndoe',
  image: 'https://picsum.photos/128',
};

export default function Layout({ children }: Properties) {
  // TODO: Fetch user data from API
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between">
      <Header />
      <div className="my-10 grid w-full grid-cols-6 flex-row justify-between gap-2">
        <main className="col-span-6 md:col-span-5">
          <div className="flex w-full flex-col gap-4">
            <ProfileHeader user={user} />
            <div className="grid w-full grid-cols-3 gap-4">
              <div className="col-span-3 flex flex-col gap-4 md:col-span-1">
                <Sidebar />
              </div>
              <div className="col-span-3 flex flex-col gap-4 md:col-span-2">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
            </div>
          </div>
        </main>
        <div className="col-span-1 hidden md:flex md:flex-col">Right Sidebar</div>
      </div>
    </div>
  );
}
