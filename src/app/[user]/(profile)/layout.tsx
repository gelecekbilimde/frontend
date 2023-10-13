import Header from '@/app/(layout)/header';

import ProfileHeader from './_components/profile-header';
import Sidebar from './_components/sidebar';

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

export default function Layout({ params, children }: Properties) {
  // TODO: Fetch user data from API
  return (
    <div className="flex w-full max-w-screen-2xl flex-col items-center justify-between">
      <Header />
      <div className="my-10 flex w-full flex-row justify-between">
        <main className="w-10/12">
          <div className="flex w-full flex-col gap-4 py-8">
            <ProfileHeader user={user} />
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <div className="flex w-full flex-col gap-4 md:w-1/3">
                <Sidebar />
              </div>
              <div className="flex w-full flex-col gap-4 md:w-2/3">{children}</div>
            </div>
          </div>
        </main>
        <div className="w-2/12">Right Sidebar</div>
      </div>
    </div>
  );
}
