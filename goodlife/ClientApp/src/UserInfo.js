import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'


export function UserInfo({ setPage }) {
  const [form, setForm] = useState({ name: '', email: '', address: '', city: '', region: '', postal_code: '' });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  };


  return (
    <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg bg-white'>
      <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-1.5'>Personal Information</h1>

      <div className=' text-gray-500'>
        please enter your details so we can provide a personalized experience
      </div>



      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6 md:col-span-2 my-2 py-4">
        <div className="sm:col-span-3">
          <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="first-name"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className="block w-full rounded-md py-1.5 px-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-3">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className='col-span-full'>
          <label htmlFor="phone-number" className="block text-sm font-medium leading-6 text-gray-900">
            Street Address
          </label>
          <div className="relative mt-2 rounded-md ">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="country" className="sr-only">
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option>🇨🇦 CA</option>
                <option>🇺🇸 US</option>
                <option>🇲🇽 MX</option>
              </select>
            </div>
            <input
              type="text"
              autoComplete="street-address"
              name="address"
              id="address"
              value={form.address}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 px-1.5 pl-24 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
            City
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              value={form.city}
              onChange={handleChange}
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
            State / Province
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="region"
              id="region"
              value={form.region}
              onChange={handleChange}
              autoComplete="address-level1"
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
            ZIP / Postal code
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="postal_code"
              id="postal-code"
              value={form.postal_code}
              onChange={handleChange}
              autoComplete="postal-code"
              className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>



      <div className='w-full flex justify-end mt-4'>
        <button onClick={() => { console.log(form); setPage(2) }}
          className="rounded-full flex items-center bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
          Next <ArrowRightIcon className='h-5 ml-3' />
        </button>
      </div>

    </div>
  )
}

