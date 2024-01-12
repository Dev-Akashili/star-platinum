interface RequestOptions {
  method?: string;
  headers?: HeadersInit;
  body?: BodyInit;
}

const apiUrl = process.env.NEXT_PUBLIC_LOCAL_HOST_API_URL;

export const request = async (url: string, options: RequestOptions) => {
  const response = await fetch(`${apiUrl}/${url}`, {
    method: options.method,
    headers: options.headers,
    body: options.body
  });

  return response.json();
};
