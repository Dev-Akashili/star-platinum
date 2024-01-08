import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface FormLinkProps {
  name: string;
  to: string;
}

export default function FormLink({ name, to }: FormLinkProps) {
  return (
    <Link href={to}>
      <Text as="u" fontSize="sm">
        {name}
      </Text>
    </Link>
  );
}
