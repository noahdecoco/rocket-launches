export interface LaunchResponseData {
  error?: string;
  launches?: MappedLaunchData[];
}

export interface DateRange {
  from: string;
  to: string;
}

export interface PadData {
  id: string;
  name: string;
  longitude: number;
  latitude: number;
}

export interface LaunchData {
  location: {
    pads: PadData[];
  };
}

export interface MappedLaunchData {
  id: string;
  name: string;
  coordinates: [number, number];
}
