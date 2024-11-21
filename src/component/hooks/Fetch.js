import React from 'react'
import useFetchUniversityData from '../customhooks/useFetchUniversityData'

const Fetch = () => {
    const { Data } = useFetchUniversityData()
    // const x = Data &&
    //     Data.slice(0, 10).map((data) => {
    //         console.log(data)
    //     })
    return (
        <div>

        </div>
    )
}

export default Fetch
