
//import categories from './categories-data'

// const API_URL = 'https://gldev-practicalapi.azurewebsites.net/api/FitnessClass/GetCategories'


export function Categories() {
    // const [data, setData] = useState([])

    // const callAPI = async () => {
    //   let res = await fetch(API_URL)
    //   console.log(res)
    //   console.log(res.body)
    //   setData(res.json())
    // }


    // if (error) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>
    // if (data.length === 0) return <div>loadindg ... </div>
    let categories = [{ id: 1, name: 'yes' }]

    return (
        <div className='h-96 w-96 ring-1 ring-inset ring-gray-500'>
            {categories.map((cat) => {
                return <>
                    <span>{cat.id}</span>
                    <span>{cat.name}</span>

                </>
            })}
        </div>
    )
}