import React, { useContext } from 'react'
import useFetchProduct from './customhooks/useFetchProduct'
import PageNumber from './PageNumber'
import userContext from './utils/userContext'

const Pagination = () => {
    const { data, load, page, setPage } = useFetchProduct()
    console.log("data", data)
    const { loggedIn } = useContext(userContext)
    console.log("loggedIn", loggedIn)

    if (load) return <h1>...Loading</h1>
    if (!data) return <h1>...Data loading</h1>

    return (
        <>
            <div className='flex flex-wrap justify-between gap-2 m-20'>
                {data.products && data.products.length > 0 ? (
                    data.products.slice((page - 1) * 10, page * 10).map((product, index) => (
                        <div className='border p-4' key={product.id || index}>
                            <p className="font-bold mb-2">{product.title}</p>
                            <p className="font-bold mb-2">"loggedIn": {loggedIn}</p>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="w-full h-auto"
                            />
                        </div>
                    ))
                ) : null}
            </div>
            <div className='text-center'>
                <PageNumber products={data} page={page} setPage={setPage} />
            </div>
        </>
    )
}

export default Pagination
