import { ApiError } from "./error";

interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

const apiUrl = process.env.NEXT_PUBLIC_LOCAL_HOST_API_URL;

export const request = async <T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> => {
  const response = await fetch(`${apiUrl}/api/v1/${url}`, {
    method: options.method,
    headers: options.headers,
    body: options.body
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw new ApiError(errorMessage, response.status);
  }

  if (response.status === 204) {
    return {} as T;
  }

  return response.json();
};
