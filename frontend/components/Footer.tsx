import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box
      backgroundColor="black"
      width="100%"
      minH="100px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text color="grey" as="b" ml="35px">
        Emeka Akashili © <span>{new Date().getFullYear()}</span>
      </Text>
    </Box>
  );
}
