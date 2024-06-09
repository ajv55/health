import React from 'react'

export default function MealGroup() {
  return (
    <div className=' w-full flex flex-col justify-evenly items-center h-full'>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Breakfast</h1>
        <span className='text-indigo-600 text-xl'>0</span>
    </div>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Lunch</h1>
        <span className='text-indigo-600 text-xl'>0</span>
    </div>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Dinner</h1>
        <span className='text-indigo-600 text-xl'>0</span>
    </div>

    <div className='flex flex-col justify-center items-center gap-1'>
        <h1 className='text-gray-500 text-xl font-light'>Snacks</h1>
        <span className='text-indigo-600 text-xl'>0</span>
    </div>

    </div>
  )
}
