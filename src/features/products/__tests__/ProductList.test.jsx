import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { ProductList } from "../index";

const mockProps = new Array(10).fill({});

describe("<ProductList />", () => {
  // eslint-disable-next-line jest/no-hooks
  beforeEach(cleanup);

  it("renders all the components", () => {
    expect.assertions(1);
    render(<ProductList products={mockProps} />, {
      wrapper: BrowserRouter,
    });

    const elems = screen.getAllByTestId("productItem");
    expect(elems.length === mockProps.length).toBeTruthy();
  });
});
