import React from 'react'

export default function FitnessHeader() {
  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/nutritional.jpg")`}} className='w-full bg-center p-1 bg-cover h-screen flex justify-center items-center'>
        <h1 className='lg:text-7xl text-4xl  text-center text-balance font-bold text-white tracking-wide'>Welcome to the <span className=' bg-gradient-to-tl lg:text-8xl text-6xl from-orange-500 via-amber-400 to-orange-100 bg-clip-text text-transparent'>Fitness Finesse</span>: Your Ultimate Nutrition Guide</h1>
    </div>
  )
}
