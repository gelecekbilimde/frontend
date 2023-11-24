import Participation from './participation';
import RecentVideos from './recent-videos';

export default function RightSidebar(): JSX.Element {
  return (
    <div className="flex flex-col gap-y-5">
      <Participation />
      <RecentVideos />
    </div>
  );
}

