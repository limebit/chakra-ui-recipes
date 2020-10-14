import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Button } from "./button";
import { ThemeWrapper } from "../theme-wrapper/theme-wrapper";

describe("Button", () => {
  it("render the button inside", () => {
    const { getByText } = render(
      <ThemeWrapper>
        <Button />
      </ThemeWrapper>
    );
    expect(getByText("Click Me!")).toBeInTheDocument();
  });
});
