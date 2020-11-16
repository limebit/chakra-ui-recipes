import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent } from "@testing-library/react";
import React from "react";
import { DeleteModal } from "./delete-modal";
import { ThemeWrapper } from "../theme-wrapper/theme-wrapper";
describe("DeleteModal", () => {
  it("should show the delete modal in document", () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <DeleteModal
          title="test"
          deleteHandler={() => console.log("should delete something")}
          ariaLabel="test"
        />
      </ThemeWrapper>
    );
    expect(getByTestId("delete-modal-icon")).toBeInTheDocument();
  });

  it("should show delete popup", () => {
    const { getByTestId } = render(
      <ThemeWrapper>
        <DeleteModal
          title="test"
          deleteHandler={() => console.log("should show popup")}
          ariaLabel="test"
        />
      </ThemeWrapper>
    );
    fireEvent.click(getByTestId("delete-modal-icon"));
    expect(getByTestId("delete-modal-popup")).toBeInTheDocument();
  });

  // it("should closes the popup when x clicked", () => {
  //   const { getByTestId, queryByTestId } = render(
  //     <ThemeWrapper>
  //       <DeleteModal
  //         title="test"
  //         deleteHandler={() => console.log("should hide popup")}
  //         ariaLabel="test"
  //       />
  //     </ThemeWrapper>
  //   );
  //   fireEvent.click(getByTestId("delete-modal-icon"));
  //   fireEvent.click(getByTestId("delete-modal-x-button"));
  //   expect(queryByTestId("delete-modal-popup")).not.toBeInTheDocument();
  // });

  // it("should closes the popup when clicked cancel button in delete modal", () => {
  //   const { getByTestId, queryByTestId } = render(
  //     <ThemeWrapper>
  //       <DeleteModal
  //         title="test"
  //         deleteHandler={() => console.log("should hide popup")}
  //         ariaLabel="test"
  //       />
  //     </ThemeWrapper>
  //   );
  //   fireEvent.click(getByTestId("delete-modal-icon"));
  //   fireEvent.click(getByTestId("delete-modal-cancel-button"));
  //   expect(queryByTestId("delete-modal-popup")).not.toBeInTheDocument();
  // });

  // it("should check if modal delete function is called", () => {
  //   let isCalled = false;
  //   const { getByTestId, queryByTestId } = render(
  //     <ThemeWrapper>
  //       <DeleteModal
  //         title="test"
  //         deleteHandler={() => (isCalled = true)}
  //         ariaLabel="test"
  //       />
  //     </ThemeWrapper>
  //   );
  //   fireEvent.click(getByTestId("delete-modal-icon"));
  //   fireEvent.click(getByTestId("delete-modal-delete-button"));
  //   expect(isCalled).toBe(true);
  //   expect(queryByTestId("delete-modal-popup")).not.toBeInTheDocument();
  // });

  // it("should check if title and test aria matches", () => {
  //   const { getByTestId, getByText, getByLabelText } = render(
  //     <ThemeWrapper>
  //       <DeleteModal
  //         title="test-title"
  //         deleteHandler={() => console.log("Title should match")}
  //         ariaLabel="test-aria-label"
  //       />
  //     </ThemeWrapper>
  //   );
  //   fireEvent.click(getByTestId("delete-modal-icon"));
  //   expect(getByText("test-title")).toBeInTheDocument();
  //   expect(getByLabelText("test-aria-label")).toBeInTheDocument();
  // });
});
