import Link from 'next/link'
import React from 'react';
import Logo from '@/public/FitGenius_transparent.png'
import { FiActivity } from "react-icons/fi";
import Signing from './mainPage/signing';

export default function Nav() {
  return (
    <div className='lg:w-full bg-transparent   z-10 absolute top-0 lg:h-content py-3 flex justify-between items-center p-3'>
        <div className='flex justify-center items-center gap-2'>
           <h1 className='text-4xl text-white'>FitGenius</h1>
           <FiActivity size={30} color='gold'/>
        </div>
        <nav className=' lg:text-3xl lg:w-[75%] text-white flex justify-evenly items-center'>
            <Link className='  hover:text-2xl hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/'>Home</Link>
            <Link className='  hover:text-2xl hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/Contact'>Contact</Link>
            <Link className='  hover:text-2xl hover:before:scale-x-100 hover:before:origin-right relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/About'>About</Link>
        </nav>
        <Signing />
    </div>
  )
}
