import Card from '../../_components/card';

interface Properties {
  follower: {
    id: number;
    name: string;
    username: string;
  };
}

export default function FollowerCard({ follower }: Properties): JSX.Element {
  return (
    <Card className="flex flex-row items-center gap-2">
      <img
        className="rounded-full border-2 border-zinc-200 md:left-20"
        src="https://picsum.photos/48"
        width={48}
        height={48}
        alt="Profil resmi"
      />
      <div className="flex flex-col">
        <h3 className="text-sm font-bold">{follower.name}</h3>
        <p className="text-sm">@{follower.username}</p>
      </div>
    </Card>
  );
}
