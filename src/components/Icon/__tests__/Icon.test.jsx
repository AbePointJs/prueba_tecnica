import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Icon from "../Icon";
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
    render(<Icon animate />);
    const firstPath = screen.getByTestId("first-path");

    fireEvent.mouseEnter(firstPath);
    await delay(1000);
    expect(firstPath).toHaveStyle("fill: white");
  });

  it("dont change color when animate is not present", async () => {
    expect.assertions(1);
    render(<Icon />);
    const firstPath = screen.getByTestId("first-path");

    fireEvent.mouseEnter(firstPath);
    await delay(1000);
    expect(firstPath).not.toHaveStyle("fill: white");
  });
});
