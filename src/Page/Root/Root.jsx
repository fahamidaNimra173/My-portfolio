import React from 'react';
import { Outlet } from 'react-router';
import '../../App.css'
import Navbar from '../Home/Component/Navbar';

const Root = () => {
    return (
        <div className="relative bg-gradient-to-tr from-black via-[#100919] to-[#9945ff] min-h-screen overflow-hidden">

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