import React from 'react'
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const SideNavBar = () => {

    return (
        <div className=''>

            <div className='w-[17%] border h-[calc(100vh-64px)] fixed overflow-y-scroll'>
                <div className='overflow-y-scroll h-full'>
                    <ul className="menu menu-lg rounded-box w-56">
                        <li><Link>React Introduction</Link></li>
                        <li><Link>Components</Link></li>
                        <li><Link>Rendering</Link></li>
                        <li><Link>Hooks</Link></li>
                        <li><Link>Routes</Link></li>
                        <li><Link>State Management</Link></li>
                        <li><Link>Styling</Link></li>
                        <li><Link className='text-nowrap'>Component / Libraries</Link></li>
                        <li><Link>API Calls</Link></li>
                        <li><Link>Testing</Link></li>
                        <li><Link to={`/problems`}>Problems</Link></li>
                        <li><Link to={`/trafficlight`}>Traffic light</Link></li>
                        <li><Link to={`/comment`}>Comment problem</Link></li>
                        <li><Link to={`/list`}>List Problem</Link></li>
                        <li><Link to={`/pagination`}>Pagination</Link></li>
                        <li><Link to={`/redux`}>Redux</Link></li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default SideNavBar
{/* <div className=''>
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

            </ul> */}