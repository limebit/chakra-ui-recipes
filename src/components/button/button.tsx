import React from "react";
import { Button as ChakraButton } from "@chakra-ui/core";

interface ButtonProps {
  isDisabled?: boolean;
}
export const Button = ({ isDisabled }: ButtonProps) => {
  return <ChakraButton isDisabled={isDisabled}>{"Click Me!"}</ChakraButton>;
};

export default Button;
