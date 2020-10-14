import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ButtonLink } from "./button-link";
import { ThemeWrapper } from "../theme-wrapper/theme-wrapper";

describe("ButtonLink", () => {
  it("should render the button link inside", () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <ButtonLink href="test" title="Button link test" />
      </ThemeWrapper>
    );
    expect(getByTestId("button-link-test")).toBeInTheDocument();
  });
});
