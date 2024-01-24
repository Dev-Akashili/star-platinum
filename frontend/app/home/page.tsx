import { Box, Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex justifyContent="center" maxH="100vh" p="50px 150px" mt="30px">
      <Stack mt="auto" gap={5} alignItems="center">
        <Text
          fontSize="6xl"
          fontWeight="bold"
          m="20px"
          w="100%"
          textAlign="center"
        >
          Star Platinum Auth & User Management
        </Text>
        <Text fontSize="xl" color="grey" textAlign="center">
          An open source software product that streamlines user authentication,
          authorization, and management for developers. Built as a solution to
          the hassle of building custom auth systems, by providing intuitive API
          endpoints and a user-friendly interface which simplifies integration
          and empowers you to focus on your core application.
        </Text>
        <HStack justifyContent="center" gap={5} mt="20px">
          <Button
            color="white"
            bgColor="black"
            size="lg"
            _hover={{ bgColor: "white", color: "black", border: "2px solid" }}
          >
            Get Started
          </Button>
          <Button
            border="2px solid"
            size="lg"
            bgColor="white"
            _hover={{ bgColor: "black", color: "white" }}
          >
            Learn More
          </Button>
        </HStack>
      </Stack>
    </Flex>
  );
}
