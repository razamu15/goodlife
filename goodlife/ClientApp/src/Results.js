import { useState, useEffect, Fragment } from 'react'
import { ArrowPathIcon, ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import {FireIcon } from '@heroicons/react/24/solid'
import { Loading } from './Loading';
import { Dialog, Transition } from '@headlessui/react'

const DumbellIcon = () => {
  return (
    <svg className='h-4 mr-2 text-red-500' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 640 512" fill='currentColor'>
      <path d="M96 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32V224v64V448c0 17.7-14.3 
32-32 32H128c-17.7 0-32-14.3-32-32V384H64c-17.7 0-32-14.3-32-32V288c-17.7 
0-32-14.3-32-32s14.3-32 32-32V160c0-17.7 14.3-32 32-32H96V64zm448 0v64h32c17.7 0 32 14.3 
32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 17.7-14.3 32-32 32H544v64c0 17.7-14.3 
32-32 32H480c-17.7 0-32-14.3-32-32V288 224 64c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 
32zM416 224v64H224V224H416z"/>
    </svg>
  )
}
export function Results({ setPage, quizData }) {
  const [modalClass, setModalClass] = useState(null)
  const [data, setData] = useState({ classes: [], loading: true })

  const populateWeatherData = async () => {
    const response = await fetch('weatherforecast/classes');
    const data = await response.json();
    console.log(data)
    setData({ classes: data, loading: false });
  }

  useEffect(() => {
    populateWeatherData()
  }, [])

  return (
    <>
      <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg bg-white'>
        <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-3'>{data.loading ? 'Compiling your results' : 'Recommended Goodlife Classes'}</h1>

        {data.loading ? <Loading />
          : <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 max-h-96 overflow-auto">
            {data.classes.map((fitnessClass) => (
              <li key={fitnessClass.name} className="col-span-1 flex rounded-md shadow-sm cursor-pointer" onClick={() => setModalClass(fitnessClass)}>
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

      <Transition.Root show={modalClass !== null} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setModalClass(null)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white p-4 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-xl sm:p-6">
                  <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 "
                      onClick={() => setModalClass(null)}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {modalClass && <div>
                    <div className="mt-3">
                      <h1 className="text-3xl font-semibold leading-6 text-gray-900 pb-3">
                        {modalClass.className}
                      </h1>
                      <div className="my-3 flex gap-4">
                        {modalClass.category.map((cat) =>
                          <span className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1.5 text-sm font-medium text-red-600 ring-1 ring-inset ring-red-500/10">
                            {cat}
                          </span>)}

                        {modalClass.requiresEquipment &&
                          <div className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1.5 text-sm font-medium text-red-600 ring-1 ring-inset ring-red-500/10">
                            <DumbellIcon /> <span>Requires Equipment</span>
                          </div>
                        }

                        {modalClass.requiresEquipment &&
                          <div className="inline-flex items-center rounded-md bg-red-50 px-2.5 py-1.5 text-sm font-medium text-red-600 ring-1 ring-inset ring-red-500/10">
                            <FireIcon className='h-4 mr-2 text-red' /> <span>{modalClass.intensity} Intensity</span>
                          </div>
                        }
                      </div>


                    </div>

                    <div className="pt-3 text-lg text-gray-500">
                      {modalClass.description}
                    </div>

                  </div>}

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root >
    </>

  )
}
