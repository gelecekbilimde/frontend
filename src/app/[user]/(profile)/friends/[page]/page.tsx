import Link from 'next/link';

import { Button } from '@/components/ui/button';

import mock_data from '../../_assets/MOCK_DATA.json';
import FriendCard from './friend-card';

interface Properties {
  params: {
    page?: string;
    user: string;
  };
}

export default function Friends({ params }: Properties): JSX.Element {
  const currentPage = Number(params.page) ?? 1;
  const perPage = 12;

  const isPreviousDisabled = currentPage < 2;
  const isNextDisabled = mock_data.length < perPage * (currentPage + 1);

  return (
    <div>
      <div className="flex justify-between p-2 pb-4">
        <h1 className="text-2xl font-bold">Arkadaşlar</h1>
        <div>SEARCH</div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {mock_data.slice(perPage * (currentPage - 1), perPage * (currentPage - 1) + perPage).map((item) => (
          <FriendCard key={item.id} friend={item} />
        ))}
      </div>
      <div className="flex w-full justify-center gap-4 py-2">
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
