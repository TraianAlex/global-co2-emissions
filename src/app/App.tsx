import { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import Box from '@mui/material/Box';
import MapChart from './MapChart';
import { SliderComp } from './SliderComp';
import { DEFAULT_YEAR } from './utils';
import { TooltipContent } from './types';

function App() {
  const [year, setYear] = useState<number>(DEFAULT_YEAR);
  const [content, setContent] = useState<TooltipContent | null>(null);

  return (
    <Box
      sx={{
        mt: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '90vh',
        width: '100vw',
      }}
    >
      <SliderComp year={year} setYear={setYear} />
      <MapChart setTooltipContent={setContent} year={year} />
      <Tooltip id="map-tooltip">
        {content && (
          <div>
            <p>
              {content.country} <strong>{content.year}</strong>
            </p>
            <p>
              CO2 Emissions - <strong>{content.co2}</strong>
            </p>
            <p>
              Population - <strong>{content.population}</strong>
            </p>
          </div>
        )}
      </Tooltip>
    </Box>
  );
}

export default App;
