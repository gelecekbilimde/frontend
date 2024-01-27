import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { User, Pencil, Settings, Moon, LogOut } from "lucide-react";
import Link from "next/link";
import UserButton from "./user-button";

const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserButton />
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
