import Image from "next/image";

import { type User } from "./user";

const UserButton = () => {
  const userData: User = {
    name: "Ad Soyad",
    username: "adsoyad",
    imageUrl: "",
  };
  return (
    <div className="flex items-center gap-2">
      <Image
        className="rounded-full"
        src={userData.imageUrl}
        alt={userData.name}
        width={50}
        height={50}
      />
      <div className="flex flex-col items-start">
        <p className="text-base font-semibold">{userData.name}</p>
        <p className="text-xs font-medium text-slate-500">
          {userData.username}
        </p>
      </div>
    </div>
  );
};

export default UserButton;
