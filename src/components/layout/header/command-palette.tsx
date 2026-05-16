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
import { Github, Instagram, Search, Twitter, Youtube } from "lucide-react";
import { type FC, useState } from "react";

import { defaultPostsConstants } from "../../../constants/post.constants.ts";

const CommandPalette: FC = () => {
  const [postSearchResults, setPostSearchResults] = useState<InnerCommand[]>(
    [],
  );
  const { setOpen, open } = useKmenu();

  const getPostsWithQuery = (query?: string): InnerCommand[] => {

    const filteredPosts = defaultPostsConstants.filter(
      (defaultPostsConstant) =>
        defaultPostsConstant.header
          .toLowerCase()
          .includes(query?.toLowerCase() ?? "") ||
        defaultPostsConstant.content
          .toLowerCase()
          .includes(query?.toLowerCase() ?? ""),
    );
    const commands = filteredPosts.map((post) => ({
      icon: <Search />,
      text: post.header,
      perform: () => {
        // handleSearch(post.header);
      },
    }));
    setPostSearchResults(commands);
    return commands;
  };

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
