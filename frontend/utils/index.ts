// Functiion to generate verification code
export const generateVerificationCode = () => {
  let code: string[] = [];
  for (let i = 1; i < 7; i++) {
    code.push(Math.floor(Math.random() * 10).toString());
  }
  return code.join("");
};

interface getFormDataProps {
  e: React.FormEvent<HTMLFormElement>;
  params: string[];
}

// Function to extract form data
export const getFormData = ({ e, params }: getFormDataProps) => {
  let data: Record<string, string | null> = {};

  for (let i = 0; i < params.length; i++) {
    const val = new FormData(e.currentTarget).get(params[i]);
    data[params[i]] = val !== null ? String(val) : null;
  }

  return data;
};
