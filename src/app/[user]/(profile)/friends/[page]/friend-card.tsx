'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import GetLuicideIcon from '@/lib/get-luicide-icon';

import Card from '../../_components/card';

interface Properties {
  friend: {
    id: number;
    name: string;
    username: string;
    title: string;
  };
}

export default function FriendCard({ friend }: Properties): JSX.Element {
  return (
    <Card col className="gap-2">
      <div className="flex w-full justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <GetLuicideIcon name="more-horizontal" color="black" size={16} />
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
          <p className="text-lg font-medium">{friend.name}</p>
          <p className="text-sm text-zinc-500">{friend.title}</p>
        </div>
        <div className="flex flex-row gap-4">
          <Facebook size={22} className="text-[#2277f2] hover:opacity-80" />
          <Instagram size={22} className="text-[#e1306c] hover:opacity-80" />
          <Linkedin size={22} className="text-[#0a66c2] hover:opacity-80" />
          <Twitter size={22} className="text-[#1da1f2] hover:opacity-80" />
        </div>
      </div>
    </Card>
  );
}
