"use client";

import FormLayout, {
  FormAlert,
  FormButton,
  FormInput,
  Error
} from "@/app/auth/components";
import { getFormData } from "@/utils";
import { Box, useToast } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useRef, useState } from "react";
import Register from "./components/auth-forms/register";
import ResetPassword from "./components/auth-forms/reset-password";
import { sendEmailVerificationCode, verifyEmail } from "@/lib/api/auth";
import { ApiError } from "next/dist/server/api-utils";

export default function Auth() {
  const toast = useToast();
  const params = useSearchParams();
  const authPage = params.get("page");
  const formRef = useRef<HTMLFormElement>(null);
  const [show, setShow] = useState<boolean>(false);
  const [codeId, setCodeId] = useState<number | null>(null);
  const [isEmailSent, setEmailSent] = useState<boolean>(false);
  const [isEmailVerified, setEmailVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  async function handleSendEmailVerification(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setShow(false);
    setIsLoading(true);
    const { email } = getFormData(event, ["email"]);

    if (!email) {
      setErrorMessage("Something went wrong!");
      setShow(true);
      setIsLoading(false);
      return;
    }

    try {
      const result = await sendEmailVerificationCode(email);
      toast({
        title: "Verification code successfully sent!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      setCodeId(result);
      setIsLoading(false);
      formRef.current?.reset();
      setEmailSent(true);
    } catch (error) {
      let message;
      if (error instanceof ApiError) message = error.message;
      else message = String(error);

      setErrorMessage(message);
      setShow(true);
      setIsLoading(false);
    }
  }

  async function handleCodeVerification(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setShow(false);
    setIsLoading(true);
    const { code } = getFormData(event, ["code"]);

    if (!codeId || !code) {
      setErrorMessage("Something went wrong!");
      setShow(true);
      setIsLoading(false);
      return;
    }

    try {
      const response = await verifyEmail({ codeId: codeId, code: code });
      if (response.message !== "success") {
        setErrorMessage(response.message);
        setShow(true);
        setIsLoading(false);
        return;
      }
      toast({
        title: "Email verification successful!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      setIsLoading(false);
      setEmailVerified(true);
    } catch (error) {
      let message;
      if (error instanceof ApiError) message = error.message;
      else message = String(error);

      setErrorMessage(message);
      setShow(true);
      setIsLoading(false);
    }
  }

  return (
    <Box p={authPage === "register" ? { base: "0 35px", md: 0, lg: 0 } : 0}>
      <FormLayout
        name={
          authPage === "register"
            ? "Register"
            : authPage === "reset-password"
            ? "Reset Password"
            : ""
        }
        isEmailVerified={isEmailVerified}
      >
        {!isEmailVerified ? (
          <form
            ref={formRef}
            onSubmit={
              isEmailSent ? handleCodeVerification : handleSendEmailVerification
            }
          >
            {show && <FormAlert message={errorMessage} />}
            {!isEmailSent ? (
              <FormInput
                isRequired={true}
                label="Verify Email"
                name="email"
                type="email"
              />
            ) : (
              <FormInput
                isRequired={true}
                label="Code"
                name="code"
                type="text"
              />
            )}
            <FormButton name="Continue" isLoading={isLoading} />
          </form>
        ) : authPage === "register" ? (
          <Register />
        ) : authPage === "reset-password" ? (
          <ResetPassword />
        ) : (
          <Error />
        )}
      </FormLayout>
    </Box>
  );
}
