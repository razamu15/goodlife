import { useState } from 'react'
import { Categories } from './Categories'
import { Effort } from './Effort'
import Landing from './Landing'
import { Transition } from '@headlessui/react'
import { useTimeoutFn } from 'react-use'
import './custom.css';
import { Equipment } from './Equipment'
import { UserInfo } from './UserInfo'
import { Results } from './Results'

const Page = ({ page, transitionPage, quizData, setQuizData }) => {

    if (page === 0) return <Landing setPage={transitionPage} />
    if (page === 1) return <UserInfo setPage={transitionPage} />
    if (page === 2) {
        return (
            <Categories
                setPage={transitionPage}
                selected={quizData.categories}
                setSelected={(newCategories) => setQuizData({ ...quizData, categories: newCategories })}
            />
        )
    }
    if (page === 3) {
        return (
            <Effort
                setPage={transitionPage}
                value={quizData.effort}
                setValue={(newEffort) => setQuizData({ ...quizData, effort: newEffort })}
            />
        )
    }
    if (page === 4) {
        return (
            <Equipment
                setPage={transitionPage}
                enabled={quizData.equipment}
                setEnabled={(equip) => setQuizData({ ...quizData, equipment: equip })}
            />
        )
    }
    if (page === 5) return <Results setPage={transitionPage} quizData={quizData} />
    return <div>wrong page, shouldnt be here. please reload</div>
}

function App() {
    const [quizData, setQuizData] = useState({ categories: [], effort: 3, equipment: false })
    const [page, setPage] = useState(0)
    const [nextPage, setNextPage] = useState(1)
    let [isShowing, setIsShowing] = useState(true)
    let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)

    const transitionPage = (nextPage) => {
        setIsShowing(false)
        setNextPage(nextPage)
        resetIsShowing()
        if (nextPage == 0) {
            setQuizData({ categories: [], effort: 3, equipment: false })
        }
    }


    return (

        <div className="bg-white h-screen w-screen relative isolate flex justify-center items-center">

            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#df3d3d] to-[#ec1e1a] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>

            <Transition
                show={isShowing}
                enter="transition-all ease-out duration-[400ms]"
                enterFrom="opacity-0 translate-x-full "
                enterTo="opacity-100 translate-x-0 "
                leave="transition-all ease-out duration-300"
                leaveFrom="opacity-100 translate-x-0 "
                leaveTo="opacity-0 -translate-x-full"
                afterLeave={() => setPage(nextPage)}
            >
                <Page page={page} transitionPage={transitionPage} quizData={quizData} setQuizData={setQuizData} />
            </Transition>

            <div className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true" >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#df3d3d] to-[#ec1e1a] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>


        </div>

    )
}

export default App


