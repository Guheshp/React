import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../utils/Helper'

const UseMemo = () => {
    const [text, setText] = useState(0)

    const [backgroundTheam, setBackgroundTheam] = useState(false)
    console.log("renderd")
    //if i do heavy operation
    const theamToggle = () => {
        setBackgroundTheam(!backgroundTheam)
    }

    //const prime = UseMemo(() => findNthPrime(text), [text])// useMemo  it is react hook ,lets us cache the result of the calculation between re-render.
    // const prime = () => {
    //     return findNthPrime(text)
    // }
    const prime = useMemo(() => findNthPrime(text), [text])


    return (
        <div className={" text-center pt-10 "}  >
            <div className={(backgroundTheam && "bg-gray-600")}>

                <div className='pt border'>
                    <div>
                        <h1 className='text-2xl font-extrabold text-blue-950'>Use Memo</h1>
                        <button className='border bg-green-500 rounded text-black px-2  m-2' onClick={theamToggle}>toggle</button>
                    </div>

                    <input
                        type="number"
                        className='border border-black rounded-md p-2'
                        value={text}
                        onChange={(e) => setText(e.target.value)} />
                    <h2 className='mt-10'>nth prime {prime}</h2>
                </div>
            </div >
        </div>
    )
}

export default UseMemo
