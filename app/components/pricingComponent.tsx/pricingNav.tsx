'use client';
import { useState } from "react";
import { FiActivity } from "react-icons/fi";
import Link from 'next/link';
import Signing from '../mainPage/signing';
import { RiMenu3Line } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";

export default function PricingNav() {
  const {data: session} = useSession();

  const userName = session?.user?.name

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className='lg:w-full w-full bg-slate-50 border-b border-gray-300 z-10 absolute top-0 lg:h-content py-3 flex justify-between items-center p-3'>
      <AnimatePresence>
          {isOpen && (
                    <motion.div
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100vw' }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className="fixed top-0 left-0 w-64 h-screen rounded-r-2xl bg-gradient-to-bl from-indigo-900 via-indigo-600 to-indigo-900 flex flex-col justify-between items-start shadow-lg z-50"
                    >
                        <nav className="flex flex-col p-4 space-y-8">
                            <Link onClick={() => setIsOpen(!isOpen)} className="text-xl font-semibold text-white  hover:text-indigo-500" href="/">
                            Home
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-xl font-semibold text-white  hover:text-indigo-500" href="/About">
                            About
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-xl font-semibold text-white  hover:text-indigo-500" href="/pricing">
                            Pricing
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-xl font-semibold text-white  hover:text-indigo-500" href="/Contact">
                            Contact
                            </Link>
                        </nav>
                        {isLoggedIn ? (
                          <div className="flex flex-col items-start space-y-4">
                            <span className="text-lg text-white ">Welcome, {userName}</span>
                            <Link href='/signOut' className="text-lg text-gray-800 hover:text-teal-500">Logout</Link>
                          </div>
                        ) : (
                          <div className="flex p-4 w-full flex-col items-start space-y-4">
                            <Link href='/login' className="text-2xl font-semibold text-indigo-200 hover:text-indigo-500">Login</Link>
                            <Link href='/reg' className="text-2xl font-semibold text-indigo-200 hover:text-indigo-500">Sign Up</Link>
                          </div>
                        )}

                        <div className=' lg:w-full lg:mt-0 mt-8 w-[97%] h-[4rem] flex justify-center items-center'>
                            <p className='text-lg self-end text-white  text-center lg:text-right'>Copyright © 2024 FitGenius. All rights reserved.</p>
                        </div>
                    </motion.div>
                )}
      </AnimatePresence>
        <div className='flex justify-center items-center gap-2'>
           <h1 className='text-4xl '>MyFitGenius</h1>
           <FiActivity size={30} className="text-indigo-300"/>
        </div>

        
        <nav className=' hidden lg:text-3xl lg:w-[75%] lg:flex justify-end items-center gap-12'>
            <Link className='   hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-600 before:absolute before:left-0 before:bottom-0' href='/'>Home</Link>
            <Link className='   hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-600 before:absolute before:left-0 before:bottom-0' href='/Contact'>Contact</Link>
            <Link className='   hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-600 before:absolute before:left-0 before:bottom-0' href='/About'>About</Link>
            {session && <Link className='   hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-indigo-600 before:absolute before:left-0 before:bottom-0' href='/dashboard'>Dashboard</Link>}
        </nav>
        <RiMenu3Line onClick={() => setIsOpen(!isOpen)} className='lg:hidden text-indigo-500' size={30} />
        <Signing />
    </div>
  )
}
