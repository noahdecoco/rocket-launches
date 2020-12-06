import { LaunchData, MappedLaunchData } from "./useFetchLaunches.types";

export class UseFetchLaunchesService {
  static getFormattedDate(date: Date): string {
    return date.toISOString().split("T")[0];
  }

  static mapResponseForClient(launches: LaunchData[] = []): MappedLaunchData[] {
    try {
      return launches.map(
        (launch): MappedLaunchData => {
          const firstPad = launch.location.pads[0];
          return {
            id: firstPad.id,
            name: firstPad.name,
            coordinates: [firstPad.longitude, firstPad.latitude],
          };
        }
      );
    } catch (error) {
      throw new Error("Oops... Something went wrong!");
    }
  }
}
