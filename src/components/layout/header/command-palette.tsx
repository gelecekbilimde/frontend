"use client";
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import {
  type Command,
  CommandMenu,
  CommandWrapper,
  type InnerCommand,
  useCommands,
  useKmenu,
} from "kmenu";
import { Instagram, Search, Twitter, Youtube } from "lucide-react";
import { useRouter } from "next/navigation";
import { type FC, useMemo } from "react";

import { defaultPostsConstants } from "../../../constants/post.constants.ts";

const CommandPalette: FC = () => {
  const { setOpen, open } = useKmenu();
  const router = useRouter();

  // kmenu yazılan metne göre listeyi kendisi filtreler; burada tüm gönderileri komut olarak veriyoruz.
  const postSearchResults = useMemo<InnerCommand[]>(
    () =>
      defaultPostsConstants.map((post) => ({
        icon: <Search />,
        text: post.header,
        perform: () => {
          router.push(`/article/${post.slug}`);
        },
      })),
    [router],
  );

  const main: Command[] = [
    {
      category: "Search",
      commands: [
        {
          icon: <Search />,
          text: "Search",
          perform: () => {
            setOpen(2);
          },
        },
      ],
    },
    {
      category: "Social",
      commands: [
        {
          icon: <Twitter />,
          text: "Twitter",
          perform: () => window.open('https://x.com/gelecekbilimde', '_blank'),
        },
        {
          icon: <Instagram />,
          text: "Instagram",
          perform: () => window.open('https://www.instagram.com/gelecekbilimde/', '_blank'),
        },
        {
          icon: <Youtube />,
          text: "Youtube",
          perform: () => window.open('https://www.youtube.com/gelecekbilimde', '_blank'),
        },
      ],
    },
  ];

  const posts: Command[] = [
    {
      category: "Posts",
      commands: postSearchResults,
    },
  ];

  const [mainCommands] = useCommands(main);
  const [postsCommands] = useCommands(posts);

  return (
    <CommandWrapper>
      <CommandMenu commands={mainCommands} crumbs={["Home"]} index={open} />
      <CommandMenu
        commands={postsCommands}
        crumbs={["Home", "Posts"]}
        index={2}
      />
    </CommandWrapper>
  );
};

export default CommandPalette;
