// Function to extract form data
export const getFormData = (
  e: React.FormEvent<HTMLFormElement>,
  params: string[]
) => {
  let data: Record<string, string | null> = {};

  for (let i = 0; i < params.length; i++) {
    const val = new FormData(e.currentTarget).get(params[i]);
    data[params[i]] = val !== null ? String(val) : null;
  }

  return data;
};
