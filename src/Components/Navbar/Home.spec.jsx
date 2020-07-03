import React from "react";
import { Home } from "./Home";
import { render } from "@testing-library/react";

describe("Home", () => {
  describe("when logged out", () => {
    it("renders form", () => {
      const { getByLabelText } = render(<Home />);
      expect(getByLabelText("Email:")).toHaveAttribute("name", "email");
      expect(getByLabelText("Password:")).toHaveAttribute("name", "password");
    });

  })
  describe("when logged in", () => {
    it("renders profile link", () => {
      const { getByText } = render(<Home isLoggedIn />);
      expect(getByText("go to profile")).toBeInTheDocument()
    });
  });
});
