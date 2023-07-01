import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';

//export default class App extends Component {
//  static displayName = App.name;

//  render() {
//    return (
//      <Layout>
//        <Routes>
//          {AppRoutes.map((route, index) => {
//            const { element, ...rest } = route;
//            return <Route key={index} {...rest} element={element} />;
//          })}
//        </Routes>
//      </Layout>
//    );
//  }
//}

function App() {
    //const [page, setPage] = useState(Pages.Landing)
    //const [nextPage, setNextPage] = useState(Pages.Landing)

    //let [isShowing, setIsShowing] = useState(true)
    //let [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500)


    //const transitionPage = (nextPage: Pages) => {
    //    setIsShowing(false)
    //    setNextPage(nextPage)
    //    resetIsShowing()
    //}

    //let comp
    //if (page === Pages.Landing) comp = <Landing setPage={transitionPage} />
    //if (page === Pages.Q1) comp = <Categories />


    return (

        <div className="bg-white h-screen w-scree relative isolate flex justify-center items-center">



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






            {/*<Transition*/}
            {/*    show={isShowing}*/}
            {/*    enter="transition-all ease-out duration-[400ms]"*/}
            {/*    enterFrom="opacity-0 translate-x-full "*/}
            {/*    enterTo="opacity-100 translate-x-0 "*/}
            {/*    leave="transition-all ease-out duration-300"*/}
            {/*    leaveFrom="opacity-100 translate-x-0 "*/}
            {/*    leaveTo="opacity-0 -translate-x-full"*/}
            {/*    afterLeave={() => setPage(nextPage)}*/}
            {/*>*/}
            {/*    {comp}*/}
            {/*</Transition>*/}

            <div
                className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl "
                aria-hidden="true"
            >
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


