import React from 'react'
import Tilt from './tilt'
import { MdOutlineMailOutline } from "react-icons/md";
import Link from 'next/link';
import Logo from '@/public/FitGenius_transparent.png';
import Image from 'next/image';
import { FiActivity } from "react-icons/fi";

export default function Footer() {
  return (
    <div className='relative flex  flex-col lg:flex-wrap lg:flex-row  justify-center items-start  bg-gradient-to-bl from-indigo-950 via-indigo-950 to-indigo-950 w-full lg:h-[26rem] h-content'>
        <div className='w-full border-[6px] border-indigo-300'></div>
        <div className='  w-full  lg:w-[45%] lg:h-content  h-[20rem]  flex flex-col justify-evenly items-start'>
               <div className='flex lg:p-0 p-2  justify-center items-center gap-3'>
                    <h1 className='font-light lg:text-6xl text-white text-5xl tracking-wider'>MyFitGenius</h1>
                    <FiActivity className='lg:w-16 lg:h-16 text-indigo-300' size={40} />
                </div>
                <div className='flex mt-4 lg:mt-0 ml-2 justify-between gap-2 items-center'>
          <MdOutlineMailOutline size={37} color='white' />
          <a href="mailto:contact@myfitgenius.com" className='lg:text-2xl text-xl text-white text-center'>contact@myfitgenius.com</a>
        </div>

        <form  className='w-full'>
          <div className='flex p-3 flex-col lg:w-[32rem] w-full gap-3 rounded-lg items-start justify-start'>
            <label htmlFor="email" className='lg:text-xl text-lg text-white font-semibold  tracking-widest '>Subscribe To Our Newsletter</label>
            <input
              className='block p-2.5 w-full text-lg text-grey-700 bg-slate-200 rounded-lg focus:ring-orange-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500'
              placeholder='Email ...'
              type="email"
              name='email'
              id='email'
            />
            <button type="submit" className='p-2.5 bg-indigo-500 hover:bg-indigo-400 w-[55%] text-white text-xl rounded-lg'>Subscribe</button>
          </div>
        </form>
        </div>

        <div className=' relative   p-2 lg:p-0 flex lg:w-[52%]  w-full lg:h-[19rem] h-content'>
            <nav className=' lg:w-[33%] w-[34%]    text-white lg:text-2xl text-lg font-light  tracking-wider flex flex-col justify-evenly lg:items-start items-center'>
               <Link className='hover:text-indigo-300 hover:text-3xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/'>Home</Link>
               <Link className='hover:text-indigo-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/About'>About</Link>
               <Link className='hover:text-indigo-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/Contact'>Contact</Link>
               <Link className='hover:text-indigo-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/pricing'>Pricing</Link>
            </nav>

            <nav className=' lg:w-[33%] w-[34%]   text-white lg:text-2xl text-lg font-light  tracking-wider flex flex-col justify-evenly lg:items-start items-center'>
               <Link className='hover:text-indigo-300 hover:text-3xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='#features'>Features</Link>
               <Link className='hover:text-indigo-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='#resources'>Blog</Link>
               <Link className='hover:text-indigo-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/privacy'>Privacy Policy</Link>
               <Link className='hover:text-indigo-300 hover:text-3xl hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/faq'>FAQs</Link>
            </nav>

            <nav className=' lg:w-[33%] w-[30%]  text-white lg:text-2xl text-lg font-light  tracking-wider flex flex-col justify-evenly lg:items-start items-center'>
               
               <Link className='hover:text-indigo-300 hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/support'>Support</Link>
               <Link className='hover:text-indigo-300 text-center hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/reg'>Sign Up / Register</Link>
               <Link className='hover:text-indigo-300 text-center hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0' href='/login'>Login / Account</Link>
            </nav>

        </div>
        <div className=' lg:w-full lg:mt-0 mt-8 w-[97%] lg:h-[4rem] h-[10rem] flex lg:flex-row flex-col gap-10 justify-center items-center'>
            <p className='text-xl text-center text-white lg:text-right'>Copyright © 2024 MyFitGenius. All rights reserved.</p>
            <p className='text-lg text-center text-white lg:text-right'>Designed and built by Abel J. Villareal</p>
        </div>
        
    </div>
  )
}
