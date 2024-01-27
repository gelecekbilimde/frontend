import { LogOut, Moon, Pencil, Settings, User } from "lucide-react";
import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center justify-center gap-x-2">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage src="/images/avatar.png" alt="@user" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="pt-0.5 font-bold leading-4">Ad Soyad</span>
            <span className="text-xs text-slate-400">@uid4679512441</span>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <Link href={""}>
          <DropdownMenuItem className="gap-2">
            <User size={16} /> Profilim
          </DropdownMenuItem>
        </Link>
        <Link href={""}>
          <DropdownMenuItem className="gap-2">
            <Pencil size={16} /> Yazılarım
          </DropdownMenuItem>
        </Link>
        <Link href={""}>
          <DropdownMenuItem className="gap-2">
            <Settings size={16} /> Ayarlar
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />

        <DropdownMenuItem className="justify-between">
          <div className="flex items-center gap-2">
            <Moon size={16} /> Koyu Mod
          </div>
          <Switch />
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <Link href={""}>
          <DropdownMenuItem className="gap-2">
            <LogOut size={16} /> Çıkış Yap
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileDropdown;
