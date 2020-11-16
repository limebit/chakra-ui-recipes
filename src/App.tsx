import React from "react";
import { ThemeWrapper } from "./components/theme-wrapper/theme-wrapper";
import { DeleteModal } from "./components/delete-modal/delete-modal";
import { Stack } from "@chakra-ui/react";

const App: React.FC = ({ children }) => {
  return (
    <ThemeWrapper>
      <DeleteModal
        ariaLabel="test"
        deleteHandler={() => {
          console.log("Deleted");
        }}
        title="test"
        key="test"
      />
    </ThemeWrapper>
  );
};
export default App;
