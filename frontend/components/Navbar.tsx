import { relIcon } from "@/constants";
import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface NavButtonProps {
  name: string;
  link: string;
  variant: "white" | "black";
}

function NavButton({ name, link, variant }: NavButtonProps) {
  return (
    <Link href={link}>
      <Button
        size={{ base: "sm", lg: "md" }}
        color={variant === "white" ? "black" : "white"}
        bgColor={variant}
        variant="ghost"
        border="2px solid black"
        borderRadius="0px"
        _hover={{
          bg: variant === "white" ? "black" : "white",
          color: variant
        }}
      >
        {name}
      </Button>
    </Link>
  );
}

export default function Navbar() {
  return (
    <Box
      top="0"
      left="0"
      right="0"
      zIndex="1000"
      position="fixed"
      backdropFilter="blur(10px)"
      height={{ base: "80px", lg: "100px" }}
    >
      <Flex m="auto 20px" alignItems="center" height="100%">
        <Link href="/">
          <Image src={relIcon} alt="diamond" h="35px" w="35px" />
        </Link>
        <Box ml={3}>
          <Link href="/">
            <Text
              fontSize="3xl"
              fontWeight="bold"
              display={{ base: "none", lg: "inline" }}
            >
              STAR PLATINUM
            </Text>
          </Link>
        </Box>
        <HStack ml="auto" gap={5}>
          <NavButton name="View Docs" link="/" variant="white" />
          <NavButton
            name="Sign In/Register"
            link="/auth/sign-in"
            variant="black"
          />
        </HStack>
      </Flex>
    </Box>
  );
}
