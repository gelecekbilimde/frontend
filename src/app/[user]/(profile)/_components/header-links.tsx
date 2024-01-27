'use client';

import { ListIcon, RssIcon, UserIcon, Users2Icon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderLinks({ username }: { username: string }): JSX.Element {
  const pathname = usePathname();

  const HeaderLink = ({
    children,
    path,
    username,
  }: {
    children: React.ReactNode;
    path: string;
    username: string;
  }): JSX.Element => {
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
        <UserIcon color="black" size={iconSize} />
        Profil
      </HeaderLink>
      <HeaderLink path="followers" username={username}>
        <RssIcon color="black" size={iconSize} />
        Takipçiler
      </HeaderLink>
      <HeaderLink path="friends" username={username}>
        <Users2Icon color="black" size={iconSize} />
        Arkadaşlar
      </HeaderLink>
      <HeaderLink path="gallery" username={username}>
        <ListIcon color="black" size={iconSize} />
        Listeler
      </HeaderLink>
    </>
  );
}
