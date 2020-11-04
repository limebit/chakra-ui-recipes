import React, { useState } from "react";
import {
  Input,
  Box,
  Flex,
  Button,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/core";
import { ChevronDownIcon } from "@chakra-ui/icons";

export interface DataProps {
  label: string;
  key: string;
}

export interface SelectInputProps {
  width: string;
  placeholder: string;
  rawData: DataProps[];
  first?: number;
}

export const SelectInput = ({
  width,
  placeholder,
  rawData,
  first = 50,
}: SelectInputProps): JSX.Element => {
  const [focusedInput, setFocusedInput] = useState(false);
  const [focusedButton, setFocusedButton] = useState(false);
  const [input, setInput] = useState("");

  return (
    <Flex>
      <Box position="relative">
        <InputGroup
          width={width}
          onFocus={() => setFocusedInput(true)}
          onBlur={() => setTimeout(() => setFocusedInput(false), 150)}
        >
          <Input
            placeholder={placeholder}
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <InputRightElement children={<ChevronDownIcon />} />
        </InputGroup>
        {focusedInput || focusedButton ? (
          <Box
            position="absolute"
            width="100%"
            maxHeight="200px"
            overflowY="auto"
            marginTop="6px"
            shadow="sm"
            rounded="4px"
            backgroundColor="gray.100"
            zIndex="1000"
            onFocus={() => setFocusedButton(true)}
            onBlur={() => setFocusedButton(false)}
            _focus={{ outline: "None" }}
          >
            {rawData
              .slice(0, first)
              .filter((element) => element.label.includes(input))
              .map((element) => (
                <Button
                  variant="ghost"
                  width="100%"
                  textAlign="left"
                  borderRadius="0"
                  _hover={{ backgroundColor: "gray.200" }}
                  onClick={() => {
                    console.log(element.key);
                    setFocusedButton(false);
                    setFocusedInput(false);
                    setInput(element.label);
                  }}
                  key={element.key}
                >
                  <Text paddingLeft="10px" width="100%" fontWeight="normal">
                    {element.label}
                  </Text>
                </Button>
              ))}
          </Box>
        ) : null}
      </Box>
    </Flex>
  );
};

export default SelectInput;
