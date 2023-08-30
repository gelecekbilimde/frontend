import type { PostResponse } from '../_types/post-response';

export const getPosts: (id: number | string) => Promise<PostResponse> = async (id: number | string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  return data;
};
