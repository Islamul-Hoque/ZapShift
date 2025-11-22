import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import Logo from '../../../Components/Logo/Logo';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-secondary text-primary rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <a to="/services" className="link link-hover">Services</a>
        <a to="/coverage" className="link link-hover">Coverage</a>
        <a to="/about" className="link link-hover">About Us</a>
        <a to="/pricing" className="link link-hover">Pricing</a>
        <a to="/blog" className="link link-hover">Blog</a>
        <a to="/contact" className="link link-hover">Contact</a>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://linkedin.com" target="_blank" className="btn btn-circle bg-blue-600 border-none hover:bg-blue-700 text-white">   <FaLinkedinIn className="w-5 h-5" /> </a>
          <a href="https://x.com"        target="_blank" className="btn btn-circle bg-black border-white border hover:bg-gray-900 text-white"> <SiX className="w-5 h-5" />  </a>
          <a href="https://facebook.com" target="_blank" className="btn btn-circle bg-blue-700 border-none hover:bg-blue-800 text-white">   <FaFacebookF className="w-5 h-5" /> </a>
          <a href="https://youtube.com"  target="_blank" className="btn btn-circle bg-red-600 border-none hover:bg-red-700 text-white">   <FaYoutube className="w-5 h-5" /> </a>
        </div>
      </nav>

      <aside>  <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>  </aside>
    </footer>
)}

export default Footer;