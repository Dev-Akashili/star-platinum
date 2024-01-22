"use client";

import FormLayout, {
  FormAlert,
  FormButton,
  FormInput,
  Error
} from "@/components/forms/AuthForms";
import { generateVerificationCode, getFormData } from "@/utils";
import { Collapse, useToast } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Register from "./components/register";
import ResetPassword from "./components/reset-password";

export default function Auth() {
  const toast = useToast();
  const params = useSearchParams();
  const authPage = params.get("page");
  const [show, setShow] = useState<boolean>(false);
  const [isEmailVerified, setEmailVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function handleEmailVerification(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setShow(false);
    setIsLoading(true);
    const code = generateVerificationCode();
    const { email } = getFormData(event, ["email"]);

    // Get EmailJS credentials
    const emailPublicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY;
    const emailServiceIdd = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const emailTemplateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;

    // Send Email Verification Code
    if (emailPublicKey && emailServiceIdd && emailTemplateId) {
      emailjs.init(emailPublicKey);
      emailjs
        .send(emailServiceIdd, emailTemplateId, {
          email: email,
          message: code
        })
        .then(
          (result) => {
            if (result.text == "OK") {
              toast({
                position: "top",
                status: "success",
                title: "Email verification code sent",
                duration: 3000,
                isClosable: true
              });
              setIsLoading(false);
              setEmailVerified(true);
            }
          },
          (error) => {
            console.error(error);
            setIsLoading(false);
            setShow(true);
          }
        );
    }
  }

  return (
    <FormLayout
      name={
        authPage === "register"
          ? "Register"
          : authPage === "reset-password"
          ? "Reset Password"
          : ""
      }
    >
      {isEmailVerified ? (
        <form onSubmit={handleEmailVerification}>
          <Collapse in={show} animateOpacity>
            <FormAlert />
          </Collapse>
          <FormInput
            isRequired={true}
            label="Verify Email"
            name="email"
            type="email"
          />
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
  );
}
