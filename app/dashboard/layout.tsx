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
import { FaFire } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { GrPlan } from "react-icons/gr";
import { GiMeal } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import Chatbot from '../components/chatbot';

export default function Layout({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [visible, setVisible] = useState(false);

  const {data: session} = useSession();

  const userName = session?.user?.name;

  useEffect(() => {
    if(session?.user) {
      return setIsLoggedIn(true)
    }
  }, [])

  return (
    <div style={{background: 'rgb(242,242,242)'}} className={` w-full  relative h-screen rounded-tr-lg flex flex-col lg:flex-row lg:flex-1 `}>
      {/* <ProfileHeader /> */}
      <AnimatePresence>
          {isOpen && (
                    <motion.div
                        initial={{ x: '-100vw' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100vw' }}
                        transition={{ type: 'spring', stiffness: 50 }}
                        className="fixed top-0 left-0 w-64 h-screen rounded-r-2xl bg-gradient-to-bl from-indigo-900 via-indigo-600 to-indigo-900 flex flex-col justify-between items-start shadow-lg z-50"
                    >
                        <nav className="flex flex-col p-2 space-y-4">
                        <div className='flex  w-full justify-start items-center gap-2'>
                            <h1 className='text-3xl text-white'>MyFitGenius</h1>
                            <FiActivity size={30} className='text-indigo-200' />
                          </div>
                            <Link onClick={() => setIsOpen(!isOpen)} className="text-2xl font-semibold text-white  hover:text-indigo-500" href="/dashboard">
                            Dashboard
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-indigo-500" href="/dashboard/calories">
                            Meal Log 
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-indigo-500" href="/dashboard/workout">
                            Workout
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-indigo-500" href="/dashboard/plan">Plan</Link>
                            <Link 
                              onClick={() => setIsOpen(false)}
                              className="text-2xl font-semibold text-white  hover:text-indigo-500"
                              href='/dashboard/analysis'>Analysis
                            </Link>
                            <Link onClick={() => setIsOpen(false)} className="text-2xl font-semibold text-white  hover:text-indigo-500" href="/dashboard/userSetting">
                            Settings
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
        <h1 className='text-2xl font-medium text-indigo-600 tracking-wide p-2'>Dashboard</h1>
        <MdDashboard onClick={() => setIsOpen(!isOpen)} className='text-indigo-600' size={50} />
      </div>
      <nav className='lg:flex hidden  flex-col w-[20%] justify-start items-start text-2xl gap-10 bg-gradient-to-tr from-indigo-950 via-indigo-900 to-indigo-950 h-screen'>
      <div className='flex  w-full justify-center items-center p-2 gap-2'>
           <h1 className='text-4xl text-white'>MyFitGenius</h1>
           <FiActivity size={30} className='text-indigo-200' />
        </div>
          <Link 
              className='flex justify-start items-center gap-2 text-white hover:bg-indigo-800 hover:bg-opacity-25 hover:border-r-[5px] hover:border-indigo-200 w-full px-2 py-2.5'
              href='/dashboard'>
              <MdSpaceDashboard size={35} color='white'/>Dashboard
          </Link>
          <Link 
              className='flex justify-start items-center gap-2 text-white hover:bg-indigo-800 hover:bg-opacity-25 hover:border-r-[5px] hover:border-indigo-200 w-full px-2 py-2.5'
              href='/dashboard/calories'>
              <GiMeal size={35} color='white' />Meal Log
          </Link>
          <Link 
              className='flex justify-start items-center gap-2 text-white hover:bg-indigo-800 hover:bg-opacity-25 hover:border-r-[5px] hover:border-indigo-200 w-full px-2 py-2.5'
              href='/dashboard/workout'>
              <Image src={WorkoutImg} alt='workout-img' width={35} height={35} />Workout
          </Link>
          <Link 
              className='flex justify-start items-center gap-2 text-white hover:bg-indigo-800 hover:bg-opacity-25 hover:border-r-[5px] hover:border-indigo-200 w-full px-2 py-2.5'
              href='/dashboard/plan'>
              <GrPlan size={33} color='white' />Plan
          </Link>
          <Link 
              className='flex justify-start items-center gap-2 text-white hover:bg-indigo-800 hover:bg-opacity-25 hover:border-r-[5px] hover:border-indigo-200 w-full px-2 py-2.5'
              href='/dashboard/analysis'>
              <IoMdAnalytics size={33} color='white' />Analysis
          </Link>
          <Link 
              className='flex justify-start items-center gap-2 text-white hover:bg-indigo-800 hover:bg-opacity-25 hover:border-r-[5px] hover:border-indigo-200 w-full px-2 py-2.5'
              href='/dashboard/userSetting'>
              <IoSettingsOutline size={33} color='white' />Settings
          </Link>
      </nav>
        {children}
        <button
        onClick={() => setVisible(!visible)}
        className="fixed bottom-4 right-4 bg-indigo-600 text-white p-3 rounded-full shadow-lg"
      >
        Chat
      </button>
      <Chatbot visible={visible} closeChat={() => setVisible(false)} />
    </div>
  )
}
