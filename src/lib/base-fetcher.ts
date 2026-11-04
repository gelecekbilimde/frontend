/**
 * Backend'in tüm başarılı yanıtları bu yapıda döner (SuccessResponse).
 */
export interface BaseResponse<T> {
  time: string;
  code: string;
  isSuccess: boolean;
  result: T;
}

export const getApiUrl = (path: string): string =>
  (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/+$/, "") + path;

export const baseFetcher = async <T = null>(
  path: string,
  init?: RequestInit,
): Promise<BaseResponse<T>> => {
  const response = await fetch(getApiUrl(path), init);
  if (!response.ok) {
    throw new Error(`İstek başarısız: ${response.status} ${path}`);
  }
  return (await response.json()) as BaseResponse<T>;
};
