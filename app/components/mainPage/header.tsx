'use client';
import Link from 'next/link'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { IoIosArrowRoundForward } from "react-icons/io";


export default function Header() {
  return (
    <div  className=' bg-slate-100 lg:w-full h-[37rem] flex flex-col lg:gap-16  bg-cover bg-center justify-center items-center gap-12 lg:justify-center lg:items-center '>
        <div className='max-w-6xl mx-auto h-full flex flex-col justify-center gap-10 mt-32 items-start'>
        <h1 className='lg:text-7xl text-5xl text-center lg:mt-32 font-bold tracking-wide'>Lose Weight The <span className=' bg-gradient-to-br lg:text-7xl text-4xl from-indigo-900 via-indigo-600 to-indigo-300 bg-clip-text text-transparent '><Typewriter words={['Scientific', 'Accurate', 'Deductive', 'Methodical ', 'Mathematical', 'Experimental']} loop={0} typeSpeed={100} deleteSpeed={80} delaySpeed={2000}   /></span> Way</h1>
        
        <p className='lg:text-3xl text-xl text-left font-light tracking-wide w-[80%]'>Personalized <span className='font-bold bg-gradient-to-bl from-teal-800 via-teal-500 to-teal-200 bg-clip-text text-transparent'>meal plans</span>, workout <span className='font-bold bg-gradient-to-br from-indigo-800 via-indigo-500 to-indigo-300 bg-clip-text text-transparent'>routines</span>, and progress <span className='font-bold bg-gradient-to-bl from-cyan-800 via-cyan-500 to-cyan-200 bg-clip-text text-transparent'>tracking</span> to help you achieve your weight loss goals.</p>
        <Link href='/reg' className='border-indigo-300 flex justify-center items-center bg-gradient-to-br  hover:bg-indigo-800 focus:ring-4 bg-white hover:shadow-md hover:shadow-indigo-300 border text-indigo-600 hover:text-white focus:ring-indigo-300 lg:mb-32 font-medium rounded-xl lg:text-3xl text-xl px-5 py-2.5 me-2 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900'>Get Started! <IoIosArrowRoundForward size={40}  /></Link>
        </div>
    </div>
  )
}
