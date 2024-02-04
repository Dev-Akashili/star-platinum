import { Button, Image } from "@chakra-ui/react";
import Link from "next/link";

interface PageBtnProps {
  name: string;
  link: string;
  target: boolean;
  imageLink: string;
  imageAlt: string;
}

export function PageBtn({
  name,
  link,
  target,
  imageLink,
  imageAlt
}: PageBtnProps) {
  return (
    <Link href={link} target={target ? "_blank" : ""}>
      <Button
        variant="outline"
        leftIcon={<Image src={imageLink} alt={imageAlt} w="20px" h="20px" />}
        size={{ base: "sm", lg: "md" }}
      >
        {name}
      </Button>
    </Link>
  );
}
