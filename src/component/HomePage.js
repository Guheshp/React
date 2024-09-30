import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';
import SideNavBar from './SideNavBar';

const HomePage = () => {
    return (
        // <div className="p-4 bg-gray-100 min-h-screen">
        //     <h1 className="text-3xl font-bold text-blue-500">Hello World</h1>
        //     <div className='float-end'>
        //         <Link to={`/useMemo`}>
        //             use Memo
        //         </Link>
        //     </div>
        //     <div className='float-end'>
        //         <Link to={`/useState`}>
        //             useState
        //         </Link>
        //     </div>
        //     <div className='mx-16'>
        //         <Link to={`/imageapi`}>
        //             Image Api
        //         </Link>
        //     </div>



        // </div>
        <div className=''>
            <Header />
            <SideNavBar />
        </div>
    )
}

export default HomePage;
