import Image from "next/image";

import { type Article } from "./articles";

const ArticleComp = ({ title, description, imageUrl }: Article) => {
  return (
    <div className="mb-3 flex gap-2.5">
      <Image
        src={imageUrl}
        alt={title}
        width={65}
        height={65}
        className="rounded-sm"
      />
      <div className="flex h-16 flex-col gap-1.5 overflow-hidden">
        <h1 className="text-sm font-medium">{title}</h1>
        <p className="truncate text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default ArticleComp;
