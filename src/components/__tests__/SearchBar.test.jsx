/* eslint-disable jest/no-hooks */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchBar from "../SearchBar/SearchBar";
import "@testing-library/jest-dom/extend-expect";

const mockFunction = jest.fn((x) => x);
const typeEvent = "prueba";

describe("<SearchBar />", () => {
  beforeEach(cleanup);

  it("renders input", () => {
    expect.assertions(1);

    render(<SearchBar />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
  });

  it("calls the argument function on input", () => {
    expect.assertions(1);

    render(<SearchBar func={mockFunction} />);
    const inp = screen.getByTestId("input");

    userEvent.type(inp, typeEvent);
    expect(mockFunction).toHaveBeenCalledWith(typeEvent);
  });
});
