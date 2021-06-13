import { makeStyles } from '@material-ui/core/styles';

export const MIN_YEAR = 1990;
export const MAX_YEAR = 2018;
let interval = MAX_YEAR - MIN_YEAR + 1;
let intervals = interval > 0 ? Math.floor(interval / 10) : 0;
export const DEFAULT_YEAR =
  MIN_YEAR === MAX_YEAR ? MIN_YEAR : intervals > 0 ? MIN_YEAR + 10 : MIN_YEAR;

export const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

export const rounded = (num) => {
  if (num > 1000000000) {
    return Math.round(num / 100000000) / 10 + 'Bn';
  } else if (num > 1000000) {
    return Math.round(num / 100000) / 10 + 'M';
  } else {
    return Math.round(num / 100) / 10 + 'K';
  }
};

export const marks = () => {
  let interval = MAX_YEAR - MIN_YEAR + 1;
  const years = Array(interval > 0 ? interval : 0)
    .fill()
    .map((_, i) => {
      return MIN_YEAR + i;
    });

  let intervals = Math.floor(interval / 10);
  let mark = MIN_YEAR;
  let allMarks = [MIN_YEAR, MAX_YEAR];
  for (let i = 0; i < intervals; i++) {
    mark += 10;
    allMarks.push(mark);
  }

  const result = [];
  years.map((year) =>
    result.push({
      value: year,
      label: allMarks.includes(year) ? year : '',
    }),
  );

  return result;
};

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '90vh',
    width: '100vw',
  },
  slider: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '20vh',
    width: `${35 + intervals * 4}vw`,
  },
  map: {
    height: '80vh',
    width: '80vw',
  },
}));
