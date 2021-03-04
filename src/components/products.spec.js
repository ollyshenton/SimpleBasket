import { render, screen } from "@testing-library/react";
import Products from "./Products";

test("renders products", () => {
  render(<Products />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
