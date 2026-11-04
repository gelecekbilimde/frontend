// eslint-disable-next-line import/named
import { dehydrate, Hydrate } from "@tanstack/react-query";

import getQueryClient from "@/lib/getQueryClient";

import SinglePost from "./_components/single-post";
import { getPosts } from "./_services/get-post";

interface Properties {
  // Next.js 15'te dinamik rota parametreleri Promise olarak gelir
  params: Promise<{
    id: string;
  }>;
}

export default async function Post({
  params,
}: Properties): Promise<JSX.Element> {
  const id = Number((await params).id);
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    ["posts", id],
    async () => await getPosts(id),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <SinglePost id={id} />
    </Hydrate>
  );
}
