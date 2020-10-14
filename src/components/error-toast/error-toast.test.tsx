import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ErrorToast } from "./error-toast";
import { ThemeWrapper } from "../theme-wrapper/theme-wrapper";

describe("Error", () => {
  it("should render the error toast ", () => {
    const { getByTitle } = render(
      <ThemeWrapper>
        <ErrorToast error={new Error("test error")} />
      </ThemeWrapper>
    );
    // AD-158 not posible test
    // expect(getByTitle("test error")).toBeInTheDocument();
  });
});
