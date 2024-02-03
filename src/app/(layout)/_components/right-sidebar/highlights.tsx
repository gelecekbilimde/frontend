import { Highlight } from "./highlight";
import Image from "next/image";

const HighlightComp = ({ title, username, userImageUrl }: Highlight) => {
  return (
    <div className="flex flex-col gap-1 mb-3.5">
      <h1 className="text-xs font-semibold truncate">{title}</h1>
      <div className="flex items-center gap-1.5 font-medium text-[10px]">
        <p className="text-slate-500">Yazan:</p>
        <Image
          className="rounded-full"
          src={userImageUrl}
          alt={username}
          width={14}
          height={14}
        />
        <p className="text-slate-400">{username}</p>
      </div>
    </div>
  );
};

export default HighlightComp;
