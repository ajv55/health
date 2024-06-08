import React from 'react'
import style from '@/app/style.module.css'

export default function HealthHeader() {
  return (
    <div className={`${style.background} bg-center bg-cover flex justify-center items-center w-full h-[28rem]`} >
        <h1 className='lg:text-7xl mt-20 text-4xl text-gray-500 text-center text-balance font-bold tracking-wide'>Welcome to Healthy Living Today: <span className=' bg-gradient-to-br from-indigo-800 via-indigo-500 to-indigo-200 bg-clip-text text-transparent'>10</span> Wellness Tips for a Balanced Life</h1>
    </div>
  )
}
