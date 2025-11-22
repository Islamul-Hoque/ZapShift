import { NavLink, Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo';

const ZapShiftNavbar = () => {
    const navLinks = <>
        <li><NavLink to="/services" className="nav-link">Services</NavLink></li>
        <li><NavLink to="/coverage" className="nav-link">Coverage</NavLink></li>
        <li><NavLink to="/about" className="nav-link">About Us</NavLink></li>
        <li><NavLink to="/pricing" className="nav-link">Pricing</NavLink></li>
        <li><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
        <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
    </>

    return (
        <div className="navbar bg-white px-6 md:px-8 shadow-md sticky top-0 z-40">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost md:hidden"> <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg> </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"> {navLinks} </ul>
                </div>

                <Link to="/"> <Logo/> </Link>
            </div>

            <div className="navbar-center hidden md:flex">
                <ul className="font-semibold menu menu-horizontal px-1 gap-2 text-sm"> {navLinks} </ul>
            </div>

            <div className="navbar-end gap-3">
                <div className="flex items-center gap-3">
                    <Link to="/login" className="btn btn-sm">Login</Link>
                    <Link to="/register" className="btn bg-primary btn-sm">Register</Link>
                </div>
            </div>
        </div>
    );
};

export default ZapShiftNavbar;