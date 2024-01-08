import FormButton from "@/components/forms/FormButton";
import FormInput from "@/components/forms/FormInput";
import FormLayout from "@/components/forms/FormLayout";
import FormLink from "@/components/forms/FormLink";
import { Box } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <FormLayout name="Sign In">
      <FormInput isRequired={true} label="Email" name="email" type="email" />
      <FormInput
        isRequired={true}
        label="Password"
        name="password"
        type="password"
      />
      <FormLink name="Forgot password?" to="/auth/reset-password" />
      <FormButton name="Sign In" />
      <Box textAlign="center" m="20px 0px 10px 0px">
        <FormLink name="Register" to="/auth/register" />
      </Box>
    </FormLayout>
  );
}
