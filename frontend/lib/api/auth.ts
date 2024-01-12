import { UserProfile, Register } from "@/types/auth";
import { request } from "./request";

const fetchKeys = {
  register: "account/register",
  createProfile: "api/userProfile"
};

export async function register(formData: Register) {
  const response = await request(fetchKeys.register, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(formData)
  });
}

export async function createProfile(formData: UserProfile) {
  const response = await request(fetchKeys.createProfile, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(formData)
  });
}
