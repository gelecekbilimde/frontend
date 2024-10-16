"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
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

import MainLayout from "@/components/layout/main-layout/index";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { defaultPostsConstants } from "@/constants/post.constants";
import { MemoizedMarkdown } from "@/components/article/markdown";
import { Icon } from "@iconify/react/dist/iconify.js";
import { References } from "@/components/article/reference";

const PostDetailPage = (): JSX.Element => {
  const { data, isLoading } = useQuery({
    queryKey: ["postDetailData"],
    queryFn: () => {
      return defaultPostsConstants.find((post) => post.slug === slug);
    },
  });

  const parameters = useParams();
  const slug = parameters.slug as string;

  const shareUrl = `https://gelecekbilimde.net/${slug}`;
  const [like, setLike] = useState(false);

  const handleLike = (): void => {
    setLike((prev) => !prev);
  };

  if (!data || isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <MainLayout>
      <div className="relative size-full h-[400px] rounded-md object-cover">
        <Image
          src={data?.cover}
          alt={data?.header}
          className="rounded-md"
          fill
        />
        <div className="absolute bottom-0 h-1/3 w-full p-4">
          <div className="flex gap-3">
            <Badge className="bg-green-600 hover:bg-green-600">
              {data?.category}
            </Badge>
            {Boolean(data?.editorList) && (
              <Badge className="bg-violet-700 hover:bg-violet-700">
                Editör Seçimi
              </Badge>
            )}
          </div>
          <h1 className="py-3 text-2xl font-bold text-white">{data?.header}</h1>
          <p className="text-xs text-slate-300">
            {data?.createdAt} - Ortalama{" "}
            <span className="font-semibold">{data?.readTime}</span> okuma süresi
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex items-center gap-3">
          <Avatar className="border-primary size-10 border-2">
            <AvatarImage src="/images/avatar.png" alt="@user" />
            <AvatarFallback value="US" />
          </Avatar>
          <div className="flex flex-col">
            <span className="pt-0.5 text-base font-bold leading-5">
              Ad Soyad
            </span>
            <span className="text-xs text-slate-400">Bilimsever</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            className="flex size-8 items-center justify-center rounded-md bg-red-500"
            onClick={handleLike}>
            <Icon
              icon="ri:heart-fill"
              color={like ? "#EF4444" : "white"}
              stroke={like ? "white" : "#EF4444"}
              strokeWidth={2}
              height={19}
            />
          </button>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex size-8 items-center justify-center rounded-md bg-green-500">
                <Icon icon="lucide:share-2" color="white" height={16} />
              </button>
            </PopoverTrigger>
            <PopoverContent side="top" className="flex w-52 gap-1">
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
          <div className="flex items-center gap-2 text-slate-500">
            <Icon icon="lucide:eye" height={16} />
            <span className="text-xs">
              <span className="font-bold">{data?.view}</span> görüntüleme
            </span>
          </div>
        </div>
      </div>
      <section className="border-b-2 border-black/20 pb-2 pt-3 text-sm">
        <p>
          <span className="font-bold">Yazan: </span>
          {data?.creator}
        </p>
        <p>
          <span className="font-bold">Düzenleyen: </span>
          {data?.editor}
        </p>
      </section>
      <section className="pb-5 pt-2 text-justify">
        <span className="font-bold">Özet: </span>
        {data?.description}
      </section>
      <MemoizedMarkdown content={data?.content} />
      <div className="mt-6">
        <div className="bg-black text-white text-sm inline-flex items-center gap-1 px-2 py-1 rounded-sm">
          <Icon icon="fa:chain"/> Kaynak
        </div>
        {data.references.map((reference)=>(<References key={reference.title} references={reference}/>))}
      </div>
    </MainLayout>
  );
};

export default PostDetailPage;
