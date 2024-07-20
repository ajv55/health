import React from 'react'
import style from '@/app/style.module.css'
import Link from 'next/link'
import { IoArrowBackOutline } from 'react-icons/io5'
import CustomExercise from '@/app/components/workoutComponents/custom'


export default function Page() {
  return (
    <div className={`${style.background} w-full flex  flex-col justify-start items-start overflow-scroll h-screen`}>
       <div className='flex justify-start bg-transparent p-2 items-start w-full'>
        <Link href='/dashboard/workout/search?tab=search' className='flex justify-start items-center text-indigo-500 gap-4'><IoArrowBackOutline  size={30} color='black' /> Back to search</Link>
      </div>
        <div className='w-[95%] mt-7 mb-10  mx-auto bg-indigo-50 rounded-lg  drop-shadow-xl'>
            <CustomExercise />
        </div>
    </div>
  )
}
