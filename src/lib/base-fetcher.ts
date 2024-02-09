export interface BaseResponse<T> {
  responseCode: string;
  timestamp: string;
  list: T;
}

export const baseFetcher = async <T = null>(
  path: string,
): Promise<BaseResponse<T>> => {
  const response = await fetch(
    (process.env.NEXT_PUBLIC_API_URL as string) + path,
  );
  return await response.json();
};
