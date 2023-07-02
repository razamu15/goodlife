import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const EFFORT_LABEL = {
  1: 'Low',
  2: 'Low/Medium',
  3: 'Medium',
  4: 'Medium/High',
  5: 'High'
}

const getEfforLabel = (value) => {
  return EFFORT_LABEL[value]
}

export function Effort({ setPage, value, setValue }) {

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };


  return (
    <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg bg-white'>
      <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-3'>Pick Your Desired Effort Level</h1>

      <div className='font-medium text-gray-500'>
        Selected Level:
        <span className="ml-3 mt-3 inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
          {getEfforLabel(value)}
        </span>
      </div>
      <div className="my-4 flex justify-between">
        <span className='font-medium text-gray-500'>Low</span>
        <Box sx={{ width: '80%' }}>

          <Slider
            value={value}
            min={1}
            step={1}
            max={5}
            marks
            getAriaValueText={getEfforLabel}
            valueLabelFormat={getEfforLabel}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="non-linear-slider"
            sx={{color: 'rgb(239 68 68)'}}
          />
        </Box>
        <span className='font-medium text-gray-500'>High</span>
      </div>


      <div className='w-full flex justify-end'>
        <button onClick={() => setPage(4)}
          className="rounded-full flex items-center bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
          Next <ArrowRightIcon className='h-5 ml-3' />
        </button>
      </div>

    </div>
  )
}
