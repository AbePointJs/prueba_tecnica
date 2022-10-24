import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import ProductItem from "../components/productItem/ProductItem";

const brand = "Samsumg";
const imgUrl = "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg";
const model = "Galaxy 2";
const price = "500";
const path = "/";

describe("<ProductItem />", () => {
  // eslint-disable-next-line jest/no-hooks
  beforeEach(cleanup);

  it("renders img with src and label", () => {
    expect.assertions(2);

    render(<ProductItem path={path} brand={brand} imgUrl={imgUrl} model={model} price={price} />, {
      wrapper: BrowserRouter,
    });

    expect.assertions(2);
    const img = screen.getByRole("img");

    expect(img.src).toBe(imgUrl);
    expect(img.alt).toBe(model);
  });

  it("renders price fileds", () => {
    expect.assertions(2);

    render(<ProductItem path={path} brand={brand} imgUrl={imgUrl} model={model} />, {
      wrapper: BrowserRouter,
    });

    expect(screen.getByText(brand)).toBeInTheDocument();
    expect(screen.getByText(model)).toBeInTheDocument();
  });
});
