'use client';
import Link from 'next/link'
import { signOut } from 'next-auth/react'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className= 'w-full bg-slate-100 h-screen rounded-tr-lg flex flex-1'>
      <div className='bg-slate-500 w-full absolute h-[4rem] flex justify-end items-end'>
         <Link href='/signOut'  className='text-4xl rounded-2xl text-white bg-slate-500 px-2.5 py-2.5  text-center'>Sign Out</Link>
      </div>

        <nav className='flex  flex-col w-[20%] justify-evenly items-start relative text-2xl bg-slate-500  h-screen'>
            <Link className='border-b h-[3rem] w-full flex justify-start items-center'  href='/dashboard'>Dashboard Page ? </Link>
            <Link className='border-b h-[3rem] w-full flex justify-start items-center' href='/dashboard/calories'>Calories Tracker ? </Link>
            <Link className='border-b h-[3rem] w-full flex justify-start items-center'  href='/dashboard/workout'>Workout Page and Tracker area ? </Link>
            <Link className='border-b h-[3rem] w-full flex justify-start items-center'  href='/dashboard/nutrition'>Nutrition Page ? </Link>
        </nav>
        {children}
    </div>
  )
}
