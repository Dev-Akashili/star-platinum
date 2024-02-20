import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

interface FormInputProps {
  isRequired?: boolean;
  label: string;
  name: string;
  type: string;
}

export function FormInput({ isRequired, label, name, type }: FormInputProps) {
  return (
    <FormControl isRequired={isRequired} m="10px 0px">
      <FormLabel>{label}</FormLabel>
      <Input
        name={name}
        type={type}
        borderRadius="0px"
        border="1.5px solid black"
      />
    </FormControl>
  );
}

interface FormPasswordInputProps {
  isRequired?: boolean;
  label: string;
  name: string;
  show?: boolean;
  setShow?: React.MouseEventHandler<HTMLButtonElement>;
}

export function FormPasswordInput({
  isRequired,
  label,
  name,
  show,
  setShow
}: FormPasswordInputProps) {
  return (
    <FormControl isRequired={isRequired} m="10px 0px">
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          name={name}
          type={show ? "text" : "password"}
          borderRadius="0px"
          border="1.5px solid black"
        />
        <InputRightElement width="4.5rem">
          <Button
            backgroundColor="white"
            border={0}
            h="1.75rem"
            size="sm"
            onClick={setShow}
          >
            {show ? <EyeOff /> : <Eye />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
}

interface FormButtonProps {
  name: string;
  isLoading?: boolean;
}

export function FormButton({ name, isLoading }: FormButtonProps) {
  return (
    <Button
      w="100%"
      mt="20px"
      color="white"
      backgroundColor="black"
      borderRadius="0px"
      _hover={{
        border: "1px solid black",
        backgroundColor: "white",
        color: "black"
      }}
      type="submit"
      isLoading={isLoading}
    >
      {name}
    </Button>
  );
}

interface FormLayoutProps {
  name: string;
  isEmailVerified: boolean;
  children: React.ReactNode;
}

export default function FormLayout({
  name,
  isEmailVerified,
  children
}: FormLayoutProps) {
  return (
    <Flex
      justify="center"
      align="center"
      minH="100vh"
      p="50px 0px"
      m={name === "Register" && isEmailVerified ? "100px 0 150px 0" : 0}
    >
      <Box p="20px" border="2px solid black" borderRadius="0px">
        <Text fontSize="3xl" fontWeight="bold" mb="20px" align="center">
          {name}
        </Text>
        <Box minW="350px">{children}</Box>
      </Box>
    </Flex>
  );
}

export function FormAlert() {
  return (
    <Box
      m="10px 0px"
      h="45px"
      borderLeftWidth="5px"
      backgroundColor="red.100"
      borderLeftColor="red.500"
      display="flex"
      alignItems="center"
    >
      <Flex ml="10px" gap={2}>
        <AlertCircle />
        <Text as="b" fontSize="sm">
          Something went wrong
        </Text>
      </Flex>
    </Box>
  );
}

interface FormLinkProps {
  name: string;
  to: string;
}

export function FormLink({ name, to }: FormLinkProps) {
  return (
    <Link href={to}>
      <Text as="u" fontSize="sm">
        {name}
      </Text>
    </Link>
  );
}

export function Error() {
  return (
    <Flex justify="center" align="center">
      <Text mb="10px" as="b" fontSize="2xl">
        OOPS! SOMETHING WENT WRONG
      </Text>
    </Flex>
  );
}
