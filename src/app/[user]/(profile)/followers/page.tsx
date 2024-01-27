import Followers from './[page]/page';

export default function FollowersPage({ params }: { params: { user: string } }) {
  return <Followers params={{ user: params.user, page: '1' }} />;
}
