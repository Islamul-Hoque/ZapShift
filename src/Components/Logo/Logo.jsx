import React from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';
const Logo = () => {
    return (
        <Link to='/'>
            <div className='flex items-end'>
                <img src={logo} className='h-[2.49rem]' alt="ZapShift Logo" />
                <h3 className="text-[1.4rem] font-bold -ms-[0.7rem] -mb-2 ">ZapShift</h3>
            </div>
        </Link>
    );
};

export default Logo;