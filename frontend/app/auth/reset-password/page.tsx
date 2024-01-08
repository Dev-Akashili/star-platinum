"use client";

import FormLayout from "@/components/forms/FormLayout";
import { useState } from "react";
import VerifyEmail from "../verify-email";
import FormInput from "@/components/forms/FormInput";
import FormButton from "@/components/forms/FormButton";

export default function ResetPassword() {
  const [isEmailVerified, setEmailVerified] = useState<boolean>(false);

  return (
    <FormLayout name="Reset Password">
      {!isEmailVerified ? (
        <VerifyEmail />
      ) : (
        <>
          <FormInput
            isRequired={true}
            label="New Password"
            name="password"
            type="password"
          />
          <FormInput
            isRequired={true}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <FormButton name="Reset Passssword" />
        </>
      )}
    </FormLayout>
  );
}
