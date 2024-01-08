import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface FormInputProps {
  isRequired?: boolean;
  label: string;
  name: string;
  type: string;
}

export default function FormInput({
  isRequired,
  label,
  name,
  type
}: FormInputProps) {
  return (
    <FormControl isRequired={isRequired} m="10px 0px">
      <FormLabel>{label}</FormLabel>
      <Input name={name} type={type} borderRadius="0px" border="solid black" />
    </FormControl>
  );
}
