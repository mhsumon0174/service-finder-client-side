import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayouts = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            <div className='h-full'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;