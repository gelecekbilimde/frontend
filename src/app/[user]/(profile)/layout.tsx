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
    <div className="flex w-full max-w-screen-lg flex-col gap-4 py-8">
      <ProfileHeader user={user} />
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <div className="flex w-full flex-col gap-4 md:w-1/3">
          <Sidebar />
        </div>
        <div className="flex w-full flex-col gap-4 md:w-2/3">{children}</div>
      </div>
    </div>
  );
}
