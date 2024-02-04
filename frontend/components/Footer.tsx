import { links } from "@/data";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <Flex
      backgroundColor="black"
      width="100%"
      minH="100px"
      alignItems="center"
      justifyContent="center"
    >
      <Stack alignItems="center" gap="30px" m="40px 0px">
        <Text color="white" >
          Made by Emeka Akashili © <span>{new Date().getFullYear()}</span>
        </Text>
        <HStack gap={5}>
          <Link href={links.github} target="_blank">
            <Github height="20px" width="20px" color="white" />
          </Link>
          <Link href={links.linkedin} target="_blank">
            <Linkedin height="20px" width="20px" color="white" />
          </Link>
          <Link href={links.mail}>
            <Mail height="20px" width="20px" color="white" />
          </Link>
        </HStack>
        <Button
          variant="outline"
          color="white"
          size="md"
          leftIcon={
            <Image
              src="https://img.icons8.com/color/48/filled-like.png"
              w="20px"
              h="20px"
            />
          }
          _hover={{ backgroundColor: "grey" }}
        >
          Sponsor
        </Button>
      </Stack>
    </Flex>
  );
}
