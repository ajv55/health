import React from 'react'

export default function HealthHeader() {
  return (
    <div className='bg-center bg-cover flex justify-center items-center w-full h-screen' style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/wellness.jpg")'}}>
        <h1 className='text-7xl text-white text-center text-balance font-bold tracking-wide'>Welcome to Healthy Living Today: <span className=' bg-gradient-to-br from-orange-800 via-orange-500 to-orange-200 bg-clip-text text-transparent'>10</span> Wellness Tips for a Balanced Life</h1>
    </div>
  )
}
