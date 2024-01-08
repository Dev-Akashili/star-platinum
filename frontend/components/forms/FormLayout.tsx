import { Box, Flex, Text } from "@chakra-ui/react";

interface FormLayoutProps {
  children: React.ReactNode;
  name: string;
}

export default function FormLayout({ children, name }: FormLayoutProps) {
  return (
    <Flex justify="center" align="center" minH="80vh">
      <Box p="20px" border="2px solid black" borderRadius="0px">
        <Text fontSize="3xl" fontWeight="bold" mb="20px">
          {name}
        </Text>
        <Box>{children}</Box>
      </Box>
    </Flex>
  );
}
