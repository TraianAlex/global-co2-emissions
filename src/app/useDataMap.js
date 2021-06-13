import { useState, useEffect } from 'react';
import { csv } from 'd3-fetch';
import { scaleLinear } from 'd3-scale';
import { rounded } from './utils';

export const useDataMap = (year, setTooltipContent) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/owid-co2-data.csv`).then((data) => {
      setData(data);
    });
  }, []);

  const colorScale = scaleLinear()
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

  const getGeoData = (geo) =>
    data.find(
      (s) => s.iso_code === geo.properties.ISO_A3 && s.year === year.toString(),
    );

  const setTooltip = (d) =>
    d
      ? setTooltipContent(
          `<p>${d?.country} <strong>${
            d?.year
          }</strong></p><p>CO2 Emissions - <strong>${
            d?.co2
          }</strong></p><p>Population - <strong>${rounded(
            d?.population,
          )}</strong></p>`,
        )
      : '';

  const defaultStyle = (d) => ({
    default: {
      fill: d ? colorScale(d.co2) : '#F5F4F6',
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
