import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from 'react-simple-maps';
import { useDataMap } from './useDataMap';
import { geoUrl } from './utils';
import type { TooltipContent } from './types';

type MapChartProps = {
  setTooltipContent: React.Dispatch<React.SetStateAction<TooltipContent | null>>;
  year: number;
};

type MapGeo = {
  rsmKey: string;
  properties: {
    ISO_A3?: string;
  };
};

const MapChart = ({ setTooltipContent, year }: MapChartProps) => {
  const { data, getGeoData, setTooltip, defaultStyle } = useDataMap(
    year,
    setTooltipContent,
  );

  return (
    <ComposableMap
      className="app-map"
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 130,
      }}
    >
      <ZoomableGroup zoom={1.5}>
        <Sphere id="map-sphere" fill="transparent" stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: MapGeo[] }) =>
              geographies.map((geo: MapGeo) => {
                const d = getGeoData(geo);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    data-tooltip-id="map-tooltip"
                    onMouseEnter={() => setTooltip(d)}
                    onMouseLeave={() => setTooltipContent(null)}
                    style={defaultStyle(d)}
                  />
                );
              })
            }
          </Geographies>
        )}
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default MapChart;
