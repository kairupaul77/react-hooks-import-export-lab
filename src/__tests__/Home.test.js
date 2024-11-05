import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from "../components/Home";  // Make sure this import is correct

test("it is exported as a default export", () => {
  try {
    // This checks if the component renders without errors
    expect(() => render(<Home />)).not.toThrow();
  } catch (e) {
    // If rendering throws an error, this will catch and re-throw it with a custom message
    throw new Error("Make sure to export this component!");
  }
});
