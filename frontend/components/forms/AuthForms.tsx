import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text
} from "@chakra-ui/react";
import { AlertCircle } from "lucide-react";
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
  children: React.ReactNode;
  name: string;
}

export default function FormLayout({ children, name }: FormLayoutProps) {
  return (
    <Flex justify="center" align="center" minH="100vh">
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
