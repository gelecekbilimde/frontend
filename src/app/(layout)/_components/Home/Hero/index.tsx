import HeroLayout from './HeroLayout';
import HeroComponent from './HeroComponent';

export default function Index(): JSX.Element {
  // href={`/${data.username}/status/${data.postID}`}
  return (
    <HeroLayout>
      <div className="flex flex-col gap-4 px-4">
        <HeroComponent />
        <HeroComponent />
        <HeroComponent />
      </div>
    </HeroLayout>
  );
}
