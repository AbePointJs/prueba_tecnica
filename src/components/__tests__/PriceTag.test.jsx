/* eslint-disable jest/no-hooks */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import PriceTag from "../priceTag/PriceTag";
import "@testing-library/jest-dom/extend-expect";

const numPrice = 100;
const stringPrice = "100";
const euros = "€";
const dollars = "$";
const shouldRender = "100€";
const shouldRenderDollars = "100$";

describe("<PriceTag />", () => {
  afterEach(cleanup);

  it("renders price on screen when price is number", () => {
    expect.assertions(1);

    render(<PriceTag price={numPrice} currency={euros} />);

    const txt = screen.getByText(shouldRender);
    expect(txt).toBeInTheDocument();
  });

  it("render price when price is string", () => {
    expect.assertions(1);

    render(<PriceTag price={stringPrice} currency={euros} />);
    const txt = screen.getByText(shouldRender);

    expect(txt).toBeInTheDocument();
  });

  it("renders euros when currency is not defined", () => {
    expect.assertions(1);
    render(<PriceTag price={numPrice} />);

    const txt = screen.getByText(shouldRender);
    expect(txt).toBeInTheDocument();
  });

  it("renders new currency when defined", () => {
    expect.assertions(1);
    render(<PriceTag price={numPrice} currency={dollars} />);

    const txt = screen.getByText(shouldRenderDollars);
    expect(txt).toBeInTheDocument();
  });
});
