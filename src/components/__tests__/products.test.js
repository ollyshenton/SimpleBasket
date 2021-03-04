import { render, screen } from "@testing-library/react";
import Products from "../Products";

test("renders products", () => {
  render(<Products />);

  expect(productItems.getByText("Learn React")).toBeInTheDocument();
});
