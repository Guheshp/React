import React, { useEffect, useState } from 'react'
import Signals from './Signals'

const TrafficLight = () => {

    const [light, setLight] = useState("red")

    useEffect(() => {

        const interval = setInterval(() => {
            setLight(prevLight => {
                if (prevLight === "red") return "yellow";
                if (prevLight === "yellow") return "green"
                return "red";
            })
        }, 2000)

        return () => clearInterval(interval)

    }, [])

    return (
        <div className='flex justify-center mt-32'>
            <div className='flex justify-center flex-col bg-black w-32 items-center py-7 rounded'>
                <h1 className='text-center text-2xl font-medium'>Traffic light </h1>

                <div className={`h-20 w-20 my-3 rounded-full ${light === "red" ? "bg-red-700" : "bg-red-200"} `}></div>
                <div className={`h-20 w-20 my-3 rounded-full ${light === "yellow" ? "bg-yellow-700" : "bg-yellow-200"} `}></div>
                <div className={`h-20 w-20 my-3 rounded-full ${light === "green" ? "bg-green-900" : "bg-green-200"} `}></div>
            </div>
        </div>
    )
}

export default TrafficLight
