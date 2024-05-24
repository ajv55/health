'use client';
import Link from 'next/link'
import React, { useState } from 'react';
import Logo from '@/public/FitGenius_transparent.png'
import { FiActivity } from "react-icons/fi";
import Signing from './mainPage/signing';
import { RiMenu3Line } from "react-icons/ri";
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

export default function Nav() {

  const {data: session} = useSession();

  const userName = session?.user?.name

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(isOpen)

  return (
    <div className='lg:w-full bg-transparent w-full absolute  top-0 left-0 lg:h-content py-3 flex justify-between items-center p-3'>
      {isOpen && (
                <motion.div
                    initial={{ x: '-100vw' }}
                    animate={{ x: 0 }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    className="fixed top-0 left-0 w-64 h-screen bg-white flex flex-col justify-between items-start shadow-lg z-50"
                >
                    <nav className="flex flex-col p-4 space-y-8">
                        <Link onClick={() => setIsOpen(!isOpen)} className="text-2xl font-semibold text-gray-800 hover:text-teal-500" href="/">
                         Home
                        </Link>
                        <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-gray-800 hover:text-teal-500" href="/About">
                        About
                        </Link>
                        <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-gray-800 hover:text-teal-500" href="/pricing">
                        Pricing
                        </Link>
                        <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-gray-800 hover:text-teal-500" href="/Contact">
                        Contact
                        </Link>
                    </nav>
                    {isLoggedIn ? (
                      <div className="flex flex-col items-start space-y-4">
                        <span className="text-lg text-gray-800">Welcome, {userName}</span>
                        <Link href='/signOut' className="text-lg text-gray-800 hover:text-teal-500">Logout</Link>
                      </div>
                    ) : (
                      <div className="flex p-4 w-full flex-col items-start space-y-4">
                        <Link href='/login' className="text-2xl font-semibold text-blue-600 hover:text-teal-500">Login</Link>
                        <Link href='/reg' className="text-2xl font-semibold text-blue-600 hover:text-teal-500">Sign Up</Link>
                      </div>
                    )}

                    <div className=' lg:w-full lg:mt-0 mt-8 w-[97%] h-[4rem] flex justify-center items-center'>
                        <p className='text-lg self-end text-center lg:text-right'>Copyright © 2024 FitGenius. All rights reserved.</p>
                    </div>
                </motion.div>
            )}

        <div className='flex justify-center items-center gap-2'>
           <h1 className='text-4xl text-white'>FitGenius</h1>
           <FiActivity size={30} color='gold'/>
        </div>
        
        <nav className='hidden lg:text-3xl lg:w-[75%] text-white lg:flex justify-evenly items-center'>
            <Link className='  hover:text-2xl hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/'>Home</Link>
            <Link className='  hover:text-2xl hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/Contact'>Contact</Link>
            <Link className='  hover:text-2xl hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/About'>About</Link>
        </nav>
        <RiMenu3Line onClick={() => setIsOpen(!isOpen)} className='lg:hidden' size={30} color='white' />
        <Signing />
    </div>
  )
}
