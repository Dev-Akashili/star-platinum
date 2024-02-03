import { relIcon } from "@/constants";
import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Text
} from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box height="80px" backgroundColor="black">
      <Flex m="auto 20px" alignItems="center" height="100%">
        <Image
          src={relIcon}
          alt="diamond"
          h="30px"
          w="30px"
        />
        <Box ml={3}>
          <Link href="/">
            <Text fontSize="3xl" fontWeight="bold" color="white">
              STAR PLATINUM
            </Text>
          </Link>
        </Box>
        <HStack ml="auto" gap={5}>
          <Link href="/">
            <Button
              color="white"
              variant="ghost"
              border="1px solid"
              borderRadius="0px"
              _hover={{ bg: "grey" }}
              w="100px"
            >
              View Docs
            </Button>
          </Link>
          <Link href="/auth/sign-in">
            <Button
              color="white"
              variant="ghost"
              border="1px solid"
              borderRadius="0px"
              _hover={{ bg: "grey" }}
            >
              Sign In/Register
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}
