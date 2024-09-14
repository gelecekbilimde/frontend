"use client";
import { ArrowRight, BookmarkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { type PostDetail } from "@/constants/post.constants";

export interface IPostCardProperties {
  post: PostDetail;
}

const PostCard: React.FC<IPostCardProperties> = ({ post }) => {
  const avatarFallback = useMemo(() => {
    return post.creator
      .split(" ")
      .map((char) => char[0])
      .join("")
      .slice(0, 2);
  }, [post.creator]);

  return (
    <div className="flex flex-col gap-y-4 rounded-md bg-transparent md:flex-row md:gap-x-4">
      <div className="relative h-40 w-full md:min-h-40 md:min-w-40 md:max-w-40">
        <Image
          src="/images/post-image.png"
          className="rounded-md"
          alt={post.header}
          fill
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <h2 className="text-lg text-slate-600">{post.header}</h2>
        <p className="line-clamp-3 text-sm text-slate-400">
          {post.content.slice(0, 200)}
        </p>
        <div className="mt-auto flex flex-col gap-y-1.5">
          <div className="mt-auto flex flex-row justify-between text-center md:mt-0">
            <div className="flex items-center justify-center gap-x-1.5">
              <Avatar className="!size-5 rounded-md">
                <AvatarFallback size={20} radius={10} value={avatarFallback} />
              </Avatar>
              <span className="text-sm text-slate-600">{post.creator}</span>
            </div>
            <div className="flex items-center gap-x-1.5">
              <span className="text-xs text-slate-500">
                Tahmini Okuma Süresi:{" "}
                <span className="font-bold">{post.readTime} dk</span>
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between gap-y-2 md:flex md:gap-y-0">
            <button className="flex items-center gap-x-1 text-sm text-slate-600">
              <BookmarkIcon className="size-4" />
              <span>Kaydet ve sonra oku</span>
            </button>
            <Link
              href={`/article/${post.slug}`}
              className="group flex items-center gap-x-2 text-sm text-slate-700 transition-all duration-300 hover:text-slate-500">
              Tümünü Gör
              <ArrowRight className="size-4 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-500" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
