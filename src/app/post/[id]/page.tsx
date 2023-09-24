// eslint-disable-next-line import/named
import { dehydrate, Hydrate } from '@tanstack/react-query';

import getQueryClient from '@/lib/getQueryClient';

import SinglePost from './_components/single-post';
import { getPosts } from './_services/get-post';

interface Properties {
  params: {
    id: number;
  };
}

export default async function Post({ params }: Properties): Promise<JSX.Element> {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(['posts', params.id], async () => await getPosts(params.id));
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SinglePost id={params.id} />
    </Hydrate>
  );
}
