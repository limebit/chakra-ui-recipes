import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LoadingSpinner } from "./loading-spinner";
import { ThemeWrapper } from "../theme-wrapper/theme-wrapper";

describe("LoadingSpinner", () => {
  it("should render the loading spinner inside", () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <LoadingSpinner />
      </ThemeWrapper>
    );
    expect(getByTestId("loading-spinner")).toBeInTheDocument();
  });
});
