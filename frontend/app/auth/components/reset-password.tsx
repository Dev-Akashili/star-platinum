import { FormButton, FormInput } from "@/components/forms/AuthForms";

export default function ResetPassword() {
  return (
    <>
      <FormInput
        isRequired={true}
        label="Verification Code"
        name="code"
        type="text"
      />
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
  );
}
