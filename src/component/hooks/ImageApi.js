import React from 'react'
import useFetchImage from '../customhooks/useFetchImage'

const ImageApi = () => {

    const { image } = useFetchImage()
    const data = image
    // console.log("image", data)

    const filterdImage = image && image.filter(albumId => albumId?.albumId)
        .map(data => data.albumId)


    // const albumId = filterdImage.filter()

    console.log("filterdImage", filterdImage)


    return (
        <div className='m-10'>
            <p className='text-2xl font-bold text-blue-950 border inline-block p-2 rounded border-red-950 '>Image Api</p>

            <div>

            </div>
        </div>
    )
}

export default ImageApi
