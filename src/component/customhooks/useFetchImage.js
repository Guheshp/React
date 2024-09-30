import React, { useState } from 'react'
import { useEffect } from 'react'

const useFetchImage = () => {

    const [image, setImage] = useState()

    const handleFetchImage = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
            const json = await response.json()
            // console.log(json)
            setImage(json)

        } catch (error) {

        }

    }

    useEffect(() => {
        handleFetchImage()
    }, [])
    return { image }
}

export default useFetchImage
