import React from 'react'

export default function WorkoutPlanSkeleton() {

  return (
    <div className='w-full flex flex-col rounded-lg animate-pulse gap-3 drop-shadow-xl justify-start items-center h-[43rem] bg-white'>
        <div className='w-[45%] mt-8 h-5 bg-indigo-400 rounded-xl'></div>
        <div className='w-[85%] h-2 bg-gray-400 rounded-xl'></div>
        <div className='w-[45%] h-2 bg-gray-400 rounded-xl'></div>
        <div className='w-[25%] h-2 bg-gray-400 rounded-xl'></div>
        <div className='w-[48%] h-2 bg-gray-400 rounded-xl'></div>
        <div className='w-[50%] h-2 bg-gray-400 rounded-xl'></div>
        <div className='w-full flex justify-evenly gap-3 mt-8 items-center'>
            <div className='w-[40%] h-[16rem] rounded-xl bg-indigo-200 drop-shadow-lg'></div>
            <div className='w-[40%] h-[16rem] rounded-xl bg-indigo-200 drop-shadow-lg'></div>
        </div>
    </div>
  )
}
