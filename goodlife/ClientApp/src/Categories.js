import { useState, useEffect } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { Loading } from './Loading'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const images = {
    Yoga: 'https://www.goodlifefitness.com/content/experience-fragments/goodlife/class_category/class-category/mind-body/_jcr_content/root/responsivegrid/responsivegrid_copy/responsivegrid_14476/image.coreimg.90.1440.jpeg/1591364300838/img-class-cat-flexibility.jpeg',
    Aqua: 'https://images.squarespace-cdn.com/content/v1/5639488ae4b0703e0d84a1a2/1599528713654-YS4VF3KW6K4X4P67VGH7/Goodlife-25.jpg?format=1500w',
    Strength: 'https://www.goodlifefitness.com/content/experience-fragments/goodlife/classes/class-details-layout/58/_jcr_content/root/responsivegrid/responsivegrid/image.coreimg.90.1024.jpeg/1673038194419/group-fitness-photoshoot-2019-0b2a0966-resize-2.jpeg',
    Tone: 'https://images.ctfassets.net/zqfcw6ceqcqc/4mfNF3uZW78IUNaNglEhDO/21e0237c81d78f446b9a5aab4c1816eb/WEB0045_New_Website_-_Images_Tone_1800x580.jpg?w=1800&h=580&fl=progressive&q=90&fm=jpg&fit=fill&f=center',
    Cycling: 'https://www.goodlifefitness.com/content/experience-fragments/goodlife/classes/class-details-layout/89/_jcr_content/root/responsivegrid/responsivegrid/image.coreimg.90.1024.jpeg/1608586475807/les-mills-104.jpeg',
    Cardio: 'https://blog.goodlifefitness.com/media/1559/hub-treadmill.jpg',
    Dance: 'https://www.goodlifefitness.com/content/experience-fragments/goodlife/class_category/class-category/dance/_jcr_content/root/responsivegrid/responsivegrid_322550577/image.coreimg.90.1440.png/1591302799724/classcategorypage-cardio-imagebreak.png',
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
                <div className="my-4 grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {data.categories.map((cat) => {
                        return (
                            <div
                                key={cat.id}
                                className={classNames("relative flex items-center rounded-lg border border-gray-300 shadow-sm hover:border-gray-400",
                                    selected.includes(cat.id) ? "bg-red-500 text-white scale-95" : "bg-white text-black scale-100", "transition-all duration-200 ease overflow-clip")}
                                onClick={toggleCategory(cat.id)}
                            >
                                <div className="flex-shrink-0">
                                    <img className="h-20 w-28" src={images[cat.name]} alt="" />
                                </div>
                                <div className="min-w-0 flex-1 px-3 py-3">
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




