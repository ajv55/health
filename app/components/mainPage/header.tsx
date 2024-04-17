'use client';
import Link from 'next/link'
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'


export default function Header() {
  return (
    <div style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,0,0,1.0), rgba(0,0,0,0.5)), url("/weightLoss.jpeg")'
    }} className=' bg-slate-100 lg:w-full h-screen flex flex-col lg:gap-16 bg-cover bg-center justify-end items-center '>
        <h1 className='lg:text-7xl text-center text-white font-bold tracking-wide'>Lose Weight The <span className=' bg-gradient-to-br text-8xl from-orange-900 via-orange-600 to-orange-300 bg-clip-text text-transparent '><Typewriter words={['Scientific', 'Accurate', 'Deductive', 'Methodical ', 'Mathematical', 'Experimental']} loop={0} typeSpeed={100} deleteSpeed={80} delaySpeed={2000}   /></span> Way</h1>
        
        <p className='lg:text-3xl text-center text-white font-light tracking-wide w-[80%]'>Personalized <span className='font-bold bg-gradient-to-bl from-teal-800 via-teal-500 to-teal-200 bg-clip-text text-transparent'>meal plans</span>, workout <span className='font-bold bg-gradient-to-br from-blue-800 via-blue-500 to-blue-300 bg-clip-text text-transparent'>routines</span>, and progress <span className='font-bold bg-gradient-to-bl from-red-800 via-red-500 to-red-200 bg-clip-text text-transparent'>tracking</span> to help you achieve your weight loss goals.</p>
        <Link href='/reg' className='focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 lg:mb-32 font-medium rounded-lg lg:text-4xl text-sm px-5 py-2.5 me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-900'>Get Started!</Link>
    </div>
  )
}
