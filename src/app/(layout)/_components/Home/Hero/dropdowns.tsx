"use client";

import { MoreHorizontal } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropAction(): JSX.Element {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="z-50 h-fit rotate-90 border-none px-1 py-0 opacity-60"
        >
          className="z-50 h-fit rotate-90 border-none px-1 py-0 opacity-60">
          <MoreHorizontal size={"18"} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="follow">
            Takibi Bırak / Takip Et
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="reporting">
            Gönderiyi Bildir
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="save">
            Gönderi Kaydet
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
