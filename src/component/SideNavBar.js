import React from 'react'
import { IoMenu } from "react-icons/io5";

const SideNavBar = () => {
    return (
        <div className='w-56 h-screen bg-neutral-700 py-3'>
            <div className=''>
                <h1 className='text-white ml-3'>
                    <IoMenu />
                </h1>
            </div>
            <ul className='py-3 '>
                <li className=' text-[18px] p-2 text-white my-1 border-b-[1px]'>
                    Hooks
                </li>
                <li className=' text-[18px] p-2 text-white my-1 border-b-[1px]'>
                    Lazy Loading
                </li>
                <li className=' text-[18px] p-2 text-white my-1 border-b-[1px]'>
                    Infinate Scrolling
                </li>
                <li className=' text-[18px] p-2 text-white my-1 border-b-[1px]'>
                    Add to Cart
                </li>

            </ul>
        </div>
    )
}

export default SideNavBar
