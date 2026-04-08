export const MIN_YEAR = 1994;
export const MAX_YEAR = 2024;

const interval = MAX_YEAR - MIN_YEAR + 1;
const intervals = interval > 0 ? Math.floor(interval / 10) : 0;

export const DEFAULT_YEAR = intervals > 0 ? MIN_YEAR + 10 : MIN_YEAR;

export const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/v2/topojson-maps/world-110m.json';

export const rounded = (num: string | number | undefined): string => {
  const value = Number(num ?? 0);
  if (value > 1000000000) {
    return `${Math.round(value / 100000000) / 10}Bn`;
  }
  if (value > 1000000) {
    return `${Math.round(value / 100000) / 10}M`;
  }
  return `${Math.round(value / 100) / 10}K`;
};

type SliderMark = {
  value: number;
  label: string | number;
};

export const marks = (): SliderMark[] => {
  const localInterval = MAX_YEAR - MIN_YEAR + 1;
  const years = Array(localInterval > 0 ? localInterval : 0)
    .fill(null)
    .map((_, i) => MIN_YEAR + i);

  const intervalCount = Math.floor(localInterval / 10);
  let mark = MIN_YEAR;
  const allMarks = [MIN_YEAR, MAX_YEAR];
  for (let i = 0; i < intervalCount; i += 1) {
    mark += 10;
    allMarks.push(mark);
  }

  return years.map((year) => ({
    value: year,
    label: allMarks.includes(year) ? year : '',
  }));
};
