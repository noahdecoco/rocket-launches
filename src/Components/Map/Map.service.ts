import { MappedMarker } from "./Map.types";

export class MapService {
  static mapLaunches(launches: any[]): MappedMarker[] {
    return launches.map(
      (launch): MappedMarker => {
        const firstPad = launch.location.pads[0];
        return {
          id: firstPad.id,
          name: firstPad.name,
          coordinates: [firstPad.latitude, firstPad.longitude],
        };
      }
    );
  }
}
