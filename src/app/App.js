import React, { useState } from 'react';
import ReactTooltip from 'react-tooltip';
import MapChart from './MapChart';
import { SliderComp } from './SliderComp';
import { DEFAULT_YEAR, useStyles } from './utils';

function App() {
  const [year, setYear] = useState(DEFAULT_YEAR);
  const [content, setContent] = useState('');
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <SliderComp year={year} setYear={setYear} />
      <MapChart setTooltipContent={setContent} year={year} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default App;
