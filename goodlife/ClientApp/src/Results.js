import { useState, useEffect } from 'react'
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Loading } from './Loading';

export function Results({ setPage, quizData }) {
  const [data, setData] = useState({ classes: [], loading: true })

  const populateWeatherData = async () => {
    const response = await fetch('weatherforecast');
    const data = await response.json();
    console.log(data)
    setData({ classes: data, loading: false });
  }

  useEffect(() => {
    populateWeatherData()
  }, [])

  return (
    <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg bg-white'>
      <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-3'>{data.loading ? 'Compiling your results' : 'Recommended Goodlife Classes'}</h1>


      {data.loading ? <Loading />
        : <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 max-h-96 overflow-auto">
          {data.classes.map((fitnessClass) => (
            <li key={fitnessClass.name} className="col-span-1 flex rounded-md shadow-sm cursor-pointer">
              <div className='flex w-20 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white bg-red-500' >
                {fitnessClass.classAbbr}
              </div>
              <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                <div className="flex-1 truncate px-4 py-3 ">
                  <button className="font-medium text-gray-900 hover:text-gray-600">
                    {fitnessClass.className}
                  </button>
                  <div className='flex items-center gap-1'><span className="text-gray-500 text-xs pt-0.5">View details</span> <ArrowRightIcon className='h-3 mt-1' /> </div>
                </div>

              </div>
            </li>
          ))}
        </ul>
      }

      <div className='w-full flex justify-end pt-4'>
        <button onClick={() => setPage(0)}
          className="rounded-full flex items-center bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
          Restart <ArrowPathIcon className='h-5 ml-3' />
        </button>
      </div>

    </div>
  )
}
