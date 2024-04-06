import Link from 'next/link'
import React from 'react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className= 'w-full bg-slate-100 h-screen flex'>
        <nav className='flex flex-col w-[32%] justify-evenly items-start  text-2xl bg-red-200  h-screen'>
        <Link className='border-b h-[3rem] w-full flex justify-start items-center'  href='/dashboard'>Dashboard Page ? </Link>
            <Link className='border-b h-[3rem] w-full flex justify-start items-center' href='/dashboard/calories'>Calories Tracker ? </Link>
            <Link className='border-b h-[3rem] w-full flex justify-start items-center'  href='/dashboard/workout'>Workout Page and Tracker area ? </Link>
            <Link className='border-b h-[3rem] w-full flex justify-start items-center'  href='/dashboard/nutrition'>Nutrition Page ? </Link>
        
        </nav>
        {children}
    </div>
  )
}
