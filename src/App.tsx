import React from "react";
import { ThemeWrapper } from "./components/theme-wrapper/theme-wrapper";
import { SelectInput } from "./components/select-input/select-input";
import { Stack } from "@chakra-ui/core";

const App: React.FC = ({ children }) => {
  return (
    <ThemeWrapper>
      <Stack marginLeft="10px" marginTop="10px">
        <SelectInput
          boxHoverColor="gray.200"
          boxColor="gray.100"
          width="500px"
          placeholder="test"
          rawData={[
            { key: "test1", label: "test1" },
            { key: "test2", label: "test2" },
            { key: "test3", label: "test3" },
            { key: "test4", label: "test4" },
            { key: "test5", label: "test5" },
            { key: "test6", label: "test6" },
            { key: "test7", label: "test7" },
            { key: "test8", label: "test8" },
            { key: "test9", label: "test9" },
            { key: "test10", label: "test10" },
          ]}
          first={2}
          onSelect={(element) => console.log(element)}
        />
        <SelectInput
          boxHoverColor="gray.200"
          boxColor="gray.100"
          width="500px"
          placeholder="Nach Politiker Suchen"
          rawData={[
            { key: "test1", label: "test1" },
            { key: "test2", label: "test2" },
            { key: "test3", label: "test3" },
            { key: "test4", label: "test4" },
            { key: "test5", label: "test5" },
            { key: "test6", label: "test6" },
            { key: "test7", label: "test7" },
            { key: "test8", label: "test8" },
            { key: "test9", label: "test9" },
            { key: "test10", label: "test10" },
          ]}
        />
        <SelectInput
          boxHoverColor="gray.200"
          boxColor="gray.100"
          width="500px"
          placeholder="Nach Politiker Suchen"
          rawData={[
            { key: "test1", label: "test1" },
            { key: "test2", label: "test2" },
            { key: "test3", label: "test3" },
            { key: "test4", label: "test4" },
            { key: "test5", label: "test5" },
            { key: "test6", label: "test6" },
            { key: "test7", label: "test7" },
            { key: "test8", label: "test8" },
            { key: "test9", label: "test9" },
            { key: "test10", label: "test10" },
          ]}
        />
      </Stack>
    </ThemeWrapper>
  );
};
export default App;
