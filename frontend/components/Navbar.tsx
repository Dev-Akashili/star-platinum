import { relIcon } from "@/constants";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavButtonProps {
  name: string;
  link: string;
}

function NavButton({ name, link }: NavButtonProps) {
  return (
    <Link href={link}>
      <Button
        size={{ base: "sm", lg: "md" }}
        color="white"
        variant="ghost"
        border="1px solid"
        borderRadius="0px"
        _hover={{ bg: "grey" }}
      >
        {name}
      </Button>
    </Link>
  );
}

export default function Navbar() {
  return (
    <Box height={{base:"70px",lg:"80px"}} backgroundColor="black">
      <Flex m="auto 20px" alignItems="center" height="100%">
        <Link href="/">
          <Image
            src={relIcon}
            alt="diamond"
            h={{ base: "25px", lg: "30px" }}
            w={{ base: "25px", lg: "30px" }}
          />
        </Link>
        <Box ml={3}>
          <Link href="/">
            <Text
              fontSize="3xl"
              fontWeight="bold"
              color="white"
              display={{ base: "none", lg: "inline" }}
            >
              STAR PLATINUM
            </Text>
          </Link>
        </Box>
        <HStack ml="auto" gap={5}>
          <NavButton name="View Docs" link="/" />
          <NavButton name="Sign In/Register" link="/auth/sign-in" />
        </HStack>
      </Flex>
    </Box>
  );
}
