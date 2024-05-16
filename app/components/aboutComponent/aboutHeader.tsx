import React from 'react'

export default function AboutHeader() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-center bg-cover' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/healthScience.jpg")'}}>
        <h1 className='text-6xl text-white text-center text-balance font-medium tracking-wide'>Welcome to <span className=' bg-gradient-to-bl from-violet-900 via-cyan-300 to-cyan-500 bg-clip-text text-transparent'>FitGenius</span>, your ultimate destination for achieving your health and fitness goals through <span className=' bg-gradient-to-br from-red-900 via-amber-500 to-red-300 bg-clip-text text-transparent'>science-based </span> techniques and <span className=' bg-gradient-to-tl from-teal-900 via-teal-400 to-emerald-300 bg-clip-text text-transparent'>personalized</span> guidance.</h1>
    </div>
  )
}
