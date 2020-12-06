import React, { useEffect, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

import { MappedMarker } from "./Map.types";
import { MapService } from "./Map.service";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

type Props = {
  launches: any[] | undefined;
};

export const Map: React.FC<Props> = ({ launches }) => {
  const [markers, setMarkers] = useState<MappedMarker[]>([]);

  useEffect(() => {
    if (launches) {
      setMarkers(MapService.mapLaunches(launches));
    }
  }, [launches]);

  return (
    <ComposableMap>
      <ZoomableGroup zoom={1}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {markers.map(({ id, name, coordinates }) => (
          // @ts-ignore
          <Marker key={id} coordinates={coordinates}>
            <g
              fill="none"
              stroke="#FF5533"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(-12, -24)"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
            </g>
            <text
              textAnchor="middle"
              style={{
                fontFamily: "system-ui",
                fill: "#5D5A6D",
                fontSize: "0.6rem",
              }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ZoomableGroup>
    </ComposableMap>
  );
};
