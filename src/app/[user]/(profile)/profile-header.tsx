import HeaderLinks from './_components/header-links';
import { type User } from './types/user';

export default function ProfileHeader({ user }: { user: User }): JSX.Element {
  return (
    <div className="flex h-[24rem] w-full flex-col items-end rounded-2xl border border-zinc-200 shadow md:h-80">
      <div
        className="flex h-[20rem] w-full items-end justify-center rounded-t-2xl border border-zinc-200 md:justify-start"
        style={{ backgroundImage: "url('https://picsum.photos/1920/320')" }}
      >
        <img
          className="relative -bottom-9 left-0 rounded-full border-2 border-white md:left-10"
          src="https://picsum.photos/128"
          width={128}
          height={128}
          alt="Profil resmi"
        />
      </div>
      <div className="flex h-40 w-full flex-col justify-center rounded-b-2xl bg-white pt-6 md:h-16 md:flex-row md:items-center md:justify-between md:pe-16 md:ps-40 md:pt-0">
        <div className="flex flex-col items-center md:flex-row md:gap-4">
          <p className="text-xl font-bold">{user.name}</p>
          <p className="text-zinc-500">@{user.username}</p>
        </div>
        <div className="flex w-auto flex-row items-center justify-evenly justify-self-end pt-4 md:justify-center md:gap-8 md:pt-0">
          <HeaderLinks username={user.username} />
        </div>
      </div>
    </div>
  );
}
