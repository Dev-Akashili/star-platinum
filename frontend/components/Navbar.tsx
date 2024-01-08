import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box height="80px" backgroundColor="black">
      <Flex m="auto 20px" alignItems="center" height="100%">
        <Link href="/">
          <Text fontSize="3xl" fontWeight="bold" color="white">
            STAR PLATINUM
          </Text>
        </Link>
        <Box ml="auto">
          <Link href="auth/sign-in">
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
        </Box>
      </Flex>
    </Box>
  );
}
