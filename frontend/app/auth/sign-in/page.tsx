"use client";

import FormLayout, {
  FormButton,
  FormInput,
  FormLink,
  FormPasswordInput
} from "@/components/forms/AuthForms";
import { Box } from "@chakra-ui/react";
import { useState } from "react";

export default function SignIn() {
  const [show, setShow] = useState<boolean>(false);

  return (
    <FormLayout name="Sign In">
      <FormInput isRequired={true} label="Email" name="email" type="email" />
      <FormPasswordInput
        isRequired={true}
        label="Password"
        name="password"
        show={show}
        setShow={() => setShow(!show)}
      />
      <FormLink name="Forgot password?" to="/auth?page=reset-password" />
      <FormButton name="Sign In" />
      <Box textAlign="center" m="20px 0px 10px 0px">
        <FormLink name="Register" to="/auth?page=register" />
      </Box>
    </FormLayout>
  );
}
