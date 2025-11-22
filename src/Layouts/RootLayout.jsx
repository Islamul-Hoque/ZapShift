import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const RootLayout = () => {
    return (
        <div className='flex flex-col max-w-7xl mx-auto bg-[#eaeced]'>
            <NavBar/>
            <div className='grow min-h-screen'><Outlet/></div>
            <Footer/>
        </div>
    );
};

export default RootLayout;