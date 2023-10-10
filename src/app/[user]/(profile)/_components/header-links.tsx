'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import GetLuicideIcon from '@/lib/get-luicide-icon';

export default function HeaderLinks({ username }: { username: string }): JSX.Element {
  const pathname = usePathname();

  const HeaderLink = ({ children, path, username }: { children: React.ReactNode; path: string; username: string }) => {
    return (
      <Link
        className={`flex flex-row items-center gap-1 ${
          pathname.startsWith(`/${username}/${path}`) ? 'border-b-2' : ''
        }`}
        href={`/${username}/${path}`}
      >
        {children}
      </Link>
    );
  };

  const iconSize = 18;

  return (
    <>
      <HeaderLink path="profile" username={username}>
        <GetLuicideIcon name="user" color="black" size={iconSize} />
        Profil
      </HeaderLink>
      <HeaderLink path="followers" username={username}>
        <GetLuicideIcon name="rss" color="black" size={iconSize} />
        Takipçiler
      </HeaderLink>
      <HeaderLink path="friends" username={username}>
        <GetLuicideIcon name="users-2" color="black" size={iconSize} />
        Arkadaşlar
      </HeaderLink>
      <HeaderLink path="gallery" username={username}>
        <GetLuicideIcon name="image" color="black" size={iconSize} />
        Galeri
      </HeaderLink>
    </>
  );
}
