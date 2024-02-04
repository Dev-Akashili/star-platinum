import { Box, Button, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

interface HomeButtonsProps {
  name: string;
  link: string;
  category: "positive" | "negative";
}

export function HomeButton({ name, link, category }: HomeButtonsProps) {
  return (
    <Link href={link}>
      <Button
        border={category === "negative" ? "2px solid" : ""}
        color={category === "positive" ? "white" : "black"}
        bgColor={category === "positive" ? "black" : "white"}
        size="lg"
        _hover={{
          bgColor: category === "positive" ? "white" : "black",
          color: category === "positive" ? "black" : "white",
          border: "2px solid"
        }}
      >
        {name}
      </Button>
    </Link>
  );
}

interface HomeCardProps {
  title: string;
  description: string;
  imageLink: string;
  imageAlt: string;
}

export default function HomeCard({
  title,
  description,
  imageLink,
  imageAlt
}: HomeCardProps) {
  return (
    <Box
      w={{ base: "95%", lg: "50%" }}
      p={{ base: "30px 50px", lg: "50px 80px" }}
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "10px"
      }}
    >
      <Stack alignItems="center" gap={5} m="auto">
        <Image h="35px" w="35px" src={imageLink} alt={imageAlt} />
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        <Text fontSize="md" color="grey" textAlign="center">
          {description}
        </Text>
      </Stack>
    </Box>
  );
}
