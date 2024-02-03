"use client";
import {
  FormButton,
  FormInput,
  FormPasswordInput
} from "@/app/auth/components";
import { useState } from "react";

export default function ResetPassword() {
  const [showNewPassword, setShowNewPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);

  return (
    <>
      <FormInput
        isRequired={true}
        label="Verification Code"
        name="code"
        type="text"
      />
      <FormPasswordInput
        isRequired={true}
        label="New Password"
        name="password"
        show={showNewPassword}
        setShow={() => setShowNewPassword(!showNewPassword)}
      />
      <FormPasswordInput
        isRequired={true}
        label="Confirm Password"
        name="confirmPassword"
        show={showConfirmPassword}
        setShow={() => setShowConfirmPassword(!showConfirmPassword)}
      />
      <FormButton name="Reset Passssword" />
    </>
  );
}
