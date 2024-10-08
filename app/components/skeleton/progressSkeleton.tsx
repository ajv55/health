import React from 'react'

export default function ProgressSkeleton() {
  return (
    <div className="flex absolute rounded-lg bg-white flex-col z-40 top-0 left-0 w-full  items-center gap-14 justify-start h-[42rem]">
        <div className='w-full h-24   flex justify-center items-center'>
            <div className='w-[65%] h-4 rounded-2xl bg-indigo-200'></div>
        </div>
    <div className='w-full flex justify-center items-center'>
    <div className='flex flex-col w-44   h-60 justify-center items-center gap-10'>
            <div className='w-14 h-3 bg-gray-200 rounded-lg shadow-lg shadow-indigo-200'></div>
            <div className='w-14 h-3 bg-gray-400 rounded-lg shadow-lg shadow-indigo-200'></div>
            <div className='w-14 h-3 bg-gray-200 rounded-lg shadow-lg shadow-indigo-200'></div>
    </div>
    <div className="relative">
      <div className="animate-pulse rounded-full bg-indigo-500 lg:w-64 w-44 lg:h-64 h-44"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="rounded-full bg-white lg:w-44 lg:h-44 w-32 h-32"></div>
      </div>
    </div>
    <div className='flex flex-col w-44 h-60 justify-center items-center gap-10'>
            <div className='w-14 h-3 bg-gray-200 rounded-lg shadow-lg shadow-indigo-200'></div>
            <div className='w-14 h-3 bg-gray-400 rounded-lg shadow-lg shadow-indigo-200'></div>
            <div className='w-14 h-3 bg-gray-200 rounded-lg shadow-lg shadow-indigo-200'></div>
    </div>
    </div>
    <div className='w-full flex justify-evenly items-center '>
        <div className='w-14 h-3 bg-gray-200 rounded-lg shadow-lg shadow-indigo-200'></div>
        <div className='w-14 h-3 bg-gray-400 rounded-lg shadow-lg shadow-indigo-200'></div>
        <div className='w-14 h-3 bg-gray-200 rounded-lg shadow-lg shadow-indigo-200'></div>
    </div>
    <div className='w-full flex justify-evenly items-center '>
        <div className='w-[95%] h-12 bg-gray-200 rounded-2xl shadow-lg shadow-indigo-200'></div>
    </div>

  </div>
  )
}
