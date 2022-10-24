/* eslint-disable jest/no-hooks */
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import PriceTag from "../priceTag/PriceTag";
import "@testing-library/jest-dom/extend-expect";

const numPrice = 100;
const stringPrice = "100";
const invalidPriceString = "";
const invalidStringWithSpaces = "      ";
const euros = "€";
const dollars = "$";
const shouldRender = "100€";
const shouldRenderDollars = "100$";
const shouldRenderInvalid = "-€";

describe("<PriceTag />", () => {
  afterEach(cleanup);

  it("renders price on screen when price is number", () => {
    expect.assertions(1);

    render(<PriceTag price={numPrice} currency={euros} />);
    expect(screen.getByText(shouldRender)).toBeInTheDocument();
  });

  it("render price when price is string", () => {
    expect.assertions(1);

    render(<PriceTag price={stringPrice} currency={euros} />);
    expect(screen.getByText(shouldRender)).toBeInTheDocument();
  });

  it("renders euros when currency is not defined", () => {
    expect.assertions(1);

    render(<PriceTag price={numPrice} />);
    expect(screen.getByText(shouldRender)).toBeInTheDocument();
  });

  it("renders new currency when defined", () => {
    expect.assertions(1);

    render(<PriceTag price={numPrice} currency={dollars} />);
    expect(screen.getByText(shouldRenderDollars)).toBeInTheDocument();
  });

  it("renders invalid price on invalid string price", () => {
    expect.assertions(1);

    render(<PriceTag price={invalidPriceString} />);
    expect(screen.getByText(shouldRenderInvalid)).toBeInTheDocument();
  });

  it("renders invalid price on only space strings", () => {
    expect.assertions(1);

    render(<PriceTag price={invalidStringWithSpaces} />);
    expect(screen.getByText(shouldRenderInvalid)).toBeInTheDocument();
  });
});
