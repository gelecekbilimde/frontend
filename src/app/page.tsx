import PostCard from "@/components/home/post-card";
import PostFilter from "@/components/home/post-filter";
import Carousels from "@/components/home/swiper/swiper";
import MainLayout from "@/components/layout/main-layout/index";
import { Separator } from "@/components/ui/separator";
import { defaultPostsConstants } from "@/constants/post.constants";

export default function Home(): JSX.Element {
  return (
    <MainLayout className="flex flex-col gap-y-4">
      <Carousels />
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-4">
          <Separator />
          <PostFilter />
        </div>
        {defaultPostsConstants.map((post) => (
          <PostCard key={post.postId} post={post} />
        ))}
      </div>
    </MainLayout>
  );
}
