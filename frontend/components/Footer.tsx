import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      backgroundColor="black"
      width="100%"
      minH="150px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="#fff" as="b">
        Made with 🤍 by Emeka Akashili © <span>{new Date().getFullYear()}</span>
      </Text>
    </Box>
  );
}
