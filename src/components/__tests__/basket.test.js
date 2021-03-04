import { render, screen } from "@testing-library/react";
import Basket from "../Basket";

test("renders products", () => {
  render(<Basket />);

  expect(Basket.getByText("Basket")).toBeInTheDocument();
});
