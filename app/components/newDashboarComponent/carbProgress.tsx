import React from 'react'

export default function CarbProgress() {
  return (
    <div className='w-[32%] h-full flex p-2  flex-col justify-center gap-1 items-center'>
        <div className='w-full flex justify-between items-center'>
            <span className='text-indigo-400 font-light'>Carbs</span>
            <div className='flex justify-center items-center gap-1'>
                <span>0%</span>
                <span>Cals</span>
            </div>
        </div>

        <div className='w-full h-5 bg-indigo-50 rounded-lg '>

        </div>

        <div className='flex w-full justify-between items-center'>
            <span>0g</span>
            <span>left 234g</span>
        </div>

    </div>
  )
}
