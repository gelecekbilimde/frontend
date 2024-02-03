import Participation from "./participation";
import RecentArticles from "./recent-articles";
import RecentVideos from "./recent-videos";
import WeeklyHighlights from "./weekly-highlights";

export default function RightSidebar(): JSX.Element {
  return (
    <div className="flex flex-col gap-y-5">
      {/* <Participation /> */}
      {/* <RecentVideos /> */}
      <RecentArticles />
      <WeeklyHighlights />
    </div>
  );
}
