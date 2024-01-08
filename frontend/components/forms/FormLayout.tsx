import { Box, Flex, Text } from "@chakra-ui/react";

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
