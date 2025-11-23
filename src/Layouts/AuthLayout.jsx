import React from 'react';
import Logo from '../Components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className="w-full min-h-screen flex">
            <div className="w-1/2 flex flex-col">
                <div className="pt-8 pl-8">  <Logo />  </div>

                <div className="flex-1 flex items-center justify-center ">
                    <div className="w-[70%]"> <Outlet /> </div>
                </div>
            </div>

            <div className="w-1/2 bg-[#fafdf0] flex items-center justify-center">
                <img src={authImage} className="max-w-[80%]" alt="" />
            </div>

        </div>
    );
};

export default AuthLayout;
