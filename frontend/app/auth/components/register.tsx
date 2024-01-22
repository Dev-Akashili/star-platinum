"use client";
import {
  FormButton,
  FormInput,
  FormLink,
  FormPasswordInput
} from "@/components/forms/AuthForms";
import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
      <Stack direction="row" gap={2}>
        <FormInput
          isRequired={true}
          label="First Name"
          name="firstName"
          type="text"
        />
        <FormInput
          isRequired={true}
          label="Last Name"
          name="lastName"
          type="text"
        />
      </Stack>
      <FormInput isRequired={true} label="Site Name" name="site" type="text" />
      <FormInput isRequired={true} label="Email" name="email" type="email" />
      <FormPasswordInput
        isRequired={true}
        label="Password"
        name="password"
        show={showPassword}
        setShow={() => setShowPassword(!showPassword)}
      />
      <FormPasswordInput
        isRequired={true}
        label="Confirm Password"
        name="confirmPassword"
        show={showConfirmPassword}
        setShow={() => setShowConfirmPassword(!showConfirmPassword)}
      />
      <FormButton name="Register" />
      <Stack
        direction="row"
        alignItems="center"
        justify="center"
        m="20px 0px 10px 0px"
      >
        <span>
          <Text fontSize="sm">Already Registered?</Text>
        </span>
        <FormLink name="Sign In" to="/auth/sign-in" />
      </Stack>
    </>
  );
}
