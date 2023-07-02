
import logo from './assets/GoodLife_logo.png'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Landing({ setPage }) {

    return (

        <div className="mx-auto max-w-2xl flex flex-col items-center">
            <img src={logo} className='h-40' />
            <div className="text-center">
                <h1 className="my-10 text-4xl font-bold  text-gray-900 ">
                    Fitness Goals Quiz
                </h1>
                <p className=" text-lg leading-8 text-gray-600">
                    This quiz comprises of a few sinmple questions and is designed to help you determine GoodLife classes to participate in in order to achieve your fitness goals
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <button onClick={() => setPage(1)}
                        className="rounded-full flex items-center bg-red-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600" >
                        Get started <ArrowRightIcon className='h-5 ml-3' />
                    </button>

                </div>
            </div>
        </div>

    )
}
