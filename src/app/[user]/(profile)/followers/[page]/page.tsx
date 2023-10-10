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
      <h1 className="py-2 ps-4 text-2xl font-bold">Followers</h1>
      <div className="flex flex-row flex-wrap">
        {mock_data.slice(perPage * (currentPage - 1), perPage * (currentPage - 1) + perPage).map((item) => (
          <div key={item.id} className="w-6/12 p-2">
            <FollowerCard follower={item} />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-4 py-2">
        <Link
          className={isPreviousDisabled ? 'pointer-events-none' : ''}
          href={isPreviousDisabled ? '#' : `/${params.user}/followers/${currentPage - 1}`}
        >
          <Button disabled={currentPage < 2}>Previous</Button>
        </Link>
        <Link
          className={isNextDisabled ? 'pointer-events-none' : ''}
          href={isNextDisabled ? '#' : `/${params.user}/followers/${currentPage + 1}`}
        >
          <Button disabled={isNextDisabled}>Next</Button>
        </Link>
      </div>
    </div>
  );
}
