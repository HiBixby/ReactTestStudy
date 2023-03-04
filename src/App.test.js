import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByRole("link", { name: /learn react/i }); // a 태그의 test 검사
  expect(linkElement).toBeInTheDocument();
});
