import React, { useEffect, useState } from 'react'
import { POST } from '../utils/Helper'

const useFetchUniversityData = () => {
    const [Data, setData] = useState()

    const handelFetch = async () => {
        try {
            const res = await fetch(POST)
            const json = await res.json()
            setData(json)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        handelFetch()
    }, [])

    return { Data }
}

export default useFetchUniversityData
