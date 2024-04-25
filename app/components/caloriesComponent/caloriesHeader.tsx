'use client';
import React from 'react'

export default function CaloriesHeader() {

  const handleMeal = async () => {
    // post the meal with the calories to the database accord to the user logged in 
  }


  return (
    <div className='w-full h-32 border p-4 border-b-2 border-zinc-900 shadow-md shadow-zinc-900 flex justify-between items-center'>
        <h1 className='text-5xl font-bold tracking-wide'>Your Calorie Tracker</h1>
        <button onClick={handleMeal} className='px-2.5 text-white py-3 w-[20%] text-2xl font-light text-center rounded-xl bg-slate-900'>Add Meal</button>
    </div>
  )
}
