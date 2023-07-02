import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Loading } from './Loading'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const images = {
    Yoga: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    Aqua: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    Strength: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    Tone: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    Cycling: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    Cardio: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    Dance: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

export function Categories({setPage}) {
    const [data, setData] = useState({ categories: [], loading: true })
    const [selected, setSelected] = useState([])
    
    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setData({ categories: data, loading: false });
    }

    useEffect(() => {
        populateWeatherData()
    }, [])

    const toggleCategory = (id) => () => {
        if (selected.includes(id)) {
            setSelected(selected.filter((catId) => catId !== id))
        } else {
            setSelected([...selected, id])
        }
    }


    return (
        <div className='w-screen max-w-2xl p-10 ring-1 ring-inset ring-gray-400 rounded-lg'>
            <h1 className='text-3xl font-semibold tracking-tight mt-3 pb-3'>Select All Categories that Interest You</h1>

            {data.loading
                ? <Loading />
                :
                <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

                    {data.categories.map((cat) => {
                        return (
                            <div
                                key={cat.id}
                                className={classNames("relative flex items-center space-x-3 rounded-lg border border-gray-300 px-3 py-3 shadow-sm hover:border-gray-400",
                                    selected.includes(cat.id) ? "bg-red-500 text-white" : "bg-white text-black", "transition-all duration-200 ease")}
                                onClick={toggleCategory(cat.id)}
                            >
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={images[cat.name]} alt="" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <button className="focus:outline-none">
                                        <span className="absolute inset-0" aria-hidden="true" />
                                        <p className="text-base font-medium">{cat.name}</p>
                                    </button>
                                </div>
                            </div>
                        )
                    })}

                </div>
            }

            <div className='w-full flex justify-end'>
                <button onClick={() => setPage(3)}
                    className="rounded-full flex items-center bg-red-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
                    Next <ArrowRightIcon className='h-5 ml-3' />
                </button>
            </div>

        </div>
    )
}




