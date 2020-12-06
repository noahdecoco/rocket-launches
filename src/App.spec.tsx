import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import * as hooks from "./Hooks/useFetchLaunches";

describe("<App/>", () => {
  it("renders the title", () => {
    render(<App />);
    const titleElement = screen.getByTestId("app-title");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the loader only when data is null", () => {
    render(<App />);

    const loaderElement = screen.queryByTestId("app-loader");
    const errorElement = screen.queryByTestId("error-alert");
    const mapContainer = screen.queryByTestId("map-container");

    expect(loaderElement).toBeInTheDocument();
    expect(mapContainer).toBeNull();
  });

  it("should render the map when data loads", () => {
    jest.spyOn(hooks, "useFetchLaunches").mockImplementationOnce(() => {
      return {
        launches: [{ name: "test-name", location: { pads: [{ id: "123" }] } }],
      };
    });

    render(<App />);

    const loaderElement = screen.queryByTestId("app-loader");
    const errorElement = screen.queryByTestId("error-alert");
    const mapContainer = screen.queryByTestId("map-container");

    expect(loaderElement).not.toBeInTheDocument();
    expect(errorElement).toBeNull();
    expect(mapContainer).toBeInTheDocument();
  });

  it("should render the empty map and error when data loads", () => {
    jest.spyOn(hooks, "useFetchLaunches").mockImplementationOnce(() => {
      return {
        error: "test-error-message",
      };
    });

    render(<App />);

    const loaderElement = screen.queryByTestId("app-loader");
    const errorElement = screen.queryByTestId("error-alert");
    const mapContainer = screen.queryByTestId("map-container");

    expect(loaderElement).not.toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
    expect(mapContainer).toBeInTheDocument();
  });
});
