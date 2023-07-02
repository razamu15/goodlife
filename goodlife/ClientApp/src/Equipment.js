import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Switch } from '@headlessui/react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Equipment({ setPage }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg'>
      <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-3'>Include classes that require equipment?</h1>

      {/* <div className='font-medium text-gray-500'>
        Selected Level:
        <span className="ml-3 mt-3 inline-flex items-center gap-x-1.5 rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-700">
          yes
        </span>
      </div> */}
      <div className="my-4 flex">
        <span className='font-medium text-gray-500 w-auto pr-5 text-center'>No, Dont Include Classes that Require Equipment</span>

        <Switch
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
          className={classNames(
            enabled ? 'bg-red-500' : 'bg-gray-200',
            'relative inline-flex items-center h-10 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out'
          )}
        >
          
          <span
            className={classNames(
              enabled ? 'translate-x-7' : 'translate-x-0',
              'pointer-events-none relative inline-block h-8 w-8 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
            )}
          >
            <span
              className={classNames(
                enabled ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
              )}
              aria-hidden="true"
            >
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 12 12">
                <path
                  d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span
              className={classNames(
                enabled ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
                'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
              )}
              aria-hidden="true"
            >
              <svg className="h-5 w-5 text-red-600" fill="currentColor" viewBox="0 0 12 12">
                <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
              </svg>
            </span>

          </span>

        </Switch>
        <span className='w-auto font-medium text-gray-500 pl-5 text-center'>Yes, Include Classes that Require Equipment</span>
      </div>


      <div className='w-full flex justify-end pt-3'>
        <button onClick={() => setPage(4)}
          className="rounded-full flex items-center bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
          Next <ArrowRightIcon className='h-5 ml-3' />
        </button>
      </div>

    </div>
  )
}

