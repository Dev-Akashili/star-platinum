import { EmailResponse, VerifyEmail } from "@/types/auth";
import { request } from "./request";

const fetchKeys = {
  sendCode: (email: string) => `email/sendEmailVerificationCode/${email}`,
  verifyEmail: "email/verifyEmail"
};

export async function sendEmailVerificationCode(email: string) {
  try {
    return await request<number>(fetchKeys.sendCode(email));
  } catch (error) {
    console.warn("Failed to fetch data.");
    return 0;
  }
}

export async function verifyEmail(
  formData: VerifyEmail
): Promise<EmailResponse> {
  return await request(fetchKeys.verifyEmail, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(formData)
  });
}
