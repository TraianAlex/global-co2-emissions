import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useStyles, marks, MIN_YEAR, MAX_YEAR } from './utils';

export const SliderComp = ({ year, setYear }) => {
  const classes = useStyles();

  const handleChange = (_, newValue) => setYear(newValue);

  return (
    <div className={classes.slider}>
      <Typography id="discrete-slider-always">CO2 Emissions By Year</Typography>
      <Slider
        value={year}
        aria-labelledby="discrete-slider-always"
        min={MIN_YEAR}
        step={1}
        max={MAX_YEAR}
        marks={marks()}
        valueLabelDisplay="on"
        onChange={handleChange}
        valueLabelFormat={() => `'${year.toString().slice(2)}`}
      />
    </div>
  );
};
