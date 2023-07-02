import { ArrowPathIcon } from '@heroicons/react/24/outline'

export function Results({ setPage }) {
  return (
    <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg'>
      <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-3'>Here are the results !!</h1>

      
      


      <div className='w-full flex justify-end'>
        <button onClick={() => setPage(0)}
          className="rounded-full flex items-center bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
          Restart <ArrowPathIcon className='h-5 ml-3' />
        </button>
      </div>

    </div>
  )
}
