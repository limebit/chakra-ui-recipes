import React from "react";
import { BoxProps, Box, useColorModeValue } from "@chakra-ui/core";

export const Card: React.FC<BoxProps> = (props) => {
  const bgColor = useColorModeValue("white", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Box
      bg={bgColor}
      color={color}
      shadow="sm"
      rounded="lg"
      data-testid="card"
      {...props}
    >
      {props.children}
    </Box>
  );
};
export default Card;
