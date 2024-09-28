import { LayoutDashboard } from "lucide-react";

interface Topic {
  title: string;
  url: string;
}

const topics: Topic[] = [
  {
    title: "Teknoloji",
    url: "/teknoloji",
  },
  {
    title: "Bilim",
    url: "/bilim",
  },
  {
    title: "Sanat",
    url: "/sanat",
  },
  {
    title: "Eğitim",
    url: "/egitim",
  },
  {
    title: "Yapay Zeka",
    url: "/yapay-zeka",
  },
  {
    title: "Psikoloji",
    url: "/psikoloji",
  },
];

const SpecialTopics = () => {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-1.5">
        <LayoutDashboard size={18} />
        <h1 className="text-sm font-bold">Sana özel konu başlıkları</h1>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <a
            key={topic.title}
            href={topic.url}
            className="rounded-full border border-slate-300 px-4 py-1 text-xs font-medium text-slate-700">
            {topic.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SpecialTopics;
