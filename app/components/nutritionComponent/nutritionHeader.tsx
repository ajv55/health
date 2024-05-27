import Link from 'next/link'
import React from 'react'

export default function NutritionHeader() {
  return (
    <div className='w-full mb-3 h-24 flex shadow-lg  rounded-md shadow-zinc-900  justify-between items-center lg:p-3 p-1'>
        <h1 className='lg:text-5xl text-2xl font-bold tracking-wide'>Nutritional Guide</h1>
        <div className='lg:w-[20%] w-[36%] h-14  flex justify-center items-center'>
          <Link className=' bg-gradient-to-bl from-violet-900 via-violet-600 mr-1 to-violet-300 hover:from-violet-300 hover:via-violet-600 hover:to-violet-900 rounded-2xl text-white text-center lg:text-2xl text-sm lg:px-2.5 px-1.5 py-2 lg:w-[76%] w-full' href='/dashboard/nutrition/waterHistory'>Water History</Link>
        </div>
        <div className='lg:w-[20%] w-[36%] h-14  flex justify-center items-center'>
          <Link className=' bg-gradient-to-bl from-violet-900 via-violet-600 to-violet-300 hover:from-violet-300 hover:via-violet-600 hover:to-violet-900 rounded-2xl text-white text-center lg:text-2xl text-sm lg:px-2.5 px-1.5 py-2 lg:w-[76%] w-full' href='/dashboard/nutrition/simpleMeal'>Meal Plan</Link>
        </div>
    </div>
  )
}
