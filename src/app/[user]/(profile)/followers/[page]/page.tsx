import Link from 'next/link';

import { Button } from '@/components/ui/button';

import mock_data from '../../_assets/MOCK_DATA.json';
import FollowerCard from './follower-card';

interface Properties {
  params: {
    page?: string;
    user: string;
  };
}

export default function Followers({ params }: Properties): JSX.Element {
  const currentPage = Number(params.page) ?? 1;
  const perPage = 12;

  const isPreviousDisabled = currentPage < 2;
  const isNextDisabled = mock_data.length < perPage * (currentPage + 1);

  return (
    <div>
      <h1 className="p-2 pb-4 text-2xl font-bold">Takipçiler</h1>
      <div className="grid grid-cols-2 gap-4">
        {mock_data.slice(perPage * (currentPage - 1), perPage * (currentPage - 1) + perPage).map((item) => (
          <FollowerCard key={item.id} follower={item} />
        ))}
      </div>
      <div className="flex w-full justify-center gap-4 pt-4">
        <Link
          className={isPreviousDisabled ? 'pointer-events-none' : ''}
          href={isPreviousDisabled ? '#' : `/${params.user}/followers/${currentPage - 1}`}
        >
          <Button disabled={currentPage < 2}>Önceki Sayfa</Button>
        </Link>
        <Link
          className={isNextDisabled ? 'pointer-events-none' : ''}
          href={isNextDisabled ? '#' : `/${params.user}/followers/${currentPage + 1}`}
        >
          <Button disabled={isNextDisabled}>Sonraki Sayfa</Button>
        </Link>
      </div>
    </div>
  );
}
