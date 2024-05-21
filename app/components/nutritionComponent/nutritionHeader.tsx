import Link from 'next/link'
import React from 'react'

export default function NutritionHeader() {
  return (
    <div className='w-full mb-3 h-24 flex shadow-lg  rounded-md shadow-zinc-900  justify-between items-center p-3'>
        <h1 className='text-5xl font-bold tracking-wide'>Your Personalized Nutritional Guide</h1>
        <div className='w-[20%] h-14  flex justify-center items-center'>
          <Link className=' bg-gradient-to-bl from-violet-900 via-violet-600 to-violet-300 hover:from-violet-300 hover:via-violet-600 hover:to-violet-900 rounded-2xl text-white text-center text-2xl px-2.5 py-2 w-[76%]' href='/dashboard/nutrition/waterHistory'>Simple Meal Plan</Link>
        </div>
        <div className='w-[20%] h-14  flex justify-center items-center'>
          <Link className=' bg-gradient-to-bl from-violet-900 via-violet-600 to-violet-300 hover:from-violet-300 hover:via-violet-600 hover:to-violet-900 rounded-2xl text-white text-center text-2xl px-2.5 py-2 w-[76%]' href='/dashboard/nutrition/simpleMeal'>Simple Meal Plan</Link>
        </div>
    </div>
  )
}
