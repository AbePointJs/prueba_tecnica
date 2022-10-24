import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ProductList from "../components/productList/ProductList";

const mockProps = new Array(10).fill().map((e, i) => ({
  id: `${i}x`,
  brand: "Brand",
  imgUrl: "asdes",
  model: "Model",
  price: "Price",
  path: "Path",
}));

describe("<ProductList />", () => {
  // eslint-disable-next-line jest/no-hooks
  beforeEach(cleanup);

  it("renders all the components", () => {
    expect.assertions(1);
    render(<ProductList products={mockProps} />, {
      wrapper: BrowserRouter,
    });

    const container = screen.getByTestId("productList");
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.children.length === mockProps.length).toBeTruthy();
  });
});
