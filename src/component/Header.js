import React from 'react'
import { TITTLE } from './utils/Helper'

const Header = () => {
    return (
        <div className='bg-slate-900 flex justify-between  items-center'>
            <div className='p-4'>
                <h1
                    className="inline text-2xl font-medium border-b-2 border-s-2 ps-2 rounded-md border-transparent hover:border-blue-400 transition duration-300 cursor-pointer mb-8 p-2 text-white"
                >
                    {TITTLE}
                </h1>
            </div>
            <div>
                <ul className='flex text-white  gap-5 cursor-pointer '>
                    <li className='hover:bg-slate-700 rounded-xl p-2 px-3'>Home</li>
                    <li className='hover:bg-slate-700 rounded-xl p-2 px-3'>Services</li>
                    <li className='hover:bg-slate-700 rounded-xl p-2 px-3'>About me</li>
                    <li className='hover:bg-slate-700 rounded-xl p-2 px-3'>Portfolio</li>
                    <li className='hover:bg-slate-700 rounded-xl p-2 px-3'>contact me</li>
                </ul>
            </div>
            <div>
                <button className='bg-red-orange-gradient p-3 rounded-xl me-10'>Connect With Me</button>
            </div>
        </div>
    )
}

export default Header
