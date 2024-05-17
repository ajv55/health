import React from 'react'
import Tilt from './tilt'
import { MdOutlineMailOutline } from "react-icons/md";
import Link from 'next/link';
import Logo from '@/public/FitGenius_transparent.png';
import Image from 'next/image';
import { FiActivity } from "react-icons/fi";

export default function Footer() {
  return (
    <div className='relative flex flex-wrap mt-20 justify-center items-center  bg-gradient-to-bl from-emerald-800 via-emerald-600 to-emerald-300 w-full h-screen'>
        <Tilt/>

        <div className=' w-[45%] mt-32 h-[34rem]  flex flex-col justify-evenly items-start'>
               <div className='flex justify-center items-center gap-3'>
                    <h1 className='font-light text-8xl tracking-wider'>FitGenius</h1>
                    <FiActivity size={80} color='gold'/>
                </div>
            <div className='flex ml-2 justify-between gap-2 items-center'>
                
                <MdOutlineMailOutline size={37} color='white' />
                <h4 className='text-2xl text-center'>contact@fitgenius.com</h4>
            </div>

            <form >
                <div className='flex  p-3 flex-col w-[32rem] gap-3 rounded-lg justify-start'>
                    <label htmlFor="email" className='text-xl text-white font-semibold tracking-widest '>Subscribe To Our Newsletter</label>
                    <input className='block p-2.5 w-full  text-lg text-grey-700 bg-slate-200 rounded-lg  focus:ring-orange-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500' placeholder='Email ...' type="email" name='email' id='email' />
                </div>
            </form>
        </div>

        <div className=' relative  mt-48 flex w-[52%] h-[19rem]'>
            <nav className=' w-[33%]   text-white text-3xl font-light  tracking-wider flex flex-col justify-evenly items-start'>
               <Link className='hover:text-red-300 hover:text-3xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/'>Home</Link>
               <Link className='hover:text-blue-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/About'>About</Link>
               <Link className='hover:text-orange-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/Contact'>Contact</Link>
               <Link className='hover:text-teal-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/pricing'>Pricing</Link>
            </nav>

            <nav className=' w-[33%]   text-white text-3xl font-light  tracking-wider flex flex-col justify-evenly items-start'>
               <Link className='hover:text-red-300 hover:text-3xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='#features'>Features</Link>
               <Link className='hover:text-blue-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='#resources'>Blog</Link>
               <Link className='hover:text-orange-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/privacy'>Privacy Policy</Link>
            </nav>

            <nav className=' w-[33%]   text-white text-3xl font-light  tracking-wider flex flex-col justify-evenly items-start'>
               <Link className='hover:text-red-300 hover:text-3xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/faq'>FAQs</Link>
               <Link className='hover:text-blue-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/support'>Support</Link>
               <Link className='hover:text-orange-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/reg'>Sign Up / Register</Link>
               <Link className='hover:text-teal-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/login'>Login / Account</Link>
            </nav>

        </div>
        
        <div className=' w-full h-[4rem] flex justify-center items-center'>
            <p className='text-xl text-white text-right'>Copyright © 2024 FitGenius. All rights reserved.</p>
        </div>

    </div>
  )
}
