import Friends from './[page]/page';

export default function FriendsPage({ params }: { params: { user: string } }) {
  return <Friends params={{ user: params.user, page: '1' }} />;
}
