import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ThemeWrapper } from "./theme-wrapper";
describe("Theme", () => {
  it("render theme", () => {
    const { getByTestId } = render(<ThemeWrapper />);
    expect(getByTestId("theme-wrapper")).toBeInTheDocument();
  });
});
