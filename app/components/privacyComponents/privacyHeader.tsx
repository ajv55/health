import React from 'react'

export default function PrivacyHeader() {
  return (
    <div style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/privacy.jpg")'}} className='w-full bg-center bg-cover h-screen flex justify-end items-center '>
        <div className=' p-3 w-[65%] h-[27rem] flex flex-col justify-center items-end rounded-xl '>
            <h1 className='text-8xl text-white text-bold tracking-wide'>Privacy Policy</h1>
            <p className='text-2xl font-bold text-gray-100 tracking-wider text-balance text-right'>Welcome to Fitgenius, your trusted partner in health and fitness. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect your information when you use our website and services. By using our website, you agree to the terms of this Privacy Policy.</p>
        </div>
    </div>
  )
}
