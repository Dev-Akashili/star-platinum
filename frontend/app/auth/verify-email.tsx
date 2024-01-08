import FormButton from "@/components/forms/FormButton";
import FormInput from "@/components/forms/FormInput";

export default function VerifyEmail() {
  return (
    <>
      <FormInput
        isRequired={true}
        label="Verify Email"
        name="email"
        type="email"
      />
      <FormButton name="Continue" />
    </>
  );
}
