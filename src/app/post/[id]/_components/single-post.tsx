'use client';

import { useQuery } from '@tanstack/react-query';

import { getPosts } from '../_services/get-post';

export default function SinglePost({ id }: { id: number }): JSX.Element {
  const key = ['posts', id];

  const { data: post } = useQuery({ queryKey: key, queryFn: async () => await getPosts(id) });

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
