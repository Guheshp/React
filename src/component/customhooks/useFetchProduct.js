import React, { useEffect, useState } from 'react'
import { PRODUCT_API } from '../utils/Helper'

const useFetchProduct = () => {

    const [data, setData] = useState([])
    const [load, setLoad] = useState(false)
    const [page, setPage] = useState(1)


    const handleFectchProduct = async () => {
        try {
            setLoad(true)
            const res = await fetch(PRODUCT_API + "?limit=100")
            const json = await res.json()
            const data = json
            // console.log(data)
            if (data) {
                setData(data)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoad(false)
        }
    }
    useEffect(() => {
        handleFectchProduct()
    }, [])
    return { data, load, page, setPage }
}

export default useFetchProduct
