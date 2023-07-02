import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Loading } from './Loading'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function Effort({ setPage }) {
  const [selected, setSelected] = useState([])

  const toggleCategory = (id) => () => {
    if (selected.includes(id)) {
      setSelected(selected.filter((catId) => catId !== id))
    } else {
      setSelected([...selected, id])
    }
  }


  return (
    <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg'>
      <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-3'>Pick Your Desired Effort Level</h1>


      <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        slider
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




