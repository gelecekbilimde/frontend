import PostCard from "@/components/home/post-card";
import Carousels from "@/components/home/swiper/swiper";
import MainLayout from "@/components/layout/main-layout/index";

export default function Home(): JSX.Element {
  return (
    <MainLayout className="flex flex-col gap-y-6">
      <Carousels />
      <div className="flex flex-col gap-y-7">
        <PostCard
          post={{
            postId: "1",
            header: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
            description:
              "İnsan vücudu; endokrin sistem, bağışıklık sistemi ve merkezî sinir sistemi üzerine son derece önemli işlevleri bulunan milyonlarca minik canlıya ev sahipliği yapmaktadır. Bu canlıların ürettiği biyolojik moleküller duygu durumu, ruh hâli (mood), davranış, öğrenme.",
            slug: "molekuler-iletisim-gut-mikrobiyotasi-ve-beyin",
            lastProcess: "2021-09-27T00:00:00.000Z",
            category: "Bilim",
            bredcrump: "Bilim",
            likeCount: 0,
            liked: false,
            active: true,
            editorList: false,
            createdAt: "2021-09-27T00:00:00.000Z",
            editor: "Ali Osman Delişmen",
            creator: "Ali Osman Delişmen",
            readTime: "3",
            cover: "/images/post-image.png",
            label: {
              labelId: "1",
              label: "Bilim",
            },
            likeDate: "2021-09-27T00:00:00.000Z",
            view: 10,
          }}
        />
        <PostCard
          post={{
            postId: "2",
            header: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
            description:
              "İnsan vücudu; endokrin sistem, bağışıklık sistemi ve merkezî sinir sistemi üzerine son derece önemli işlevleri bulunan milyonlarca minik canlıya ev sahipliği yapmaktadır. Bu canlıların ürettiği biyolojik moleküller duygu durumu, ruh hâli (mood), davranış, öğrenme.",
            slug: "molekuler-iletisim-gut-mikrobiyotasi-ve-beyin",
            lastProcess: "2021-09-27T00:00:00.000Z",
            category: "Bilim",
            bredcrump: "Bilim",
            likeCount: 0,
            liked: false,
            active: true,
            editorList: false,
            createdAt: "2021-09-27T00:00:00.000Z",
            editor: "Ali Osman Delişmen",
            creator: "Ali Osman Delişmen",
            readTime: "3",
            cover: "/images/post-image.png",
            label: {
              labelId: "1",
              label: "Bilim",
            },
            likeDate: "2021-09-27T00:00:00.000Z",
            view: 10,
          }}
        />
      </div>
    </MainLayout>
  );
}
