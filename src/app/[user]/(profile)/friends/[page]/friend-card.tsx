"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MoreHorizontal,
  Twitter,
} from "lucide-react";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import GetLuicideIcon from "@/components/ui/icon";

import Card from "../../_components/card";
import type { User } from "../../_types/user";

interface Properties {
  friend: User;
}

export default function FriendCard({
  friend: { name, title, socials },
}: Properties): JSX.Element {
  return (
    <Card col className="gap-2">
      <div className="flex w-full justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal name="more-horizontal" color="black" size={16} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="gap-1 font-medium text-red-600 hover:text-red-800">
              <GetLuicideIcon name="trash-2" />
              Delete
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-1 font-medium">
              <GetLuicideIcon name="pencil" />
              Edit
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex flex-col items-center justify-center gap-4 pb-8">
        <img
          className="rounded-full border-2 border-zinc-200 shadow md:left-20"
          src="https://picsum.photos/48"
          width={64}
          height={64}
          alt="Profil resmi"
        />
        <div className="flex flex-col gap-1 text-center">
          <p className="text-lg font-medium">{name}</p>
          <p className="text-sm text-zinc-500">{title}</p>
        </div>
        <div className="flex flex-row gap-4">
          <Link
            className="hover:opacity-80"
            href={`https://facebook.com/${socials}`}>
            <Facebook size={22} color="#2277f2" />
          </Link>
          <Link
            className="hover:opacity-80"
            href={`https://instagram.com/${socials}`}>
            <Instagram size={22} color="#e1306c" />
          </Link>
          <Link
            className="hover:opacity-80"
            href={`https://linkedin.com/in/${socials}`}>
            <Linkedin size={22} color="#0a66c2" />
          </Link>
          <Link
            className="hover:opacity-80"
            href={`https://twitter.com/${socials}`}>
            <Twitter size={22} color="#1da1f2" />
          </Link>
        </div>
      </div>
    </Card>
  );
}
