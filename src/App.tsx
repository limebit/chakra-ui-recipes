import React from "react";
import ThemeWrapper from "./components/theme-wrapper/theme-wrapper";
import {Card} from "./components/card/card";

const App: React.FC = ({ children }) => {
  return (
    <ThemeWrapper>
      <Card>Test</Card>
    </ThemeWrapper>
  );
};
export default App;
