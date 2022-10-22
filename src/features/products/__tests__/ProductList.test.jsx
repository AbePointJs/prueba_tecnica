import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { ProductList } from "../index";

const mockProps = new Array(10).fill({
  id: Math.random().toString(),
  brand: "Brand",
  imgUrl: "asdes",
  model: "Model",
  price: "Price",
  path: "Path",
});

const mockPropsFilter = [
  {
    id: "2",
    brand: "Samsung",
    imgUrl: "some",
    model: "Galaxy 1",
    price: "100",
    path: "path",
  },
  {
    id: "2",
    brand: "Alcatel",
    imgUrl: "asdes",
    model: "Axios 2",
    price: "50",
    path: "path",
  },
];

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

  it("filters products", () => {
    expect.assertions(2);
    render(
      <ProductList products={mockPropsFilter} filterFields={["brand"]} filterString="Samsung" />,
      {
        wrapper: BrowserRouter,
      },
    );

    const list = screen.getByTestId("productList");
    const samsung = screen.getByText("Samsung");

    expect(samsung).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(list.children.length === 1).toBeTruthy();
  });
});
