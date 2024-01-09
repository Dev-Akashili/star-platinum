import { FormButton, FormInput, FormLink } from "@/components/forms/AuthForms";
import { Stack, Text } from "@chakra-ui/react";

export default function Register() {
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
      <FormInput isRequired={true} label="Email" name="email" type="email" />
      <FormInput
        isRequired={true}
        label="Password"
        name="password"
        type="password"
      />
      <FormInput
        isRequired={true}
        label="Confirm Password"
        name="confirmPassword"
        type="password"
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