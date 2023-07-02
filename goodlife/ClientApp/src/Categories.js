import { useState, useEffect } from 'react'

//import categories from './categories-data'

// const API_URL = 'https://gldev-practicalapi.azurewebsites.net/api/FitnessClass/GetCategories'


export function Categories() {
    const [state, setState] = useState({ forecasts: [], loading: true })
    // const [data, setData] = useState([])

    // const callAPI = async () => {
    //   let res = await fetch(API_URL)
    //   console.log(res)
    //   console.log(res.body)
    //   setData(res.json())
    // }
    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setState({ forecasts: data, loading: false });
    }

    useEffect(() => {
        populateWeatherData()
    }, [])


    // if (error) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>
    // if (data.length === 0) return <div>loadindg ... </div>
    let categories = [{ id: 1, name: 'yes' }]

    if (state.loading) {
        return( <p><em>Loading...</em></p>)
    }
        

    return (
        <div className='h-96 w-96 ring-1 ring-inset ring-gray-500'>
            {state.forecasts.map(forecast =>
                <tr key={forecast.date}>
                    <td>{forecast.date}</td>
                    <td>{forecast.temperatureC}</td>
                    <td>{forecast.temperatureF}</td>
                    <td>{forecast.summary}</td>
                </tr>
            )}

            {/*{categories.map((cat) => {*/}
            {/*    return <>*/}
            {/*        <span>{cat.id}</span>*/}
            {/*        <span>{cat.name}</span>*/}



            {/*    </>*/}
            {/*})}*/}
        </div>
    )
}
