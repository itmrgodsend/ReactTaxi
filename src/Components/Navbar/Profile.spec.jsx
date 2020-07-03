import React from "react";
import { Profile } from "./Profile";
import { render } from "@testing-library/react";

describe("Profile", () => {
  it("renders correctly", () => {
    const { container } = render(<Profile />);
    expect(container.innerHTML).toMatch("Profile")
  });
});
