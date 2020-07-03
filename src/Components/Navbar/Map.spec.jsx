import React from "react";
import { Map } from "./Map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => {} })),
}));

describe("Map", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Map />);
    expect(mapbox.Map).toHaveBeenCalledWith({
      center: [30.3056504, 59.9429126],
      container: getByTestId('map'),
      style: "mapbox://styles/mapbox/streets-v9",
      zoom: 10,
    });
  });
});
