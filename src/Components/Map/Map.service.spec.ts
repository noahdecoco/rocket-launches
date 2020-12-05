import { MapService } from "./Map.service";

describe("The MapService", () => {
  const mockLauchData = {
    location: {
      pads: [
        {
          id: 42,
          name: "test-name",
          latitude: 1234,
          longitude: 4321,
        },
      ],
    },
  };

  it("should map the api date to markers correctly", function () {
    const mapped = MapService.mapLaunches([mockLauchData]);
    expect(mapped).toEqual([
      {
        id: 42,
        name: "test-name",
        coordinates: [1234, 4321],
      },
    ]);
  });
});
