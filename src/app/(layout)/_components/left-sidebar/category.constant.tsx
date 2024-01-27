import { FlaskConical, ScrollText } from "lucide-react";

import { type Category } from "./category";

export const categories: Category[] = [
  {
    id: 1,
    order: 0,
    title: "Bilim",
    slug: "bilim",
    icon: <FlaskConical color="black" size={16} />,
    children: [
      {
        id: 100,
        order: 0,
        title: "Fizik",
        slug: "fizik",
        children: [],
      },
      {
        id: 101,
        order: 1,
        title: "Biyoloji",
        slug: "biyoloji",
        children: [],
      },
      {
        id: 102,
        order: 2,
        title: "Kimya",
        slug: "kimya",
        children: [],
      },
    ],
  },
  {
    id: 2,
    order: 1,
    title: "Teknoloji",
    slug: "teknoloji",
    children: [],
  },
  {
    id: 3,
    order: 2,
    title: "Felsefe",
    slug: "felsefe",
    icon: <ScrollText color="black" size={16} />,
    children: [
      {
        id: 300,
        order: 0,
        title: "Epistemoloji",
        slug: "epistemoloji",
        children: [],
      },
      {
        id: 301,
        order: 1,
        title: "Ontoloji",
        slug: "ontoloji",
        children: [],
      },
      {
        id: 302,
        order: 2,
        title: "Ahlak Felsefesi",
        slug: "ahlak-felsefesi",
        children: [],
      },
    ],
  },
];
