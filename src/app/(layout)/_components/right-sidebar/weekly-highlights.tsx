import { Wand } from "lucide-react";
import { Highlight } from "./highlight";
import HighlightComp from "./highlights";

const WeeklyHighlights = () => {
  const highlightData: Highlight[] = [
    {
      title: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
      username: "Ad Soyad",
      userImageUrl: "/images/avatar.png",
    },
    {
      title: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
      username: "Ad Soyad",
      userImageUrl: "/images/avatar.png",
    },
    {
      title: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
      username: "Ad Soyad",
      userImageUrl: "/images/avatar.png",
    },
    {
      title: "Moleküler İletişim: Gut Mikrobiyotası ve Beyin",
      username: "Ad Soyad",
      userImageUrl: "/images/avatar.png",
    },
  ];
  return (
    <div className="border-b border-slate-200 pb-2">
      <div className="flex items-center gap-1.5 mb-4">
        <Wand size={19} />
        <h1 className="text-sm font-bold">Haftanın öne çıkanları</h1>
      </div>
      {highlightData.map((highlight) => (
        <HighlightComp key={highlight.title} {...highlight} />
      ))}
    </div>
  );
};

export default WeeklyHighlights;
