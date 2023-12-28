import { render, screen } from "@testing-library/react";
import { describe, expect } from "vitest";

import Footer from "../Footer";

test("Test", () => {
  render(<Footer />);
  const logo = screen.getByText("footer");
  expect(logo).toBeInTheDocument();
});
