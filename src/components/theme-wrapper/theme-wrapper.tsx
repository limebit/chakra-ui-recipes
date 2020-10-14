import React from "react";
import { ChakraProvider } from "@chakra-ui/core";
import { theme } from "@chakra-ui/theme";

export const ThemeWrapper: React.FC = ({ children }) => {

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <div data-testid="theme-wrapper">{children}</div>
    </ChakraProvider>
  );
};

export default ThemeWrapper;
