import React, { useState, useEffect } from "react";
import {
  Input,
  Box,
  Flex,
  Button,
  Text,
  InputGroup,
  InputRightElement,
  ResponsiveValue,
} from "@chakra-ui/core";
import { ChevronDownIcon } from "@chakra-ui/icons";
import * as CSS from "csstype";

export interface DataProps {
  label: string;
  key: string;
}

export interface SelectInputProps {
  placeholder: string;
  rawData: DataProps[];
  width?: string;
  first?: number;
  onSelect?: (element: DataProps) => void;
  boxColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  boxHoverColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  inputColor?: ResponsiveValue<CSS.Property.BackgroundImage>;
  initialValue?: DataProps;
}

export const SelectInput = ({
  width,
  placeholder,
  rawData,
  onSelect,
  boxColor,
  boxHoverColor,
  inputColor,
  initialValue,
  first = 50,
}: SelectInputProps): JSX.Element => {
  const [focusedInput, setFocusedInput] = useState(false);
  const [focusedButton, setFocusedButton] = useState(false);
  const [selected, setSelected] = useState<DataProps>();
  const [input, setInput] = useState("");

  useEffect(() => {
    if (initialValue) {
      setInput(initialValue.label);
      setSelected(initialValue);
    }
  }, [initialValue]);

  return (
    <Flex>
      <Box position="relative">
        <InputGroup
          width={width}
          onFocus={() => setFocusedInput(true)}
          onBlur={() => {
            if (!selected) setInput("");
            setTimeout(() => setFocusedInput(false), 150);
          }}
        >
          <Input
            placeholder={placeholder}
            onChange={(e) => {
              setInput(e.target.value);
              setSelected(undefined);
            }}
            value={input}
            backgroundColor={inputColor}
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
            backgroundColor={boxColor}
            zIndex="20"
            onFocus={() => setFocusedButton(true)}
            onBlur={() => setFocusedButton(false)}
            _focus={{ outline: "None" }}
          >
            {rawData
              .filter((element) => element.label.includes(input))
              .slice(0, first)
              .map((element) => (
                <Button
                  variant="ghost"
                  width="100%"
                  textAlign="left"
                  borderRadius="0"
                  _hover={{ backgroundColor: boxHoverColor }}
                  onClick={() => {
                    console.log(element.key);
                    setFocusedButton(false);
                    setFocusedInput(false);
                    setInput(element.label);
                    setSelected(element);
                    if (onSelect) onSelect(element);
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
