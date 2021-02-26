import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";

const getDataMock = jest.fn();

test("Renders BubblePage without errors", () => {
  render(<BubblePage getColorData={getDataMock} />);
  // Finish this test
});

test("Fetches data and renders the bubbles on mounting", () => {
  // Finish this test
  expect(getDataMock).toHaveBeenCalled();

  rerender(<BubblePage getData={getDataMock} isFetchingData={true} />);

  expect(screen.getBy(//i)).toBeInTheDocument()

});

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading
