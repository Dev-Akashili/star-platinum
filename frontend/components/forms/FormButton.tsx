import { Button } from "@chakra-ui/react";

interface FormButtonProps {
  name: string;
}

export default function FormButton({ name }: FormButtonProps) {
  return (
    <Button
      w="100%"
      mt="20px"
      color="white"
      backgroundColor="black"
      borderRadius="0px"
      _hover={{
        border: "1px solid black",
        backgroundColor: "white",
        color: "black"
      }}
      type="submit"
    >
      {name}
    </Button>
  );
}
