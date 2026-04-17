"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
     const pathName = usePathname()
    const link = <>

        <li  className={` mx-2 btn  font-bold ${pathName === "/" ? "btn-primary" : ""}`}><Link href={'/'}>Home</Link></li>

        <li
        className={` mx-2 btn font-bold ${pathName === "/timeline" ? "btn-primary" : ""}`}
        ><Link href={'/timeline'}>Timeline</Link></li>

        <li
        className={` mx-2 btn font-bold ${pathName === "/stats" ? "btn-primary" : ""}`}
        ><Link href={'/stats'}>Stats</Link></li>
    </>

    return (
        <div className='bg-[#1A1A2E] shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <span className='text-[#E5E5E5] font-bold text-xl'>Keen<span className='text-primary font-extrabold'>Keeper</span></span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}

                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-primary btn-outline">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;