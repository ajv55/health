'use client';
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import ProfileHeader from '../components/dashboardComponents/profileHeader';
import { IoMdAnalytics } from "react-icons/io";
import Image from 'next/image';
import CalImg from '@/public/calories-svgrepo-com.svg';
import NutritionImg from '@/public/nutrition-svgrepo-com (1).svg';
import WorkoutImg from '@/public/workout-day-svgrepo-com.svg';
import { MdDashboard } from "react-icons/md";
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useSession } from 'next-auth/react';

export default function Layout({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {data: session} = useSession();

  const userName = session?.user?.name;

  useEffect(() => {
    if(session) {
      return setIsLoggedIn(true)
    }
  }, [])


  return (
    <div className= 'w-full bg-slate-100 relative h-screen rounded-tr-lg flex flex-col lg:flex-row lg:flex-1 '>
      {/* <ProfileHeader /> */}
      <AnimatePresence>
          {isOpen && (
                    <motion.div
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100vw' }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className="fixed top-0 left-0 w-64 h-screen rounded-r-2xl bg-gradient-to-bl from-teal-900 via-teal-600 to-teal-900 flex flex-col justify-between items-start shadow-lg z-50"
                    >
                        <nav className="flex flex-col p-4 space-y-8">
                            <Link onClick={() => setIsOpen(!isOpen)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/dashboard">
                            Overview
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/dashboard/calories">
                            Calories 
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/dashboard/workout">
                            Workout
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-teal-500" href="/dashboard/nutrition">
                            Nutrition
                            </Link>
                        </nav>

                        {isLoggedIn && (
                          <div className="flex flex-col items-start p-2 space-y-4">
                            <span className="text-2xl text-white ">Welcome, {userName?.toUpperCase()}</span>
                            <Link href='/' className="text-2xl text-white hover:text-teal-500">Home</Link>
                            <Link href='/signOut' className="text-2xl text-white hover:text-teal-500">Logout</Link>
                          </div>
                        )}
                        
                        <div className=' lg:w-full lg:mt-0 mt-8 w-[97%] h-[4rem] flex justify-center items-center'>
                            <p className='text-lg self-end text-white  text-center lg:text-right'>Copyright © 2024 FitGenius. All rights reserved.</p>
                        </div>
                    </motion.div>
                )}
      </AnimatePresence>
      <div className='self-end md:hidden  flex justify-between items-center w-full'>
        <h1 className='text-2xl font-medium tracking-wide p-2'>Dashboard</h1>
        <MdDashboard onClick={() => setIsOpen(!isOpen)} className='' size={50} color='black'/>
      </div>
        <nav className='lg:flex hidden flex-col w-[8%] justify-evenly items-center  text-2xl bg-slate-500  h-screen'>
            <Link className='mt-16'  href='/dashboard'><IoMdAnalytics size={50} color='white'/></Link>
            <Link className='' href='/dashboard/calories'><Image src={CalImg} alt='caloires-img' width={85} height={85}></Image></Link>
            <Link className=''  href='/dashboard/workout'><Image src={WorkoutImg} alt='workout-img' width={55} height={55}></Image></Link>
            <Link className=''  href='/dashboard/nutrition'><Image src={NutritionImg} alt='nutrition-img' width={55} height={55}></Image></Link>
        </nav>
        {children}
    </div>
  )
}
