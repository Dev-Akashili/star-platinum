export interface EmailResponse {
  message: string;
}

export interface VerifyEmail {
  code: string;
  codeId: number;
}

export interface Register {
  email: string;
  password: string;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
}
