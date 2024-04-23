"use client";
import { postDetailData } from "./post-detail.constants";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Eye, Heart, Share2 } from "lucide-react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterShareButton,
  XIcon,
} from "react-share";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from "../../../components/ui/badge";
import { useState } from "react";

const Post = () => {
  const shareUrl = `https://gelecekbilimde.net/${postDetailData.slug}`;
  const [like, setLike] = useState(false);
  const handleClick = () => {like ? setLike(false) : setLike(true)};
  return (
    <div>
      <div
        className="h-96 w-full object-cover rounded-md relative"
        style={{
          backgroundImage: `url("${postDetailData.imageUrl}")`,
          backgroundSize: "cover",
        }}>
        <div className="h-1/3 px-10 py-4 absolute w-full bottom-0 backdrop-blur">
          <div className="flex gap-3">
            <Badge className="bg-green-600 hover:bg-green-600">
              {postDetailData.category}
            </Badge>
            {postDetailData.editorList && (
              <Badge className="bg-violet-700 hover:bg-violet-700">
                Editör Seçimi
              </Badge>
            )}
          </div>
          <h1 className="font-bold text-2xl text-white py-3">
            {postDetailData.header}
          </h1>
          <p className="text-slate-300 text-xs">
            {postDetailData.createdAt} - Ortalama{" "}
            <span className="font-semibold">{postDetailData.readTime}</span>{" "}
            okuma süresi
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src="/images/avatar.png" alt="@user" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="pt-0.5 font-bold leading-5 text-base">
              Ad Soyad
            </span>
            <span className="text-xs text-slate-400">Bilimsever</span>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <button className="bg-red-500 h-8 w-8 flex items-center justify-center rounded-md" onClick={handleClick}>
            <Heart color="white" fill={like ? "white" : "#EF4444"} size={19} />
          </button>
          <Popover>
            <PopoverTrigger>
              <button className="bg-green-500 h-8 w-8 flex items-center justify-center rounded-md">
                <Share2 color="white" size={16} />
              </button>
            </PopoverTrigger>
            <PopoverContent side="top" className="flex gap-1 w-52">
              <FacebookShareButton url={shareUrl}>
                <FacebookIcon size={32} />
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl}>
                <XIcon size={32} />
              </TwitterShareButton>
              <RedditShareButton url={shareUrl}>
                <RedditIcon size={32} />
              </RedditShareButton>
              <LinkedinShareButton url={shareUrl}>
                <LinkedinIcon size={32} />
              </LinkedinShareButton>
              <EmailShareButton url={shareUrl}>
                <EmailIcon size={32} />
              </EmailShareButton>
            </PopoverContent>
          </Popover>
          <div className="text-slate-500 flex gap-2 items-center">
            <Eye size={16} />
            <span className="text-xs">
              <span className="font-bold">{postDetailData.view}</span>{" "}
              görüntüleme
            </span>
          </div>
        </div>
      </div>
      <section className="text-sm border-b-2 border-black/20 pt-3 pb-2">
        <p>
          <span className="font-bold">Yazan: </span>
          {postDetailData.creator}
        </p>
        <p>
          <span className="font-bold">Düzenleyen: </span>
          {postDetailData.editor}
        </p>
      </section>
      <section className="pt-2 pb-5 text-justify">
        <span className="font-bold">Özet: </span>
        {postDetailData.description}
      </section>
      <article className="text-justify">{postDetailData.content}</article>
    </div>
  );
};

export default Post;
