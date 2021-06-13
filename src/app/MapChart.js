import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule,
  ZoomableGroup,
} from 'react-simple-maps';
import { useDataMap } from './useDataMap';
import { geoUrl, useStyles } from './utils';

const MapChart = ({ setTooltipContent, year }) => {
  const { data, getGeoData, setTooltip, defaultStyle } = useDataMap(
    year,
    setTooltipContent,
  );
  const classes = useStyles();

  return (
    <ComposableMap
      className={classes.map}
      data-tip=""
      data-type="info"
      data-html={true}
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 130,
      }}
    >
      <ZoomableGroup zoom={1.5}>
        <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
        <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
        {data.length > 0 && (
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const d = getGeoData(geo);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setTooltip(d)}
                    onMouseLeave={() => setTooltipContent('')}
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
