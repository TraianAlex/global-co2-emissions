import { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import { rounded } from './utils';
import type { DataRow, TooltipContent } from './types';

type GeographyWithIso = {
  properties: {
    ISO_A3?: string;
  };
};

export const useDataMap = (
  year: number,
  setTooltipContent: React.Dispatch<React.SetStateAction<TooltipContent | null>>,
) => {
  const [data, setData] = useState<DataRow[]>([]);

  useEffect(() => {
    csv('/owid-co2-data.csv').then((rows: unknown) => {
      setData(rows as DataRow[]);
    });
  }, []);

  const colorScale = scaleLinear<string>()
    .domain([0.01, 10, 20, 30, 40, 100, 500, 1000, 1500])
    .range([
      '#ffedea',
      '#ffcec5',
      '#ffad9f',
      '#ff8a75',
      '#ff5533',
      '#e2492d',
      '#be3d26',
      '#9a311f',
      '#782618',
    ]);

  const getGeoData = (geo: GeographyWithIso): DataRow | undefined => {
    const isoCode = geo.properties.ISO_A3;
    if (!isoCode) {
      return undefined;
    }
    return data.find((s) => s.iso_code === isoCode && s.year === year.toString());
  };

  const setTooltip = (d: DataRow | undefined): void => {
    if (!d) {
      setTooltipContent(null);
      return;
    }
    setTooltipContent({
      country: d.country,
      year: d.year,
      co2: d.co2,
      population: rounded(d.population),
    });
  };

  const defaultStyle = (d?: DataRow) => ({
    default: {
      fill: d?.co2 ? colorScale(Number(d.co2)) : '#F5F4F6',
      outline: 'none',
    },
    hover: {
      fill: '#F53',
      outline: 'none',
    },
    pressed: {
      fill: '#E42',
      outline: 'none',
    },
  });

  return { data, getGeoData, setTooltip, defaultStyle };
};
