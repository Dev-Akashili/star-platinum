import FormLayout, {
  FormButton,
  FormInput,
  FormLink
} from "@/components/forms/AuthForms";
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
      <FormLink name="Forgot password?" to="/auth?page=reset-password" />
      <FormButton name="Sign In" />
      <Box textAlign="center" m="20px 0px 10px 0px">
        <FormLink name="Register" to="/auth?page=register" />
      </Box>
    </FormLayout>
  );
}
