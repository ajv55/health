import React from 'react'
import style from '@/app/style.module.css'

export default function FitnessHeader() {
  return (
    <div className={`${style.background} w-full bg-center p-1 bg-cover h-[30rem] flex justify-center items-center`}>
        <h1 className='lg:text-7xl text-4xl text-gray-500 text-center text-balance font-bold  tracking-wide'>Welcome to the <span className=' bg-gradient-to-tl lg:text-8xl text-6xl from-indigo-500 via-indigo-400 to-indigo-300 bg-clip-text text-transparent'>Fitness Finesse</span>: Your Ultimate Nutrition Guide</h1>
    </div>
  )
}
