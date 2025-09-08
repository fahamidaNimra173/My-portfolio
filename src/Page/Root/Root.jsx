import React from 'react';
import { Outlet } from 'react-router';
import '../../App.css'
import Navbar from '../Home/Component/Navbar';

const Root = () => {
    return (
        <div className="relative bg-gradient-to-br from-black via-[#4d016d] to-[#835fe6] min-h-screen overflow-hidden">

            {/* Grain overlay */}
            <div className="noise-overlay" />

            {/* Content above grain */}
            <div className="relative z-10">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Root;