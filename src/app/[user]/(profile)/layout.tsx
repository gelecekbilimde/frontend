import { Suspense } from "react";

import Header from "@/app/(layout)/header";

import mockData from "./_assets/MOCK_DATA.json";
import ProfileSidebar from "./_components/sidebar";
import Loading from "./loading";
import ProfileHeader from "./profile-header";

interface Properties {
  params: {
    user: string;
  };
  children: React.ReactNode;
}

const user = mockData[0];

export default function Layout({ children }: Properties): JSX.Element {
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
                <ProfileSidebar user={user} />
              </div>
              <div className="col-span-3 flex flex-col gap-4 md:col-span-2">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </div>
            </div>
          </div>
        </main>
        <div className="col-span-1 hidden md:flex md:flex-col">
          Right Sidebar
        </div>
      </div>
    </div>
  );
}
