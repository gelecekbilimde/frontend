"use client";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { ArrowRight, BookmarkIcon } from "lucide-react";
import Image from "next/image";

import { Avatar, AvatarImage } from "@/components/ui/avatar";

import { type PostType } from "./post-type";

export interface IPostCardProperties {
  post: PostType;
}

const PostCard: React.FC<IPostCardProperties> = ({ post }) => {
  return (
    <div className="flex flex-row gap-x-4 rounded-lg bg-transparent">
      <Image
        src="/images/post-image.png"
        className="rounded-md"
        alt={post.header}
        width={150}
        height={150}
      />
      <div className="flex flex-col gap-y-1">
        <h2 className="text-lg text-slate-600">{post.header}</h2>
        <p className="line-clamp-3 text-xs text-slate-400">
          {post.description}
        </p>
        <div className="mt-auto flex justify-between text-center">
          <div className="flex items-center justify-center gap-x-1.5">
            <Avatar className="h-5 w-5">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="text-sm text-slate-600">{post.creator}</span>
          </div>
          <span>
            <span className="text-xs text-slate-500">
              Tahmini Okuma Süresi:{" "}
              <span className="font-bold">{post.readTime} dk</span>
            </span>
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <button className="flex items-center gap-x-1 text-sm text-slate-600">
            <BookmarkIcon className="h-4 w-4" />
            <span>Kaydet ve sonra oku</span>
          </button>
          <button className="flex items-center gap-x-3 text-sm text-slate-700">
            Tümünü Gör
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
