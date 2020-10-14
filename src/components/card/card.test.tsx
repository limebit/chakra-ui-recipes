import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Card } from "./card";

import { ThemeWrapper } from "../theme-wrapper/theme-wrapper";

describe("Card", () => {
  it("should render the card", () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <Card children={<div data-testid="card-children"></div>} />
      </ThemeWrapper>
    );
    const cardModal = getByTestId("card");
    expect(cardModal).toBeInTheDocument();
    const cardModalChildren = getByTestId("card-children");
    expect(cardModalChildren).toBeInTheDocument();
  });
});
