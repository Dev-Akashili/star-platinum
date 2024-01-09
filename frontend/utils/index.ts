// Functiion to generate verification code
export const generateVerificationCode = () => {
  let code: string[] = [];
  for (let i = 1; i < 7; i++) {
    code.push(Math.floor(Math.random() * 10).toString());
  }
  return code.join("");
};
