import React from 'react'

import { MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from './mode-toggle'
import { Link } from 'react-router';

const NavBar : React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className="w-full flex justify-between py-4 items-center pagePadding sticky top-0 z-50 backdrop-blur-lg">
            <div className="w-full  flex mx-auto justify-between items-center">
            <h1 className="text-2xl ">Grants</h1>
            <div className="hidden md:flex gap-6 min-w-fit">
                <a href="" className="hover:text-[#344054]">Fundings</a>
                <a href="" className="hover:text-[#344054]">Programs </a>
                <a href="" className="hover:text-[#344054]">Contact Us</a>
                <a href="" className="hover:text-[#344054]">About Us</a>
            </div>
            <div className="hidden md:flex gap-4 min-w-fit">
                <button className="hover:bg-white hover:text-[#7F56D9] text-base transition-all ease-in-out duration-150 px-4 py-2 rounded-md">Log in</button>
                <Link to="/register">
                    <button className="bg-[#7F56D9] hover:bg-[#6941c6] px-4 py-2 rounded-md text-base text-white font-semibold transition-all ease-in-out duration-150">Sign up</button>
                </Link>
                <ModeToggle/>
            </div>

            </div>
            <div>
                {!isOpen && (
                <MenuIcon className="md:hidden z-30 absolute right-10 top-4" onClick={toggleMenu}/>
                
                )}
                {isOpen && (
                <X className="md:hidden z-30 absolute right-10 top-4" onClick={toggleMenu}/>
                )}
            </div>
            {isOpen && (
            <div className=" h-screen w-screen absolute top-0 right-0 z-20 backdrop-blur-md p-10 mt-16">
                
                <div className="flex flex-col gap-6 min-w-fit">
                    <a href="" className="hover:text-[#344054]">Fundings</a>
                    <a href="" className="hover:text-[#344054]">Programs </a>
                    <a href="" className="hover:text-[#344054]">Contact Us</a>
                    <a href="" className="hover:text-[#344054]">About Us</a>  
                    <button className="bg-white text-[#7F56D9] text-base px-4 py-2 rounded-md font-semibold">Log in</button>
                    <button className="bg-[#7F56D9] text-white text-base px-4 py-2 rounded-md font-semibold">Sign up</button>
                </div>
                
            </div>)}
        </div>
  )
}

export default NavBar




