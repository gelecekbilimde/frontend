export interface SwiperData {
  title: string;
  categories: string[];
  imageUrl: string;
  readTime: number;
}

export const swiperData: SwiperData[] = [
  {
    title: "Albert Einstein Hakkında Bilinmeyen 10...",
    categories: ["Fizik"],
    imageUrl: "/images/carousels/carousel_banner_1.png",
    readTime: 5,
  },
  {
    title: "Kuantum Mekaniğinin Günlük Hayata Etkileri",
    categories: ["Fizik"],
    imageUrl: "/images/carousels/carousel_banner_1.png",
    readTime: 10,
  },
  {
    title: "Sürdürülebilir Enerji ve Geleceği",
    categories: ["Çevre"],
    imageUrl: "/images/carousels/carousel_banner_1.png",
    readTime: 8,
  },
  {
    title: "Evrenin Sırlarına Yolculuk: Kara Delikler",
    categories: ["Fizik"],
    imageUrl: "/images/carousels/carousel_banner_1.png",
    readTime: 7,
  },
  {
    title: "Kripto Paralar ve Geleceği",
    categories: ["Borsa"],
    imageUrl: "/images/carousels/carousel_banner_1.png",
    readTime: 6,
  },
];
