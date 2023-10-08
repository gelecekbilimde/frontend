import Link from 'next/link';

import { Button } from '@/components/ui/button';

import mock_data from './_assets/MOCK_DATA.json';
import FollowerCard from './_component/follower-card';

interface Properties {
  params: {
    page?: string;
    user: string;
  };
}

export default function Followers({ params }: Properties): JSX.Element {
  const currentPage = Number(params.page) ?? 1;
  const perPage = 12;

  return (
    <div>
      <h1 className="py-2 ps-4 text-2xl font-bold">Followers</h1>
      <div className="flex flex-row flex-wrap">
        {mock_data.slice(perPage * (currentPage - 1), perPage * (currentPage - 1) + perPage).map((item) => (
          <FollowerCard key={item.id} follower={item} />
        ))}
      </div>
    </div>
  );
}
