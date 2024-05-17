import Image from "next/image";
import { Article } from "./articles";

const ArticleComp = ({ title, description, imageUrl }: Article) => {
  return (
    <div className="flex gap-2.5 mb-3">
      <Image src={imageUrl} alt={title} width={65} height={65} />
      <div className="flex flex-col gap-1.5 overflow-hidden h-16">
        <h1 className="text-sm font-medium">{title}</h1>
        <p className="text-xs text-slate-500 truncate">{description}</p>
      </div>
    </div>
  );
};

export default ArticleComp;
