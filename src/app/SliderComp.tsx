import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { marks, MIN_YEAR, MAX_YEAR } from './utils';

type SliderCompProps = {
  year: number;
  setYear: (year: number) => void;
};

export const SliderComp = ({ year, setYear }: SliderCompProps) => {
  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === 'number') {
      setYear(newValue);
    }
  };

  return (
    <Box
      sx={{
        mt: 1,
        mb: 3,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '20vh',
        width: `${35 + Math.floor((MAX_YEAR - MIN_YEAR + 1) / 10) * 4}vw`,
      }}
    >
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
    </Box>
  );
};
