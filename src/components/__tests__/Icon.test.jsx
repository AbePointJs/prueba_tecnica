import React from "react";
import { render, screen } from "@testing-library/react";
import Icon from "../Icon/Icon";
import "@testing-library/jest-dom/extend-expect";

function delay(time) {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, time);
  });
}

describe("<Icon />", () => {
  it("change color when animate prop", async () => {
    expect.assertions(1);
    const animate = true;
    render(<Icon animate={animate} />);
    const firstPath = screen.getByTestId("first-path");

    await delay(1000);
    expect(firstPath).toHaveStyle("fill: rgba(255, 255, 255, 1)");
  });

  it("dont change color when animate is false", async () => {
    expect.assertions(1);
    const animate = false;
    render(<Icon animate={animate} />);
    const firstPath = screen.getByTestId("first-path");

    await delay(1000);
    expect(firstPath).not.toHaveStyle("fill: rgba(255, 255, 255, 1)");
  });
});
