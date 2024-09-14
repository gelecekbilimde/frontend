import { Newspaper } from "lucide-react";

import ArticleComp from "./article";
import { type Article } from "./articles";

const RecentArticles = () => {
  const articleData: Article[] = [
    {
      title: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
      description:
        "İnsan vücudu; endokrin sistem, bağışıklık sistemi ve merkezî sinir sistemi üzerine son derece önemli işlevleri bulunan milyonlarca minik canlıya ev sahipliği yapmaktadır. Bu canlıların ürettiği biyolojik moleküller duygu durumu, ruh hâli (mood), davranış, öğrenme",
      imageUrl: "/images/hero_ımage.jpg",
    },
    {
      title: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
      description:
        "İnsan vücudu; endokrin sistem, bağışıklık sistemi ve merkezî sinir sistemi üzerine son derece önemli işlevleri bulunan milyonlarca minik canlıya ev sahipliği yapmaktadır. Bu canlıların ürettiği biyolojik moleküller duygu durumu, ruh hâli (mood), davranış, öğrenme",
      imageUrl: "/images/hero_ımage.jpg",
    },
    {
      title: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
      description:
        "İnsan vücudu; endokrin sistem, bağışıklık sistemi ve merkezî sinir sistemi üzerine son derece önemli işlevleri bulunan milyonlarca minik canlıya ev sahipliği yapmaktadır. Bu canlıların ürettiği biyolojik moleküller duygu durumu, ruh hâli (mood), davranış, öğrenme",
      imageUrl: "/images/hero_ımage.jpg",
    },
  ];
  return (
    <div className="border-b border-slate-200">
      <div className="mb-6 flex items-center gap-1.5">
        <Newspaper size={19} />
        <h1 className="text-base font-bold">Son Yayınlananlar</h1>
      </div>
      {articleData.map((article) => (
        <ArticleComp key={article.title} {...article} />
      ))}
    </div>
  );
};

export default RecentArticles;
