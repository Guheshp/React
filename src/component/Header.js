import React from 'react'
import { TITTLE } from './utils/Helper'

const Header = () => {
    return (
        <div className='bg-neutral-800'>
            <div className='p-4'>
                <h1
                    className="inline text-2xl font-medium border-b-2 border-s-2 ps-2 rounded-md border-transparent hover:border-blue-400 transition duration-300 cursor-pointer mb-8 p-2 text-white"
                >
                    {TITTLE}
                </h1>
            </div>
        </div>
    )
}

export default Header
